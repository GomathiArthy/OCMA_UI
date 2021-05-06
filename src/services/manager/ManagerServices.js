import axios from 'axios';


const  MANAGER_API_BASE_URL = "http://localhost:9191/api/ocma/manager";

class ManagerService {
addStaffMember(staffMember){
    return axios.post(MANAGER_API_BASE_URL, staffMember);
}
}
export default new ManagerService()
