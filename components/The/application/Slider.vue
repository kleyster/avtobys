<template>
  <div class="container-main slider">
    <div class="slider-flex">
      <div class="col-md-5 col-xs-12 slider-first">
        <Swiper
          :spaceBetween="10"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          class="slider-img"
        >
          <swiper-slide v-for="(item, index) in list" :key="index">
            <img :src="item.img" />
          </swiper-slide>
        </Swiper>
      </div>
      <div class="col-md-5 offset-md-1 col-xs-12 slider-second">
        <Swiper
          @swiper="setThumbsSwiper"
          :spaceBetween="10"
          :slidesPerView="1"
          :modules="modules"
          :pagination="{
            clickable: true,
          }"
          class="slider-content"
        >
          <swiper-slide v-for="(item, index) in list" :key="index">
            <div class="slider-content__title" v-html="item.title"></div>
            <div class="slider-content__description">
              {{ item.description }} <br /> <br/>
              {{ item.description2 }}
            </div>
          </swiper-slide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

let thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
const modules = [
  SwiperFreeMode,
  SwiperNavigation,
  SwiperThumbs,
  SwiperPagination,
];

const list = [
  {
    img: "/slider/1.png",
    title: t("convenient_payment_methods_p"),
    description: t("payment_methods[0].description.first"),
    description2: t("payment_methods[0].description.second")
  },
  {
    img: "/slider/2.png",
    title: t("convenient_payment_methods_p"),
    description: t("payment_methods[1].description"),
  },
  {
    img: "/slider/3.png",
    title: t("convenient_payment_methods_p"),
    description: t("payment_methods[2].description"),
  },
  {
    img: "/slider/4.png",
    title: t("convenient_payment_methods_p"),
    description: t("payment_methods[3].description"),
  },
  {
    img: "/slider/5.png",
    title: t("convenient_payment_methods_p"),
    description: t("payment_methods[4].description"),
  },
];
</script>

<style lang="scss" scoped>
.slider {
  margin-bottom: 64px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 24px;
  }
  &-flex {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
  }
  &_main {
    text-align: center;
  }
  &-img {
    @media only screen and (max-width: 767px) {
      margin-bottom: 24px;
    }
    img {
      max-width: 330px;
      @media only screen and (max-width: 1300px) {
        max-width: 280px;
      }
      @media only screen and (max-width: 991px) {
        max-width: 220px;
      }
      @media only screen and (max-width: 767px) {
        width: 200px;
      }
    }
  }
  &-content {
    padding-bottom: 50px;
    @media only screen and (max-width: 767px) {
      padding-bottom: 0;
      padding-top: 40px;
      text-align: center;
    }
    &__title {
      font-weight: 700;
      font-size: 48px;
      line-height: 136.69%;
      letter-spacing: 0.015em;
      color: $blue;
      margin-bottom: 32px;
      @media only screen and (max-width: 991px) {
        font-size: 28px;
      }
      @media only screen and (max-width: 767px) {
        margin-bottom: 16px;
      }
    }
    &__description {
      font-weight: 500;
      font-size: 19px;
      line-height: 23px;
      color: #000000;
    }
  }
  &-first {
    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }
  &-second {
    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }
}
</style>
