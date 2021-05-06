import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
        import Container from '@material-ui/core/Container';
        import Box from '@material-ui/core/Box';
        import { FormControl, TextField } from '@material-ui/core';
        import store from '../../../store/store';
        import { addComplaint } from '../../../action/CustomerAction/complaintaction';
        
        
        
        export default class AddComplaint extends React.Component {
            constructor(props) 
            {
                super(props);
                this.state = 
                {
                  complaintId: "2",
                  consignmentNo: "",
                  detailDescription: "",
                  shortDescription: "",
                  customer: {
                    customerId: "",
                  
                    // firstName: "",
                    // lastName: "",
                    // mobileNo: "", 
                    // aadharNo: "",
                    // acct: {
                    //   accountHolderName: "",
                    //   accountNo: "",
                    //   accountType: ""
                    // },
                    // addr: {
                    //   city: "",
                    //   country: "",
                    //   state: "",
                    //   street: "",
                    //   zip: ""
                    // },
                   
                  },
                  
                }
        
            }
            
            
            handleInputChange(event, inputPropName) {
                const newState = Object.assign({}, this.state);
                newState[inputPropName] = event.target.value;
                newState.customer[inputPropName] = event.target.value;
                // newState.acct[inputPropName] = event.target.value;
                // newState.addr[inputPropName] = event.target.value;
                this.setState(newState);
                // this.updateValidators(inputPropName, event.target.value);
            }
        
        
        
            // onCancel = () => {
            //     //this.props.handleCancel(); 
            //     this.props.history.push('/customer');
            // }
        
            onSubmit = (e) => 
            {
                e.preventDefault();
                console.log("Submitted");
                alert(this.state);
                console.log(this.state);
                this.setState
                (
                    {
                        complaintId: this.state.complaintId,
                        consignmentNo: this.state.consignmentNo,
                        detailDescription: this.state.detailDescription,
                        shortDescription: this.state.shortDescription,
                        customerId: this.state.customer.customerId,
                        // aadharNo: this.state.customer.aadharNo,
                        // firstName: this.state.customer.firstName,
                        // lastName: this.state.customer.lastName,
                        // mobileNo: this.state.customer.mobileNo, 
                        // city: this.state.addr.city,
                        // state: this.state.addr.state,
                        // country: this.state.addr.country,
                        // zip: this.state.addr.zip,
                        // accountHolderName: this.state.acct.accountHolderName,
                        // accountNo: this.state.acct.accountNo,
                        // accountType: this.state.acct.accountType,
                        
                    }
                )
                store().dispatch(addComplaint(this.state));
                alert("added successfully");
                
            }
        
            render() {
                return (
                    <Container>
                   
                        <form onSubmit={this.onSubmit} >
        
                            <div>
                                <Box color="primary.main"> <h2> REGISTER COMPLAINT  :</h2></Box>
                            </div>
                            
                            {/* <FormControl fullWidth>
                            <TextField
                                 required id="complainId" label="Complaint Id" placeholder=" Enter Complaint Id"
                                value={this.state.complainId} onChange={event => this.handleInputChange(event, 'firstName')} />
                                </FormControl>
                            <br /> */}
        
                            <FormControl fullWidth>
                            <TextField
                                 required id="consignmentNo" label="Consignment Number" placeholder="Enter Consignment Number"
                                value={this.state.consignmentNo} onChange={event => this.handleInputChange(event, 'consignmentNo')} />
                                </FormControl>
                            <br />

                            <FormControl fullWidth>
                            <TextField
                                 required id="detailDescription" label="Detail Description " placeholder=" Description in deetail"
                                value={this.state.detailDescription} onChange={event => this.handleInputChange(event, 'detailDescription')} />
                                </FormControl>
                            <br />
                
                          
                            <FormControl fullWidth>
                            <TextField
                                 required id="shortDescription" label="Short Description " placeholder=" Description in one or two words"
                                value={this.state.shortDescription} onChange={event => this.handleInputChange(event, 'shortDescription')} />
                                </FormControl>
                            <br />

                          <FormControl fullWidth>
                            <TextField
                                 required id="customerId" label="Customer Id " placeholder=" Existing Customer Id"
                                value={this.state.customer.customerId} onChange={event => this.handleInputChange(event, 'customerId')} />
                                </FormControl>
                            <br />
                            
        
                            {/* <FormControl fullWidth>
                            <TextField
                                required id="mobileNo" label="Mobile Number" type="tel"
                                value={this.state.mobileNo} onChange={event => this.handleInputChange(event, 'mobileNo')} />
                                </FormControl>
                            <br />
        
                            <FormControl fullWidth>
                            <TextField
                                required id="aadharNo" label="Aadhar Number" type="text"
                                value={this.state.aadharNo} onChange={event => this.handleInputChange(event, 'aadharNo')} />
                                </FormControl>
                            <br /> */}
        
                            
                            
                            {/* <FormControl fullWidth>
                            <TextField
                                 required id="detailDescription" label="Street Name" 
                                value={this.state.addr.street} onChange={event => this.handleInputChange(event, 'street')} />
                                </FormControl>
                            <br /> */}
                            
                            {/* <div>
                                <Box color="primary.main"> <h2> ADDRESS DETAILS :</h2></Box>
                            </div>
                            
                            <FormControl fullWidth>
                            <TextField
                                 required id="city" label="City" 
                                value={this.state.addr.city} onChange={event => this.handleInputChange(event, 'city')} />
                                </FormControl>
                            <br />
                            
                            <FormControl fullWidth>
                            <TextField
                                 required id="state" label="State" 
                                value={this.state.addr.state} onChange={event => this.handleInputChange(event, 'state')} />
                                </FormControl>
                            <br />
        
                            <FormControl fullWidth>
                            <TextField
                                 required id="country" label="Country" 
                                value={this.state.addr.country} onChange={event => this.handleInputChange(event, 'country')} />
                                </FormControl>
                            <br />
        
                            <FormControl fullWidth>
                            <TextField
                                 required id="zip" label="PinCode" type="text" 
                                value={this.state.addr.zip} onChange={event => this.handleInputChange(event, 'zip')} />
                                </FormControl>
                            <br />
        
                            <div>
                                <Box color="primary.main"> <h2> ACCOUNT DETAILS :</h2></Box>
                            </div>
        
                            <FormControl fullWidth>
                            <TextField
                                 required id="accountHolderName" label="Account Holder Name" 
                                value={this.state.acct.accountHolderName} onChange={event => this.handleInputChange(event, 'accountHolderName')} />
                                </FormControl>
                            <br />
        
                            <FormControl fullWidth>
                            <TextField
                                 required id="accountNo" label="Account Number" type="textnpm" 
                                value={this.state.acct.accountNo} onChange={event => this.handleInputChange(event, 'accountNo')} />
                                </FormControl>
                            <br />
                            
                            <FormControl fullWidth>
                            <TextField
                                 required id="accountType" label="Account Type" 
                                value={this.state.acct.accountType} onChange={event => this.handleInputChange(event, 'accountType')} />
                                </FormControl>
                            <br />
                            
                            */}
                            <p> 
                                 </p>
            
                            {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}
        
                            <Button style={style} type="submit">Register Complaint</Button>
                            <Button style={style} onChange={this.onCancel}> Cancel</Button>
                      </form>
                   
                    </Container>
                )
            }
        
        }
        
        const useStyles = makeStyles((theme) => ({
            container: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
                width: 200,
            },
        }));
        
        const style = {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            marginLeft: "10px",
        };
            
 