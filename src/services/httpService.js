import axios from 'axios';
import logger from './logService';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
    //console.log('INTERCEPTOR CALLED');
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedError) {
        // console.log('Loggin error', error);
        logger.log(error);
        //toast.error('An Unexpected error occurred');
        toast('An Unexpected error occurred');
    }

    return Promise.reject(error);
});

function setJwt(jwt) {
    axios.defaults.headers.common['x-auth-token'] = jwt;
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt
}