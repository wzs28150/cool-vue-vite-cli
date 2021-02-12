<template>
  <footer>
    <div class="container">
      <span>技术支持:<a href="http://www.hrbkcwl.com/">酷创网络</a></span>
      <span>{{systemInfo.copyright}}</span>
    </div>
  </footer>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  props:{
    systemInfo: Object
  },
  setup() {
  
  }
})
</script>
<style lang="scss" scoped>
  footer {
    background-color: #007fff;
    height: 60px;
    line-height: 60px;
    position: relative;
    z-index: 1;
    color: #fff;
    .container{
        display: flex;
        justify-content: space-between;
    }
    a {
      color: #fff;
    }
  }
</style>
