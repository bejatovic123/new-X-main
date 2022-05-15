import { ApiGet } from "../config/Api";
import { SERVER_STATUS } from "../config/URL_Constante";


/**
 * @description checking Server status
 * @param {func | null} callback 
 * @returns 
 */
const getServerStatus = (callback) => ApiGet(SERVER_STATUS, callback);


const ServerService = {
    getServerStatus
}

export default ServerService;