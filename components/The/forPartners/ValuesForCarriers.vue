<template>
  <div class="container-main carriers">
    <div class="col-md-5 carriers__img">
      <img src="/content/phone.png" alt="" />
    </div>
    <div class="col-md-6 offset-md-1 carriers__content">
      <div class="carriers__title">
        {{ $t("carriers_title.first") }} <br />
        {{ $t("carriers_title.second") }}
      </div>
      <div class="carriers__item" v-for="(item, index) in list" :key="index">
        <img :src="item.img" alt="" />
        <div>
          <h5>{{ item.title }}</h5>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const list = [
  {
    title: t("carriers_list[0].title"),
    description: t("carriers_list[0].description"),
    img: "/icons/icon_c1.svg",
  },
  {
    title: t("carriers_list[1].title"),
    description: t("carriers_list[1].description"),
    img: "/icons/icon_c2.svg",
  },
  {
    title: t("carriers_list[2].title"),
    description: t("carriers_list[2].description"),
    img: "/icons/icon_c3.svg",
  },
  {
    title: t("carriers_list[3].title"),
    description: t("carriers_list[3].description"),
    img: "/icons/icon_c4.svg",
  },
];
</script>

<style lang="scss" scoped>
.carriers {
  display: flex;
  margin-bottom: 128px;
  @media only screen and (max-width: 767px) {
    display: block;
    margin-bottom: 40px;
  }
  &__content {
    padding-top: 72px;
    @media only screen and (max-width: 767px) {
      padding-top: 24px;
    }
  }
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 124.69%;
    letter-spacing: 0.005em;
    margin-bottom: 40px;
    color: #1c1d1d;
    @media only screen and (max-width: 767px) {
      font-size: 28px;
      margin-bottom: 24px;
      text-align: center;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 28px;
    @media only screen and (max-width: 767px) {
      flex-wrap: wrap;
      text-align: center;
      margin-bottom: 24px;
    }
    img {
      width: 131px;
      height: 95px;
      margin-right: 16px;
      box-shadow: 0px 1px 29px rgba(163, 163, 163, 0.22);
      border-radius: 10px;
      @media only screen and (max-width: 767px) {
        margin: 0 auto 24px;
      }
    }
    h5 {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 10px;
      color: #000000;
    }
    p {
      font-weight: 500;
      font-size: 19px;
      line-height: 23px;
      margin: 0;
      color: #5b5b5b;
    }
  }
  &__img {
    img {
      height: 800px;
      @media only screen and (max-width: 991px) {
        height: auto;
      }
    }
  }
}
</style>
