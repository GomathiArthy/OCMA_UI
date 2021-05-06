import React from 'react';


import CustomerValidations from './CustomerValidations'





export default class AddCustomer extends React.Component {

    constructor(props){
        super(props);
        this.state={
            customer:{
                "aadharNo": "",
                "acct": {
                  "accountHolderName": "",
                  "accountNo": "",
                  "accountType": ""
                },
                "addr": {
                  "city": "",
                  "country": "",
                  "state": "",
                  "street": "",
                  "zip": "",
                },
                "customerId": "",
                "firstName": "",
                "lastName": "",
                "mobileNo": "",
              }
        }
        this.validators = CustomerValidations;
        this.resetValidators();
        this.displayValidationErrors = this.displayValidationErrors.bind(this);
        this.updateValidators = this.updateValidators.bind(this);
        this.resetValidators = this.resetValidators.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
    

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
    this.updateValidators(nam,event.target.value);
    this.setState({customer:{...this.state.customer,[nam]:val}});
}

handleSubmit = event =>{
    event.preventDefault();
    store().dispatch(addCustomer(this.state.customer));
}
 
render() {
    return(
       
        <div className="w-75 mx-auto shadow p-5">
        <div className="font-weight-bold">*/
        <h2 className="text-center mb-4">Add Customer</h2>
        </div>
            <form onSubmit={event=>this.handleSubmit(event)}>
                <div className="form-group">
                <input 
                id="firstName"
                className="form-control form-control-lg"
                placeholder="Enter your First Name"
                name="firstName"
                type="text"
                onChange={(event)=>this.handleChange(event)}/>
                </div>

                <div className="form-group">
                <input 
                id="lastname"
                className="form-control form-control-lg"
                placeholder="Enter your Last Name"
                name="lastName"
                type="text"
                onChange={(event)=>this.handleChange(event)}/>
                </div>

                <div className="form-group">
                <input 
                id="mobileNo"
                className="form-control form-control-lg"
                placeholder="Enter your Mobile Number"
                name="mobileNo"
                type="text"
                onChange={(event)=>this.handleChange(event)}/>
                </div>

                <div className="form-group">
                <input 
                id="state"
                className="form-control form-control-lg"
                placeholder="Enter your Street"
                name="state"
                type="text"
                onChange={(event)=>this.handleChange(event)}/>
                </div>

                <div className="form-group">
                <input 
                id="city"
                className="form-control form-control-lg"
                placeholder="Enter your City"
                name="city"
                type="text"
                onChange={(event)=>this.handleChange(event)}/>
                </div>

                <div className="form-group">
                <input 
                id="state"
                className="form-control form-control-lg"
                placeholder="Enter your State"
                name="state"
                type="text"
                onChange={(event)=>this.handleChange(event)}/>
                </div>


                <div className="form-group">
                <input 
                id="country"
                className="form-control form-control-lg"
                placeholder="Enter your Country"
                name="city"
                type="text"
                onChange={(event)=>this.handleChange(event)}/>
                </div>

                <div className="form-group">
                <input 
                id="zip"
                className="form-control form-control-lg"
                placeholder="Enter your ZIP code"
                name="Zip"
                type="text"
                onChange={(event)=>this.handleChange(event)}/>
                </div>

                <div className="form-group">
                <input 
                id="aadharNo"
                className="form-control form-control-lg"
                placeholder="Enter your Aadhar No"
                name="aadharNo"
                type="text"
                onChange={(event)=>this.handleChange(event)}/>
                </div>

                <div className="form-group">
                <input 
                id="accountNo"
                className="form-control form-control-lg"
                placeholder="Enter your Account No"
                name="accountNo"
                type="text"
                onChange={(event)=>this.handleChange(event)}/>
                </div>

                <div className="form-group">
                <input 
                id="accountHolderName"
                className="form-control form-control-lg"
                placeholder="Enter your Account Holder Name "
                name="accountHolderName"
                type="text"
                onChange={(event)=>this.handleChange(event)}/>
                </div>

                <div className="form-group">
                <input 
                id="accountType"
                className="form-control form-control-lg"
                placeholder="Enter your Account Type "
                name="accountType"
                type="text"
                onChange={(event)=>this.handleChange(event)}/>
                </div>
                
                <div className="row">
                <div className="input-field col s12 signup-btn">
                <button className={`btn btn-primary btn-block ${this.isFormValid() ? '' : 'disabled'}`} type="submit">
                 Add Customer
                </button>
                </div>
                </div>
                </form>
                </div>
                
                
    );
}
}
