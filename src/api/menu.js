import request from '../utils/api';

function getMenuList(params) {
    return request({
        url: '/menu/list',
        method: 'get',
        mock: true,
        data: params
    });
}

function getPermissionList() {
    return request({
        url: '/users/getPermissionList',
        method: 'get',
        mock: true,
        data: {}
    });
}

function noticeCount(params) {
    return request({
        url: '/leave/count',
        method: 'get',
        mock: true,
        data: {}
    });
}

export default {
    menuList: getMenuList,
    getPermissionList,
    noticeCount
};