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
    <Header :systemInfo="systemInfo" :category="category"></Header>
    <main>
      <router-view></router-view>
    </main>
    <Footer :systemInfo="systemInfo"></Footer>
  </c-scrollbar>
</template>

<script lang="ts">
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import { defineComponent,ref, computed } from 'vue';
  import { useStore,mapState } from 'vuex';
  export default defineComponent({
    components: {
      Header,
      Footer,
    },
    setup() {
      const store = useStore()
      
      store.dispatch("system/getSystemInfo")
      // const systemInfo = ref(store.state.system);
      console.log(store.state.system);
      
      return {
        systemInfo: computed(() => store.state.system.systemInfo),
        category: computed(() => store.state.system.category)
      }

    },
  });
</script>
<style lang="scss" scoped>
  main {
    display: block;
    padding-top: 60px;
    min-height: calc(100vh - 120px);
  }
</style>
