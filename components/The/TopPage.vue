<template>
  <div class="container-main">
    <div class="topPage">
      <div class="topPage__content col-md-6">
        <h1 class="topPage__content_title"><slot name="top_title"></slot></h1>
        <p class="topPage__content_description">
          {{ content.description }}
          <slot name="top_description"></slot>
        </p>
        <UiApplication />
      </div>
      <div class="col-md-5 offset-md-1 topPage__img">
        <img :src="content.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: Object,
});
</script>

<style lang="scss">
.topPage {
  display: flex;
  align-items: center;
  margin: 64px 0;
  @media only screen and (max-width: 1300px) {
    margin: 40px 0;
  }
  @media only screen and (max-width: 991px) {
    margin: 16px 0 40px 0;
  }
  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin: 16px 0 24px 0;
  }
  &__content {
    @media only screen and (max-width: 767px) {
      order: 2;
      text-align: center;
    }
    &_title {
      font-weight: 700;
      font-size: 54px;
      line-height: 137.69%;
      letter-spacing: 0.005em;
      margin-bottom: 38px;
      color: $dark;
      @media only screen and (min-width: 1600px) {
        font-size: 59px;
      }
      @media only screen and (max-width: 1300px) {
        font-size: 40px;
        margin-bottom: 16px;
      }
      span {
        color: $blue;
      }
    }
    &_description {
      font-weight: 500;
      font-size: 16px;
      line-height: 133.4%;
      color: $grey;
      margin-bottom: 38px;
      max-width: 700px;
      width: 100%;
      @media only screen and (max-width: 1300px) {
        font-size: 15px;
        margin-bottom: 24px;
      }
    }
  }
  &__img {
    @media only screen and (max-width: 767px) {
      order: 1;
      margin-bottom: 24px;
    }
  }
}
</style>
