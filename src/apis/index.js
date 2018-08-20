import axios from 'axios';
import * as config from '../constains/config';

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body
    }).catch(error => {
        console.log('error', error);
    })
}