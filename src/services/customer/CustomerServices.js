import axios from 'axios';

const  CUSTOMER_API_BASE_URL = "http://localhost:9191/api/ocma/customer";

class CustomerService {
addCustomer(customer){
    return axios.post(CUSTOMER_API_BASE_URL, customer);
}
}


const  CUSTOMER_API_BASE_URL = "http://localhost:9191/api/ocma/customer";

class CustomerService {
addComplaint(complaint){
    return axios.post(CUSTOMER_API_BASE_URL, complaint);
}
}
export default new CustomerService()
