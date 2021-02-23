<template>
  <div id="body-content">
    <section id="page-header-secion" class="alter-heading">

      <div class="page-header-image parallax bg-image" style="background-image: url(static/assets/img/domain_image.jpg); background-position: 50% 60%;"></div>

      <!-- Element cover -->
      <div class="cover page-header-cover"></div>

      <!-- Begin page header info -->
      <div class="container-fluid page-header-content no-padding text-center">
        <div class="row">
          <div class="col-md-12">
            <h1 class="album-title">Moments of Life</h1>
<!--            <ol class="breadcrumb">-->
<!--              <li><a >Home</a></li>-->
<!--              <li><a >Portfolio</a></li>-->
<!--              <li class="active">Portfolio single v.5</li>-->
<!--            </ol>-->
          </div>
        </div>
      </div>

    </section>
    <section id="content-section" class="portfolio-single portfolio-single-5">

      <!-- Begin content wrap -->
      <div class="content-wrap">

        <div class="container full-width"> <!-- Use class "max-width-1200" or "full-width" -->
          <div class="row f-height">

            <div class="col-left col-md-4 col-lg-3">
<!--              SlideInfo-->
              <blog-slide-info></blog-slide-info>

            </div>

            <div class="col-right col-md-8 col-lg-9">

              <div class="isotope gutter-2 col-4">

<!--                NavGuide-->
                <blog-simple-nav-guide></blog-simple-nav-guide>

                <div id="gallery" class="isotope-items-wrap lightgallery">

                  <!-- Grid sizer (do not remove!!!) -->
                  <div class="grid-sizer"></div>

<!--                  ImageList-->
                  <blog-image-list></blog-image-list>


                </div>
                <!-- End isotope items wrap -->

              </div>
              <!-- End isotope -->

            </div> <!-- /.col -->
          </div> <!-- /.row -->
        </div> <!-- /.container -->

      </div>
      <!-- End content wrap -->

    </section>
    <!-- End content section -->


  </div>

</template>

<script>
import BlogSimpleNavGuide from "../../../components/Blog/Guide/BlogSimpleNavGuide";
import BlogImageList from "../../../components/Blog/ImageList/BlogImageList";
import BlogSlideInfo from "../../../components/Blog/SlideInfo/BlogSlideInfo";

export default {
name: "Blog",
  components:{
    BlogSlideInfo,
    BlogSimpleNavGuide,
    BlogImageList
  }
}
</script>

<style scoped>

</style>
