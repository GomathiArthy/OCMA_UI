import { combineReducers } from "redux";
import OfficeOutletReducer from "./officeoutlet/OfficeOutletReducer"
import CustomerReducer from "./customer/CustomerReducer"
import ComplaintReducer from "./customer/ComplaintReducer"
import AddStaffMemberReducer from "./manager/AddStaffMemberReducer"
const RootReducer = combineReducers({
    CustomerReducer, ComplaintReducer,AddStaffMemberReducer,OfficeOutletReducer
}); 

export default RootReducer;