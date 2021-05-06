import React from 'react'
//import store from '../../../store/Store'
//import user from '../wallet/User'
//import {addbankaccount} from '../../../action/bankaccount/Bank'
import { render } from '@testing-library/react';
export default  class AddCourier extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            courier:{
                consignmentNo: "" ,
                courierId: "",
                deliveredDate: "",
                initiatedDate: "",
                receiver: {               
                  customerId: "",
                  firstName: "",
                  lastName: "",
                  mobileNo: ""
                  },
                sender: {
                  customerId: "",
                  firstName: "",
                  lastName: "",
                  mobileNo: ""
                },
                status: ""
              }                   
            }
    
    
        this.validators = CourierValidations;
        this.resetValidators();
        this.displayValidationErrors = this.displayValidationErrors.bind(this);
        this.updateValidators = this.updateValidators.bind(this);
        this.resetValidators = this.resetValidators.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isFormValid = this.isFormValid.bind(this)

        }

        updateValidators(fieldName, value) {
            this.validators[fieldName].errors = [];
            this.validators[fieldName].state = value;
            this.validators[fieldName].valid = true;
            this.validators[fieldName].rules.forEach((rule) => {
              if (rule.test instanceof RegExp) {
                if (!rule.test.test(value)) {
                  this.validators[fieldName].errors.push(rule.message);
                  this.validators[fieldName].valid = false;
                }
              } else if (typeof rule.test === 'function') {
                if (!rule.test(value)) {
                  this.validators[fieldName].errors.push(rule.message);
                  this.validators[fieldName].valid = false;
                }
              }
            });
          }

          resetValidators() {
            Object.keys(this.validators).forEach((fieldName) => {
            this.validators[fieldName].errors = [];
            this.validators[fieldName].state = '';
            this.validators[fieldName].valid = false;
          });
        }
        
        displayValidationErrors(fieldName) {
          const validator = this.validators[fieldName];
          const result = '';
          if (validator && !validator.valid) {
            const errors = validator.errors.map((info, index) => {
              return <span className="error" key={index}>* {info}</span>;
            });
        
            return (
              <div className="col s12 row">
                {errors}
              </div>
            );
          }
          return result;
        }
        
        isFormValid() {
          let status = true;
          Object.keys(this.validators).forEach((field) => {
            if (!this.validators[field].valid) {
              status = false;
            }
          });
          return status;
        }

    handleChange = event =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({courier:{...this.state.courier,[nam]:val}});
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.state.courier);
        store().dispatch(addCourier(this.state.courier));
    }

    render() {
        return(
            <div className="banner">
            <div className="container">
            <div className="w-75 mx-auto shadow p-5">
            <div className="font-weight-bold">
            <h2 className="text-center mb-4">AddCourier</h2>
            </div>
                <form onSubmit={event=>this.handleSubmit(event)}>
                    <div className="form-group">
                    <input 
                    id="consignmentNo"
                    className="form-control form-control-lg"
                    placeholder="Enter your Consignment Number"
                    name="consignmentNo"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    id="courierId"
                    className="form-control form-control-lg"
                    placeholder="Enter your Courier Id "
                    name="courierId"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    id="deliveredDate"
                    className="form-control form-control-lg"
                    placeholder="Enter your Delivered Date"
                    name="deliveredDate"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    id="initiatedDate"
                    className="form-control form-control-lg"
                    placeholder="Enter your Initiated Date"
                    name="initiatedDate"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                  
                    <input 
                    id="customerId"
                    className="form-control form-control-lg"
                    placeholder="Enter the Receiver Customer ID"
                    name="customerId"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    id="firstName"
                    className="form-control form-control-lg"
                    placeholder="Enter Firstname "
                    name="firstName"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    id="lastName"
                    className="form-control form-control-lg"
                    placeholder="Enter Lastname "
                    name="lastName"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    id="mobileNo"
                    className="form-control form-control-lg"
                    placeholder="Enter Mobile Number"
                    name="mobileNo"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    id="customerId"
                    className="form-control form-control-lg"
                    placeholder="Enter the Sender Customer ID"
                    name="customerId"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    id="firstName"
                    className="form-control form-control-lg"
                    placeholder="Enter Firstname"
                    name="firstName"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    id="lastName"
                    className="form-control form-control-lg"
                    placeholder="Enter Lastname"
                    name="lastName"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    id="mobileNo"
                    className="form-control form-control-lg"
                    placeholder="Enter Mobile Number "
                    name="mobileNo"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    id="status"
                    className="form-control form-control-lg"
                    placeholder="Enter Courier Status"
                    name="status"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                    <button className="btn btn-primary btn-block type" type="submit">
                     Add Courier
                    </button>
                    </div>
                    </div>
                    </form>
                    </div>
                    </div>
                    </div>
                    
        );

     }

}