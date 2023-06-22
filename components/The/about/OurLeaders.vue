<template>
  <div class="container-main leaders">
    <div class="leaders__title">{{ $t("our_leaders") }}</div>
    <div class="leaders__list">
      <div class="leaders__item" v-for="(item, index) in leaders" :key="index">
        <img :src="item.img" alt="" />
        <div>
          <p>{{ item.name }}</p>
          <span>{{ item.position }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const leaders = [
  {
    img: "/content/leaders/1.png",
    name: t("leaders[0].name"),
    position: t("leaders[0].position"),
  },
  {
    img: "/content/leaders/2.png",
    name: t("leaders[1].name"),
    position: t("leaders[1].position"),
  },
  {
    img: "/content/leaders/3.png",
    name: t("leaders[2].name"),
    position: t("leaders[2].position"),
  },
  {
    img: "/content/leaders/4.png",
    name: t("leaders[3].name"),
    position: t("leaders[3].position"),
  },
  {
    img: "/content/leaders/5.png",
    name: t("leaders[4].name"),
    position: t("leaders[4].position"),
  },
];
</script>

<style lang="scss" scoped>
.leaders {
  margin-bottom: 64px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 12px;
  }
  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 136.69%;
    letter-spacing: 0.015em;
    color: #000000;
    margin-bottom: 32px;
    @media only screen and (max-width: 767px) {
      font-size: 28px;
      margin-bottom: 24px;
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
    @media only screen and (max-width: 767px) {
      gap: 0;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 767px) {
      flex-wrap: wrap;
      margin-bottom: 28px;
      justify-content: center;
      text-align: center;
    }
    img {
      width: 150px;
      min-width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 18px;
      @media only screen and (min-width: 1840px) {
        width: 200px;
        height: 200px;
      }
      @media only screen and (max-width: 767px) {
        width: 90px;
        height: 90px;
        min-width: 90px;
        margin: 0 0 16px 0;
      }
    }
    p {
      font-weight: 600;
      font-size: 20px;
      line-height: 124.69%;
      letter-spacing: 0.005em;
      color: #000000;
      margin-bottom: 8px;
      @media only screen and (min-width: 1840px){
        font-size: 27px;
      }
      @media only screen and (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 3px;
      }
    }
    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 124.69%;
      letter-spacing: 0.005em;
      color: $blue;
      @media only screen and (min-width: 1840px){
        font-size: 22px;
      }
      @media only screen and (max-width: 767px) {
        font-size: 15px;
      }
    }
  }
}
</style>
