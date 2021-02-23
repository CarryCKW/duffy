<template>
  <!-- Begin gallery top content -->
  <div class="gallery-top-content margin-bottom-25">

    <!-- Begin album attributes -->
    <ul class="album-attributes">

      <li class="pull-left">
        <a class="back-to-list">
          <span class="bta-icon"><i class="fa fa-th-list"></i></span>
          <router-link to="/homepage"><span class="bta-text">Back to list</span></router-link>
        </a>
      </li>

      <!-- Begin portfolio nav -->
      <li class="portfolio-nav pull-right">
        <a class="pn-link portf-next" title="Next work">
          <span class="pn-link-text hide-from-sm">Next</span>
          <span class="pn-link-icon"><i class="fa fa-chevron-right"></i></span>
        </a>
      </li>

      <li class="portfolio-nav pull-right">
        <a class="pn-link portf-prev margin-right-15" title="Previous work">
          <span class="pn-link-icon"><i class="fa fa-chevron-left"></i></span>
          <span class="pn-link-text hide-from-sm">Prev</span>
        </a>
      </li>
      <!-- End portfolio nav -->

    </ul>
    <!-- End album attributes -->

  </div>
  <!-- End gallery top content -->
</template>

<script>
export default {
  name: "blog-simple-nav-guide"
}
</script>

<style scoped>

</style>
