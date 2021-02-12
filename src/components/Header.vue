<template>
  <header>
    <div class="container">
      <div class="logo">{{systemInfo.title}}</div>
      <nav>
        <router-link v-for="(item, index) in category" :to="item.path" :key="index">{{item.catname}}</router-link>
      </nav>
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      systemInfo: Object,
      category: Array
    },
    setup() {},
  });
</script>
<style lang="scss" scoped>
  header {
    position: fixed;
    height: 60px;
    width: 100%;
    left: 0;
    top: 0;
    background-color: #fff;
    z-index: 5;
    box-shadow: 0 0 2px #ccc;
    line-height: 60px;
    .container {
      display: flex;
      justify-content: space-between;
      .logo {
        font-size: 1.5em;
        color: #007fff;
        font-weight: bold;
      }
      nav {
        display: flex;
        a {
          padding: 0 1em;
          &.router-link-active {
            color: #007fff;
          }
        }
      }
    }
  }
</style>
