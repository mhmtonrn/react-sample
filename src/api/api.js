import axios from "axios";
import {TOAST_TYPES, toaster} from "../utils/utils";

const BASE_URL = 'https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/';

export const REQ_TYPE = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
};

const API = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        Authentication: 'Bearer ' + localStorage.getItem('token')
    }
});

export const doRequest = ({type, endpoint, payload}) => {
    return new Promise((resolve, reject) => {
        API[type](endpoint, payload)
            .then(res => {
                console.log(res);
                resolve(res.data);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });
    })

};