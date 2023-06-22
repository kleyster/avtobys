<template>
  <div class="map">
    <div class="container-main">
        <div class="map__title text-36">{{ content.title }}</div>
        <div class="map__description">
          <p>{{ content.description }}</p>
          <p class="dt">{{ content.text }}</p>
        </div>
        <div class="col-md-10 offset-md-1 text-center">
          <img src="/content/map.png" alt="" />
        </div>
        <div class="map__description">
          <p class="mb">{{ content.text }}</p>
        </div>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  content: Object,
});
</script>

<style lang="scss" scoped>
.map {
  background: $blue-light;
  padding: 64px 0;
  margin-bottom: 64px;
  @media only screen and (max-width: 767px) {
    padding: 40px 0 10px;
    margin-bottom: 40px;
  }
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: $dark;
    margin-bottom: 32px;
    @media only screen and (max-width: 767px) {
      font-size: 30px;
      text-align: center;
      margin-bottom: 16px;
    }
  }
  &__description {
    line-height: 20px;
    color: $dark2;
    margin-bottom: 30px;
    max-width: 725px;
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    p {
      margin: 0;
      @media only screen and (max-width: 767px) {
        br {
          display: none;
        }
      }
    }
    @media only screen and (max-width: 767px) {
      text-align: center;
      font-size: 16px;
    }
  }
}
.mb {
  margin-top: 24px !important;
}
</style>
