<template>
  <div class="portfolio-info">
    <div class="portfolio-info-inner">

      <h1 class="portfolio-title">Life Detail:</h1>

      <!-- Begin portfolio meta -->
      <div class="album-meta">
        <span class="photos-count">{{numOfImages}} Photos</span> /
        <span class="photos-views">{{numOfViews}} Views</span>
      </div>
      <!-- End portfolio meta -->

      <!-- Begin author -->
      <div class="author">
        <a class="author-info">- Author: {{username}}</a>
      </div>
      <!-- End author -->

      <!-- Begin portfolio description -->
      <div class="album-description margin-top-20">
        <div class="al-desc-inner">
          <p>Sentiment:</p>
          <p>{{specificDescript}}</p>
        </div>
      </div>
      <!-- End portfolio description -->

      <!-- Begin portfolio atr -->
      <div class="portfolio-atr margin-top-50">
        <ul class="list-unstyled">
          <li>
            <h4 class="head">Brief Description:</h4>
            <span class="info">{{briefDescript}}</span>
          </li>

          <li>
            <h4 class="head">Category:</h4>
            <span class="info">{{topic}}</span>
          </li>

          <li>
            <h4 class="head">Sharing Time:</h4>
            <span class="info">{{sharingTime}}</span>
          </li>

        </ul>
      </div>
      <!-- End portfolio atr -->

    </div> <!-- /.portfolio-info-inner -->
  </div>
</template>

<script>
import mapState from "vuex";
export default {
  name: "blog-slide-info",
  data() {
    return {
      username:'小咕叽',
      userHeadImg:'',
      numOfImages:'',
      numOfViews:99,
      specificDescript:'',
      briefDescript:'',
      topic:'',
      infos:{},
      sharingTime:'',
      timer:''
    }
  },
  methods:{
    getSlideInfos() {
      if (this.$store.state.currentBlogInfos !== {} || this.$store.state.currentBlogInfos !== ''){
        this.infos = this.$store.state.currentBlogInfos
        this.numOfImages = this.infos.imageBodyList.length
        this.briefDescript = this.infos.briefDescript
        this.specificDescript = this.infos.specificDescript
        this.sharingTime = this.infos.sharingTime
        console.log('slideInfo update success')
      }
    }
  },
  mounted() {
    this.timer = setInterval(this.getSlideInfos, 500)
  },
  computed:{
    ...mapState['currentBlogInfos']
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>
