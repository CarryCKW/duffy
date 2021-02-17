import {
  RECEIVE_USERINFO,
  RECEIVE_USERID
} from './mutation-types'

export default {
  [RECEIVE_USERINFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RECEIVE_USERID] (state, userId) {
    state.userid = userId
  }
}
