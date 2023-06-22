<template>
  <div class="container-main tariffs-formed">
    <div class="col-md-10 offset-md-1">
      <div class="tariffs-formed__title">{{ $t("tariffs_formed_title") }}</div>
      <div class="tariffs-formed__content">
        <div class="tariffs-formed__item">
          <p>{{ $t("tariffs_formed_text1") }}</p>
          <p>{{ $t("tariffs_formed_text2") }}</p>
        </div>
        <div class="tariffs-formed__item">
          <p>{{ $t("tariffs_formed_text3") }}</p>
        </div>
      </div>
      <img src="/content/cards2.png" alt="" class="tariffs-formed__img" />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="scss" scoped>
.tariffs-formed {
  margin-bottom: 34px;
  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 145.69%;
    margin-bottom: 32px;
    color: #1c1d1d;
    @media only screen and (min-width: 1840px) {
      margin-bottom: 78px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 30px;
      margin-bottom: 16px;
    }
  }
  &__content {
    display: flex;
    align-items: flex-end;
    margin-bottom: 28px;
    @media only screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
    p {
      font-weight: 500;
      font-size: 19px;
      line-height: 23px;
      color: #1f1f1f;
      margin-bottom: 30px;
      @media only screen and (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
  }
  &__item {
    max-width: 410px;
    width: 100%;
    margin-right: 100px;
    @media only screen and (max-width: 767px) {
      margin: 0;
    }
    &:last-child {
      margin: 0;
    }
  }
  &__img {
    margin: 0 -4%;
    width: 100%;
  }
}
</style>
