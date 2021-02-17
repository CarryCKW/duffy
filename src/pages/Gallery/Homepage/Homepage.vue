<template>
  <div id="body-content">

    <gallery-page-header title="OUR MEMORYS"></gallery-page-header>

    <gallery-page-content></gallery-page-content>

  </div>
  <!-- End body content -->

</template>

<script>
import GalleryPageHeader from "../../../components/Gallery/GalleryPageHeaderSection/GalleryPageHeader";
import GalleryPageContent from "../../../components/Gallery/GalleryPageContentSection/GalleryPageContent";

export default {
  name: "Homepage",
  components:{
    GalleryPageHeader,
    GalleryPageContent
  }
}
</script>

<style scoped>

</style>
