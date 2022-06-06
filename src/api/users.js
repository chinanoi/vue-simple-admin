import request from '../utils/api';

function login(params) {
    return request({
        url: '/users/login',
        method: 'post',
        data: params
    });
}

export default {
    login
};