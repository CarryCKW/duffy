<template>
  <div role="tabpanel" class="fade tab-pane in active" id="register">

    <div class="register-wrapper margin-top-40">
      <p class="small">All fields are required!</p>

      <!-- Begin register form -->
      <form id="register-form" class="margin-top-30">
        <div class="form-group">
          <input type="text" class="form-control" name="first-name" placeholder="Enter your first name" required>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" name="email" placeholder="Enter your email address" required>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" name="username" placeholder="Choose your username" required>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" name="password" placeholder="Choose password" required>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" name="re-enter-password" placeholder="Re-enter your password" required>
        </div>

        <button type="button" class="btn btn-primary btn-rounded-5x btn-block margin-top-30">Register Now</button>
      </form>
      <!-- End register form -->

    </div> <!-- /.register-wrapper -->

  </div> <!-- /.tab-pane -->

</template>

<script>
export default {
name: "register-section"
}
</script>

<style scoped>

</style>
