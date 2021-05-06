
//import { Provider } from 'react-redux';
import store from './store/store'
import AddCustomerForm from './component/Pages/CustomerComponent/AddCustomerForm'
import AddComplaint from './component/Pages/CustomerComponent/AddComplaint';
// import { addStaffMember } from './action/ManagerAction/addstaffaction';
import AddStaffMember from './component/Pages/ManagerComponent/AddStaffMember';
//import CustomerRouter from './routers/customer/CustomerRouter'
//import AddComplaint from './component/Pages/CustomerComponent/AddComplaint';
import StaffMember from './component/Pages/ManagerComponent/StaffMember';


function App() {

    return (
        <div>
            {/* <Provider store={store()}>
               <CustomerRouter />

            </Provider> */}
             {/* <AddCustomerForm store={store()}></AddCustomerForm>  */}
             {/* <AddComplaint store={store()}></AddComplaint>  */}
            {/* <AddStaffMember store={store()}></AddStaffMember>  */}

            <StaffMember store={store()}></StaffMember>         </div>

    );


}

export default App;