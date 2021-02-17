import {
  RECEIVE_USERINFO,
  RECEIVE_USERID
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
    if (result.code === 0) {
      const userinfo = result.data
      commit(RECEIVE_USERINFO, {userinfo})
    }
  },

  saveUserId({commit}, userId) {
    commit(RECEIVE_USERID, userId)
  }
}
