<template>
  <div class="swiper-container banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="i in 3" :key="i">
        <div>
          <h1
            data-swiper-parallax="-100"
            style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms"
          >
            Cool web
          </h1>
          <p
            data-swiper-parallax="-1500"
            style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms"
          >
            vue3+vite demo
          </p>
          <div
            class="btn"
            data-swiper-parallax="-3500"
            style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms"
          >
            <!-- <a class="start-btn" href="start.html">开始使用</a>
            <a class="start-btn" href="start.html"
              >&nbsp;&nbsp;下<span style="visibility: hidden"
                >&nbsp;&nbsp;&nbsp;&nbsp;</span
              >载&nbsp;&nbsp;</a
            > -->
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
  </div>
  <div class="index">
    <section class="Advantage m_T50 m_B50">
      <div class="container">
        <h1 class="text-center m_B15 wow fadeInUp" data-wow-delay="0.3s">
          为开发者提供一个省心的开发初始化项目包。
        </h1>
        <p class="text-center wow fadeInUp" data-wow-delay="0.3s">
          cool web with vue3+vite 让前端开发更快速、简单。所有会Vue开发者都能快速上手
        </p>
        <div class="row m_T30">
          <div class="col-xs-12 col-lg-4 wow fadeInUp" v-for="(item, index) in list" :key="index">
            <div class="box-row">
              <img :src="item.img" alt="" />
              <div class="inner p_20">
                <h3 class="m_B15">{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { ref, onMounted, defineComponent, onUnmounted } from 'vue';
  import Swiper from 'swiper';
  import 'swiper/swiper.min.css';
  import { getlist } from '@/api/index';
  import { useStore } from 'vuex';
  import utils   from  '@/utils'
  export default defineComponent({
    setup() {
      let list = ref([]);

      getlist().then((res) => {
        list.value = res.data;
      });

      const { initWow } = utils();
      initWow()
      
      onMounted(() => {
        new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          speed: 2500,
          autoplay: true,
          parallax: true,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        
        
      });
      return {
        list,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .banner {
    height: 500px;
    background-color: #007fff;
    color: #fff;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        text-shadow: 0 0 10px #ccc;
        font: italic 700 120px/100% Arial;
      }
      p {
        text-align: center;
        letter-spacing: 3px;
        text-shadow: 0 0 10px #ccc;
        font: normal 34px/400% Arial;
      }
    }
  }
  .index {
    //   height: 500px;
    .Advantage {
      h1 {
        font-size: 32px;
      }

      .row {
        .box-row {
          background-color: #fff;
          margin-bottom: 1rem;
          p {
            line-height: 1.5em;
            font-size: 14px;
            color: #999;
            min-height: 4.5em;
          }
        }
      }
    }
  }
</style>
