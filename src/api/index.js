import ajax from "./ajax";

// const BASE_URL ='http://localhost:8899'

const BASE_URL = '/api'

//用户名密码登录
export const reqLoginByPwd = ({username, password}) => ajax(BASE_URL + '/login/check', {username, password}, 'POST')

// 获取图片信息
// export const reqGalleryImagesInfos = () => ajax(BASE_URL + '/image/displayGallery', {}, 'GET')

//not uesd
export const reqUserInfo = ({userid}) => ajax(BASE_URL + '/userinfo',{userid}, 'GET')

export const reqUploadImages = (dataBody) => ajax(BASE_URL + '/image/sharing', dataBody, 'POST')

//根据userid ， topic, pageIdx获取图片信息
export const reqGalleryImagesInfos = ({topic, pageIdx, userId}) => ajax(BASE_URL + '/gallery/images', {topic, pageIdx, userId}, 'GET')

export const reqBlogInfos = ({blogId}) => ajax(BASE_URL + '/bloginfo', {blogId}, 'GET')



