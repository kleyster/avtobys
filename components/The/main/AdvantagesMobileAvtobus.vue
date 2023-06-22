<template>
  <div class="container-main">
    <div class="col-md-10 offset-md-1 row advantages">
      <div class="col-md-7">
        <h2 class="advantages__title text-48">
          <i18n-t keypath="provide_avtobus">
            <template #action>
              <span>Avtobys</span>
            </template>
          </i18n-t>
        </h2>

        <ul>
          <li>{{ $t("home_list_item1") }}</li>
          <li>{{ $t("home_list_item2") }}</li>
          <li>{{ $t("home_list_item3") }}</li>
          <li>{{ $t("home_list_item4") }}</li>
          <li>{{ $t("home_list_item5") }}</li>
          <li>{{ $t("home_list_item6") }}</li>
          <li>{{ $t("home_list_item7") }}</li>
        </ul>
      </div>
      <div class="col-md-3 offset-md-2 advantages__img">
        <img src="/icons/question_mark.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<style lang="scss" scoped>
.advantages {
  align-items: center;
  color: $dark;
  position: relative;
  @media only screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
  &__title {
    margin-bottom: 32px;
    @media only screen and (max-width: 767px) {
      margin-bottom: 16px;
    }
  }
  ul {
    li {
      margin-bottom: 16px;
      font-weight: 500;
      font-size: 17px;
      line-height: 139.4%;
      position: relative;
      padding-left: 20px;
      &::before {
        content: "·";
        font-size: 26px;
        position: absolute;
        left: 0;
        padding: 0 6px;
        top: -2px;
      }
    }
  }
  &__img {
    img {
      height: 100%;
    }
    @media only screen and (max-width: 767px) {
      position: absolute;
      top: 60%;
      transform: translateY(-40%);
      text-align: center;
      z-index: -1;
      height: 50%;
    }
  }
}
</style>
