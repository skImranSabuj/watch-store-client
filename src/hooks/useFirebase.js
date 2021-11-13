import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, getIdToken,updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import axios from 'axios';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = (location,history) => {
    setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                addUserTodatabase(user.displayName,user.email, 'PUT');
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
  }
  const registerWithEmail=(name,email,password,history)=>{
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const registeredUser = {email, displayName:name};
        setError('');
        setUser(registeredUser);

        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
          setError(error.message);
        });
        addUserTodatabase(name, email, 'POST');
        history.replace('/');
    })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
  });
  }
  const logInUser = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setUser(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
    });
  }
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .finally(() => setIsLoading(false))
  }

  // observe whether user auth state changed or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
          .then(idToken => localStorage.setItem('idToken', idToken))
      }
      else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);
  // const addUserTodatabase=(displayName, email)=>{
  //   const data = {displayName, email};
  //   axios.post('https://young-ocean-72177.herokuapp.com/users', data)
  //           .then(res => {
  //               if (res.data.insertedId) {
  //                   alert('User Added to database successfully');
  //                   // reset();
  //               }
  //           });
  // }
  const addUserTodatabase = (displayName,email, method) => {
    const user = { displayName,email };
    fetch('https://young-ocean-72177.herokuapp.com/users', {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
}

  return {
    user,
    setUser,
    isLoading,
    signInUsingGoogle,
    logOut,
    registerWithEmail,
    logInUser,
    addUserTodatabase
  }
}

export default useFirebase;