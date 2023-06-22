<template>
  <div class="bottomPage">
    <div class="bottomPage__content">
      <div class="bottomPage__title">{{ content.title }} <br> {{ content.title2 }}</div>
      <div class="bottomPage__description">{{ content.description }}</div>
      <UiApplication color="#1F1F1F" bgColor="#fff" dark v-if="content.application"/>
      <img :src="content.img" alt="" v-if="content.img">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: Object,
});
</script>

<style lang="scss" scoped>
.bottomPage {
  background: linear-gradient(358.82deg, #000052 1.02%, #0000af 99.01%);
  color: #fff;
  padding: 100px 16px;
  @media only screen and (max-width: 767px) {
    padding: 40px 16px;
  }
  &__content {
    max-width: 824px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 124.69%;
    letter-spacing: 0.005em;
    margin-bottom: 32px;
    @media only screen and (max-width: 767px) {
      font-size: 30px;
      margin-bottom: 16px;
    }
  }
  &__description {
    font-weight: 500;
    font-size: 18px;
    line-height: 133.4%;
    margin: 0 auto 40px;
    max-width: 700px;
    width: 100%;
    @media only screen and (max-width: 767px) {
      margin-bottom: 24px;
      br {
        display: none;
      }
    }
  }
}
.application {
  justify-content: center;
}
</style>
