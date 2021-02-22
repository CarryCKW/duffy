import {
  RECEIVE_USERINFO,
  RECEIVE_USERID,
  RECEIVE_IMAGE_INFOS
} from './mutation-types'
import {
  reqGalleryImagesInfos,
  reqLoginByPwd,
  reqUserInfo
} from '../api'

export default {
  // 1.异步获取用户信息
  async getUserInfo({commit, state}) {
    //发送Ajax请求
    const userid = state.userid
    const result = await reqUserInfo(userid)
    if (result.code === 210) {
      const userinfo = result.data
      commit(RECEIVE_USERINFO, {userinfo})
    }
  },

  saveUserId({commit}, userId) {
    commit(RECEIVE_USERID, userId)
  },
  async getGalleryAllImages({commit, state}) {
    const userId = state.userid;
    if (userId !== '') {
      const result = await reqGalleryImagesInfos({topic:'TOPIC_ALL', pageIdx:0, userId:userId})
      if (result.code === 210) {
        console.log('获取所有图片成功')
        const infos = result.data
        commit(RECEIVE_IMAGE_INFOS, {infos})
        return true
      }
    }
    return false
  }
}
