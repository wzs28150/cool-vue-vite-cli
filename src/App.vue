<template>
  <c-scrollbar
    width="100vw"
    height="100vh"
    :vThumbStyle="{
      'background-color': 'rgb(6, 95, 227)',
      width: '5px',
    }"
    :vBarStyle="{
      'background-color': 'rgba(0,0,0,0.05)',
      width: '5px',
      'z-index': 6,
    }"
  >
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </c-scrollbar>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import { ref, onMounted } from 'vue'
  export default {
    components: {
      Header,
      Footer,
    },
    setup(){
    
    }
  }
</script>
<style lang="scss" scoped>
  main {
    display: block;
    padding-top: 60px;
    min-height: calc(100vh - 120px);
  }
</style>
