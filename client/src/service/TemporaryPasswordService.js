import { ApiUpdate } from "../config/Api";
import { SET_PASSWORD } from "../config/URL_Constante";


/**
 * @description checking Server status
 * @param {func | null} callback 
 * @returns 
 */
const setPassword = (inputValues, callback) => ApiUpdate(SET_PASSWORD, inputValues, callback);


const TemporaryPasswordService = {
    setPassword
}

export default TemporaryPasswordService;