import ajax from "./ajax";

// const BASE_URL ='http://localhost:8899'

const BASE_URL = '/api'

//用户名密码登录
export const reqLoginByPwd = ({username, password}) => ajax(BASE_URL + '/login/check', {username, password}, 'POST')

// 获取图片信息
export const reqGalleryImagesInfos = () => ajax(BASE_URL + '/image/displayGallery', {}, 'GET')

export const reqUserInfo = ({userid}) => ajax(BASE_URL + '/userinfo',{userid}, 'GET')
