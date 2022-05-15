import { ApiPost } from "../config/Api";
import { GET_USER } from "../config/URL_Constante";


/**
 * @description getting user information from the Database if exists
 * @param {func | null} callback 
 * @returns 
 */
const getUser = (inputValues, callback) => ApiPost(GET_USER, inputValues, callback);


const UserService = {
    getUser
}

export default UserService;