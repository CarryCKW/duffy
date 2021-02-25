<template>
  <div>

    <ul v-if="imageBodyList.length">
      <li v-for="(image, idx) in this.imageBodyList" :key="idx">
        <div class="isotope-item">
          <div class="album-single-item">
            <img :src="fixBaseStr(image.imageBase64)" alt="">
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import mapState from 'vuex'
import mapGetters from 'vuex'
export default {
  name: "blog-image-list",
  mounted() {
    this.fetchCurBlogInfos()
  },
  data() {
    return {
      imageBodyList:{}
    }
  },
  methods:{
    async fetchCurBlogInfos() {
      const curBlogId = this.$store.state.currentBlogId
      if (curBlogId !== '' && this.$store.state.allBlogInfos.hasOwnProperty(curBlogId)){
        this.imageBodyList = this.$store.getters.updateAndGetImageListOfCurrentBlogInfos
        return
      }
      console.log('allBlogInfos do not contain current Blog Infos')
      if (this.$store.state.currentBlogId !=='') {
        const result = await this.$store.dispatch('getCurrentBlogInfos')
        if (result === true) {
          this.imageBodyList = this.$store.state.currentBlogInfos.imageBodyList
          console.log('success in fetchCurBlogInfos')
          console.log('image list:', this.imageBodyList)
        }else {
          console.log('error in fetchInCurBlogInfos')
        }
      }else {
        console.log('error blogId is null')
      }
    },
    fixBaseStr(str) {
      str = str.replace("data", "data:")
      str = str.replace("base64",";base64,")
      return str
    }
  },
  computed:{
    ...mapState['currentBlogInfos'],
    ...mapGetters['updateAndGetImageListOfCurrentBlogInfos']
  }
}
</script>

<style scoped>

</style>
