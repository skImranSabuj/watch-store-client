import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loading from '../../images/Clock.gif';
// import useAuth from './../Hooks/useAuth';




const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()

    if (isLoading) {
        return <div className="d-flex justify-content-center">
            <img src={loading} alt="" className="w-25 mx-auto" />
        </div>
    }

    return (
        <div>
            <Route
                {...rest}

                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>}
            >

            </Route>

        </div>
    );
};

export default PrivateRoute;