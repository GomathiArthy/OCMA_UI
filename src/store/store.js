import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
export default () => {
    alert("called");
    try
    {
    return createStore(customer, applyMiddleware(thunk));
    }
    catch(e)
    {
        alert(e.message);
    }
};