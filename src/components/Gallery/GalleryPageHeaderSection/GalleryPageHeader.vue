<template>
  <!-- ================================
    ///// Begin page header section /////
    ================================= -->
  <section id="page-header-secion" class="alter-heading">

    <!-- Begin page header image
    ===============================
    * Use class "parallax" to enable parallax effect.
    -->
    <div class="page-header-image parallax bg-image" ></div>
    <!-- End page header image -->

    <!-- Element cover -->
    <div class="cover page-header-cover"></div>

    <!-- Begin page header info -->
    <div class="container-fluid page-header-content no-padding text-center">
      <div class="row">
        <div class="col-md-12">

          <h1 class="album-title">{{title}}</h1>
          <ol class="breadcrumb">
            <li>{{summa}}</li>
          </ol>
<!--          used for future function-->
          <slot></slot>
        </div> <!-- /.col -->
      </div> <!-- /.row -->
    </div>
    <!-- End page header info -->

  </section>
  <!-- End page header section -->
</template>

<script>
export default {
  name: "gallery-page-header",
  props:{
    title:String,
    summa:String
  }
}
</script>

<style scoped>

</style>
