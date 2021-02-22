<template>
  <!-- ============================
   ///// Begin content section /////
   ============================= -->
  <section id="content-section" class="portfolio-list-grid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">

          <!-- Begin content wrap -->
          <div class="content-wrap">

            <!-- Begin isotope
            ===================
            * Use classes "gutter-1", "gutter-2" or "gutter-3" to add more space between items.
            * Use class "col-1", "col-2", "col-3", "col-4", "col-5" or "col-6" for columns.
            -->
            <div class="isotope gutter-1 col-6">

              <!-- Begin gallery top content -->
              <div class="gallery-top-content">

                <div class="row margin-bottom-40">
                  <div class="col-md-8">

                    <!-- Begin isotope filter -->
                    <div class="isotope-filter">



                      <h2 class="filter-heading">Filters</h2>

                      <!-- Begin isotope filter links -->
                      <div class="isotope-filter-links collapse navbar-collapse no-padding" id="isotope-filter-collapse">
                        <a class="active" href="#" data-filter="*">all</a>
                        <a href="#" data-filter=".fashion">Fashion</a>
                        <a href="#" data-filter=".portraits">Portraits</a>
                        <a href="#" data-filter=".black-and-white">Black &amp; White</a>
                        <a href="#" data-filter=".outdoor">Outdoor</a>
                      </div>
                      <!-- End isotope filter links -->

                    </div>
                    <!-- End isotope filter -->

                  </div> <!-- /.col -->

                </div> <!-- /.row -->

              </div>
              <!-- End gallery top content -->


              <div class="isotope-items-wrap ali-style-2 caption-outside">

                <!-- Grid sizer (do not remove!!!) -->
                <div class="grid-sizer"></div>

                <!-- //////////////////
                // Begin isotope item
                /////////////////////// -->


                <ul v-if="galleryContentInfos.length">
<!--                  @Click = ??-->
                  <li v-for="(contentInfo, index) in galleryContentInfos" :key="index" >
                    <div class="isotope-item">
                      <div class="album-list-item">
                        <a>
<!--                          Image-->
                          <div class="ali-img-wrap">
                            <img :src="fixBaseStr(contentInfo.imageBody.imageBase64)" alt="">
                          </div>
<!--                          Brief Info-->
                          <div class="ali-caption">
                            <h2 class="ali-title">{{contentInfo.tinnyInfoBody.briefDescript}}</h2>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>




              </div>
              <!-- End isotope items wrap -->

            </div>
            <!-- End isotope -->

          </div>
          <!-- End content wrap -->

        </div> <!-- /.col -->
      </div> <!-- /.row -->

    </div> <!-- /.container -->
  </section>
  <!-- End content section -->

</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "gallery-page-context",
  mounted() {
    this.fetchAllImages()
  },
  methods:{
    async fetchAllImages() {
      const result = await this.$store.dispatch('getGalleryAllImages')
      if (result === true) {
        console.log('success in fetchAllImages')
      }else {
        console.log('error in fetchAllImages')
      }
    },
    fixBaseStr(str) {
      str = str.replace("data", "data:")
      str = str.replace("base64",";base64,")
      return str
    }
  },
  computed:{
    ...mapState(['galleryContentInfos'])
  }

}
</script>

<style scoped>

</style>
