import Header from "../Layout/Header";
import Footer from "../Layout/Footer"
import Nav from "react-bootstrap/Nav"
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';

import Box from '@material-ui/core/Box';


export default function UserHomePage() {
    const mystyle = {
      color: "DodgerBlue",
      backgroundColor: "black",
      padding: "5px",
      fontFamily: "Cambria"
    }
    const mystyle2 = {
        color: "black",
        backgroundColor: "DodgerBlue",
        padding: "0px",
        fontFamily: "Cambria"
       
      }
      const mystyle3 = {
        color: "black",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
       
      }

    const history = useHistory();
    return(
        <div>
<Header/>
<div></div>
<Nav style={mystyle}
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link class='font-size: 100px;' style={mystyle}  href="/home"><h1>Active</h1></Nav.Link>
  </Nav.Item>
  {/* <Nav.Item>
    <Nav.Link  class='font-size: 100px'style={mystyle2} eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link   style={mystyle2} eventKey="link-2">Link</Nav.Link>
  </Nav.Item> */}
  <p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Add Courier 
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    
  </div>
</div>
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose your service
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" style={mystyle} href="#">Add Customer      </a>
    <a class="dropdown-item" style={mystyle3} href="#">    Add Complaint      </a>
    <a class="dropdown-item" style={mystyle2} type="button" href="#">    Check courier status</a>
  </div>
</div>

  <Nav.Item>
    <Nav.Link  class='right: 1040px' style={mystyle3} data-toggle="dropdown" eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
<Footer/>
     </div>
    );
}