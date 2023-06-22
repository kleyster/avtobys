<template>
  <div class="application" :class="{ '-dark': dark }">
    <a href="https://play.google.com/store/apps/details?id=kz.avtobys.userapp&hl=ru" target="_blank">
      <img src="/icons/google_play.svg" alt="" /> Google Play
    </a>
    <a href="https://apps.apple.com/kz/app/avtobys-smartqala/id1481967590" target="_blank">
      <img src="/icons/app_store.svg" alt="" /> App Store
    </a>
    <a href="https://appgallery.huawei.com/#/app/C102938333" target="_blank"
      ><img src="/icons/app_gallery.svg" alt="" /> AppGallery
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "#ffffff",
  },
  bgColor: {
    type: String,
    default: "#0000AF",
  },
  dark: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.application {
  display: flex;
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 767px) {
    display: block;
  }
  a {
    background: v-bind(bgColor);
    color: v-bind(color);
    border-radius: 10px;
    width: 161px;
    min-width: 161px;
    height: 42px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    white-space: nowrap;
    margin-bottom: 16px;
    @media only screen and (max-width: 767px) {
      margin: 0 auto 12px;
    }
    img {
      margin-right: 8px;
    }
  }
  &.-dark {
    a {
      img {
        filter: grayscale(1) invert(1);
        opacity: 0.9;
      }
    }
  }
}
</style>
