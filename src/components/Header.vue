<template>
  <header>
    <div class="container">
      <div class="logo">Cool Web with vue3+vite</div>
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我们</router-link>
      </nav>
    </div>
  </header>
</template>
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
