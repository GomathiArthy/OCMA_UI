import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import CourierDashBoard from '../component/CourierComponent/CourierDashboard';
//import AddCourier from '../component/CourierComponent/AddCourier';
//import Courier from '../component/CourierComponent/Courier'
// import UpdatePayment from "../../components/payment/UpdatePayment";
// import Payment from '../../components/payment/Payment';
import Header from './Header';
import Footer from './Footer';
import UserHomePage from './UserHomePage';

const Router = () => (
    <BrowserRouter>
         <div>
             <Switch>
                 <Route exact path={`/courier`} component={UserHomePage} />
                 {/* <Route exact path={`/addCourier`} component={AddCourier} />
                 <Route exact path={`/checkStatus/:courierId`} component={Courier} /> */}
             </Switch>
         </div>
    </BrowserRouter>
);

export default Router;