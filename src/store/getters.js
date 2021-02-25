export default {
  updateAndGetImageListOfCurrentBlogInfos(state) {
    var _curid = state.currentBlogId;
    state.currentBlogInfos = state.allBlogInfos[_curid]
    return state.currentBlogInfos.imageBodyList
  }
}
