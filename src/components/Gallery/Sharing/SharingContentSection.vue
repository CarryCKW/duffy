<template>
  <div id="body-content">


    <!-- ================================
    ///// Begin page header section /////
    ================================= -->
    <section id="page-header-secion" class="alter-heading">

      <!-- Begin page header image
      ===============================
      * Use class "parallax" to enable parallax effect.
      -->
      <div class="page-header-image parallax bg-image" style="background-image: url(static/assets/img/headings/heading-11.jpg); background-position: 50% 50%;"></div>
      <!-- End page header image -->

      <!-- Element cover -->
      <div class="cover page-header-cover"></div>

      <!-- Begin page header info -->
      <div class="container page-header-content no-padding max-width-800 text-center">
        <div class="row">
          <div class="col-lg-12">

            <h1 class="album-title">Upload Image</h1>

          </div> <!-- /.col -->
        </div> <!-- /.row -->
      </div>
      <!-- End page header info -->

    </section>
    <!-- End page header section -->


    <!-- ================================
    /////// Begin content section ///////
    ================================= -->
    <section id="content-section" class="page page-contact">

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <!-- Begin content wrap -->
            <div class="content-wrap min-height-600">
              <div class="row">
                <div class="col-md-12">

                  <!-- Begin contact form
                  ========================= -->
                  <form id="contact-form" @submit.prevent="uploadImage">

                    <div class="row">
                      <div class="col-lg-4">
                        <div class="form-group">
                          <input type="text" v-model="briefDescript" class="form-control" name="brief_descrip" placeholder="Your Brief Description" required="">
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <select class="form-control" v-model="topic">
                            <option value="moment" selected>Moment</option>
                            <option value="food">Food</option>
                            <option value="travel">Travel</option>
                            <option value="study">Study</option>
                            <option value="seasons">Seasons</option>
                            <option value="ds">あつまれどうぶつの森</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Image Here.</label>
                          <input type="file" id="file" name="file" multiple="multiple" required="required" @change="tirggerFile($event)" accept="image/jpg,image/jpeg,image/png"/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <textarea class="form-control" v-model="specificDescript" name="specific_descrip" rows="8" placeholder="Your Life Feeling" required="true"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <button class="btn btn-primary btn-rounded-5x btn-block">Sharing</button>
                      </div>
                    </div>
                  </form>
                  <!-- End contact form -->

                </div> <!-- /.col-->
              </div> <!-- /.row -->
            </div>
            <!-- End content wrap -->

          </div> <!-- /.col -->
        </div> <!-- /.row -->
      </div> <!-- /.container -->

    </section>
    <!-- End content section -->



  </div>
</template>

<script>
import {reqUploadImages} from "../../../api";

export default {
  name: "sharing-content-section",
  data(){
    return {
      userId:'',
      briefDescript:'',
      topic:'',
      specificDescript:'',
      imageBodyList:[],
      message:'',
      result:''
    }
  },
  methods:{
    tirggerFile: function (event) {
      var files = event.target.files;
      for (var i = 0;i< files.length; ++i) {
        this.constructionImageBody(files[i]).then(res => {
          this.imageBodyList.push(res);
        });
      }
      console.log('imageBodyList:', this.imageBodyList);
      this.$router.replace('/homepage')
    },
    constructionImageBody: function (file) {
      return new Promise(((resolve, reject) => {
        let reader = new FileReader();
        let _file = file;
        var imageFile;
        var fileName;
        var imageBase64;
        let obj;
        reader.readAsDataURL(_file);
        reader.onload = function (e) {
          imageFile = e.target.result;
          obj = {
            'fileName':file.name,
            'imageBase64':imageFile
          }
        };
        reader.onloadend = function () {
          resolve(obj);
        };
        reader.onerror = function (error) {
          reject(error);
        }
      }))
    },
    async uploadImage(files){
      let mainBody = {
        'userId':this.userId,
        'briefDescript':this.briefDescript,
        'topic':this.topic,
        'specificDescript':this.specificDescript,
        'imageBodyList':this.imageBodyList
      };
      this.result = await reqUploadImages(mainBody);

    },
    checkImageType:function (files) {
      return true;
    }
  },
  mounted:function (){
    var local_userId = this.$store.state.userid;
    //判断...

    if (local_userId !=='') {
      this.userId = local_userId;
    }

    if (local_userId === '') {
      //show tip
      console.log('need to login');
    }
  }
}
</script>

<style scoped>

</style>
