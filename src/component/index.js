import React from 'react';
import {render} from 'react-dom';
import {Router,Route,browseHistory}from "react-router";

import {Root} from component/Root;
import {AddCustomerForm} from component/AddCustomerForm;
import {AddComplaint} from component/AddComplaint;


class App extends React.Component{
    render(){
        return(
            <Router history={browseHistory}>
                <Route path={"/"} component={Root}/>
                <Route path={"add complaint"} component={AddComplaint}/>
            </Router>
        );
    }
}
render(<App />,window.document.getElementById)