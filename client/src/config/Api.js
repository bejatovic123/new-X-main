import axios from "axios";


const ApiGet = async (url, callback) => {
    let response = await axios.get(url);

    if (callback instanceof Function) {
        callback(response.data, response.status);
    } else {
        return {
            data: response.data,
            status: response.status
        }
    }
}

const ApiPost = async (url, data, callback) => {
    let response = await axios.post(url, data);

    if (callback instanceof Function) {
        callback(response.data, response.status);
    } else {
        return {
            data: response.data,
            status: response.status
        }
    }
}

const ApiUpdate = async (url, data, callback) => {
    let response = await axios.put(url, data);

    if (callback instanceof Function) {
        callback(response.data, response.status)
    } else {
        return {
            data: response.data,
            status: response.status
        }
    }
}

const ApiDelete = async (url, callback) => {
    let response = await axios.delete(url);

    if (callback instanceof Function) {
        callback(response.data, response.status)
    } else {
        return {
            data: response.data,
            status: response.status
        }
    }
}

const Api = {
    get: ApiGet,
    post: ApiPost,
    put: ApiUpdate,
    delete: ApiDelete
}

export default Api;
export {
    Api,
    ApiGet,
    ApiPost,
    ApiUpdate,
    ApiDelete
}