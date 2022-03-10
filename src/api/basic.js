import axios from "axios";

const BASE_URL = 'https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/';

export function getStudents() {
    let config = {
        headers: {
            Authenication: 'Bearer ' + localStorage.getItem('token'),
            ContentType: 'application/json',

        }
    };
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}students`, config) //new promis
            .then(res => {
                console.log("students get response", res.data);
                resolve(res.data);
            }).catch(err => {
            console.log(err);
            reject(err);
        })
    });

}