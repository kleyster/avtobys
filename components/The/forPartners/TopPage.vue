<template>
  <div class="partners-top">
    <div class="container-main">
      <div class="partners-top__title">
        {{ $t("partners_top_title") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="scss" scoped>
.partners-top {
  background-image: url("/content/bg_partners.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: right bottom;
  min-height: 440px;
  margin: 65px 0 85px 0;
  @media only screen and (min-width: 1500px) {
    min-height: 500px;
  }
  @media only screen and (min-width: 1700px) {
    min-height: 600px;
  }
  @media only screen and (min-width: 2000px) {
    min-height: 740px;
  }
  @media only screen and (max-width: 991px) {
    min-height: 300px;
    margin: 40px 0;
  }
  @media only screen and (max-width: 767px) {
    margin: 12px 0 40px;
    min-height: 260px;
  }
  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 121%;
    color: $dark;
    max-width: 600px;
    @media only screen and (max-width: 991px) {
      font-size: 26px;
    }
  }
}
</style>
