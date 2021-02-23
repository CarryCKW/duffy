<template>
  <div id="body-content">


    <!-- ==============================
    /////// Begin intro section ///////
    ===================================
    * Use class "bg-image-scroll-horizontal" or "bg-image-scroll-vertical" to enable background image scrolling animation (otherwise use class "bg-image" or "bg-image-fixed").
    * Use class "full-page" to enable fullscreen intro.
    -->
    <section id="intro-section" class="full-page bg-image-scroll-vertical" style="background-image: url(static/assets/img/scrolling-bg.jpg); background-position: 50% 20%;">

      <!-- Element cover -->
      <div class="cover bg-transparent-6-dark"></div>

      <!-- Begin intro caption
      =========================
      * Use classes "align-center" and "text-center" to align caption to the center.
      -->
      <div class="intro-caption bg-transparent-8-dark text-gray-3">
        <h1 class="intro-title">生活'旅馆</h1>
        <p class="intro-text hide-from-xs">看往事回首，不曾觉得昨日恍惚，灯火琉璃下的浊酒不何焚情烈焰，而是抓不住的过往。</p>
        <div class="intro-button-wrap">
          <a class="btn btn-default btn-rounded-5x">View Life Once</a>
          <a class="btn btn-primary btn-rounded-5x margin-top-10 hide-from-xs">Record</a>
        </div>
      </div>
      <!-- End intro caption -->

      <!-- Begin made with love -->
      <div class="made-with-love hide-from-sm">
        <p>Made With <span class="text-red"><i class="fa fa-heart-o"></i></span></p>
      </div>
      <!-- End made with love -->

    </section>
    <!-- End intro section -->



  </div>
</template>

<script>

export default {
  name: "domin"

}
</script>

<style scoped>

</style>
