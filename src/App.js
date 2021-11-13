import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './componenets/Header/Header';
import Home from './pages/Home/Home/Home';
import DetailService from './pages/DetailService/DetailService';
import Login from './pages/Login/Login';
import AddService from './pages/AddPlace/Addplace';
import AuthProvider from './context/AuthProvider';
import AllOrders from './pages/AllOrders/AllOrders';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './componenets/Footer/Footer';
import { NotFound } from 'http-errors';
import MyOrders from './pages/MyOrders/MyOrders';
import Contact from './componenets/Contact/Contact';
import Register from './pages/Register/Register';
import AllWatches from './pages/AllWatches/AllWatches';
import Orders from './pages/Orders/Orders';
import Dashboard from './pages/Dashboard/Dashboard';
import Payment from './pages/Payment/Payment';
import MakeAdmin from './pages/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App-header bg-light">
      <AuthProvider>
        <Router>
          <Route>
            <Header></Header>
          </Route>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allWatches">
              <AllWatches></AllWatches>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/details/:id">
              <DetailService></DetailService>
            </PrivateRoute>
            <PrivateRoute path="/orders/:id">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/allorders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/MyOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Route>
            <Footer></Footer>
          </Route>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
