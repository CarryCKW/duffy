<template>
  <div>
<!--    <section >-->
<!--      <div>-->
<!--        <span></span>-->
<!--        <span></span>-->
<!--      </div>-->
<!--      <p>{{alertText}}</p>-->
<!--      <div @click="closeTip">确认</div>-->
<!--    </section>-->
  </div>
</template>

<script>
import Vue from 'vue'
import iView from "view-design";

Vue.use(iView)

export default {
  name:"alert-tip",
  props: {
    alertText: String,
    changed:Boolean
  },
  data() {
    return {
      info_state: '',
      info_text:''
    }
  },
  watch:{
    info_state:function (newState, oldState){
      if (newState === 'success') {
        this.success();
      }
      if (newState === 'warning') {
        this.warning();
      }
      if (newState === 'error') {
        this.error();
      }
    }
  },
  methods: {
    closeTip () {
      // 分发自定义事件(事件名: closeTip)
      this.$emit('closeTip')
    },
    success() {
      this.$Message.success(this.alertText);
    },
    warning() {
      this.$Message.warning(this.alertText);
    },
    error() {
      this.$Message.error(this.alertText);
    }
  }
}
</script>

<style>

</style>
