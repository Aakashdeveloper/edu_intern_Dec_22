import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './Listing/listing';
import Details from './details/details';
import ViewOrder from './orders/viewOrder';
import PlaceOrder  from './orders/placeOrder';
import Register from './login/register';
import Login from './login/login';

const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/listing/:mealId" component={Listing}/>
            <Route path="/details" component={Details}/>
            <Route path="/placeOrder/:restName" component={PlaceOrder}/>
            <Route path="/viewBooking" component={ViewOrder}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing
