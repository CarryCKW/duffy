import {
  RECEIVE_USERINFO,
  RECEIVE_USERID,
  RECEIVE_IMAGE_INFOS,
  RECEIVE_BLOG_INFOS,
  RECEIVE_BLOG_ID
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
  },
  [RECEIVE_BLOG_INFOS] (state, {infos}) {
    state.currentBlogInfos = infos
    state.allBlogInfos[infos.id] = infos
  },
  [RECEIVE_BLOG_ID] (state, blogId) {
    state.currentBlogId = blogId
  }
}
