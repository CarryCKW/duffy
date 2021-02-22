import {
  RECEIVE_USERINFO,
  RECEIVE_USERID,
  RECEIVE_IMAGE_INFOS
} from './mutation-types'

export default {
  [RECEIVE_USERINFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RECEIVE_USERID] (state, userId) {
    state.userid = userId
  },
  [RECEIVE_IMAGE_INFOS] (state, {infos}) {
    state.galleryContentInfos = infos
  }
}
