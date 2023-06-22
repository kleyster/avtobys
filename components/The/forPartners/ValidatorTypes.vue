<template>
  <div class="container-main validators">
    <div class="validators__title">{{ $t("validators_title") }}</div>
    <div class="validators__item" v-for="(item, index) in list" :key="index">
      <div class="col-md-6 validators__item_content">
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </div>
      <div class="validators__item_img col-md-6">
        <img :src="item.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const list = [
  {
    title: t("validators_list[0].title"),
    description: t("validators_list[0].description"),
    img: "/content/tablet.png",
  },
  {
    title: t("validators_list[1].title"),
    description: t("validators_list[1].description"),
    img: "/content/tablet2.png",
  },
  {
    title: t("validators_list[2].title"),
    description: t("validators_list[2].description"),
    img: "/content/mobile_validator.png",
  },
];
</script>

<style lang="scss" scoped>
.validators {
  color: #1c1d1d;
  margin-bottom: 92px;
  @media only screen and (max-width: 767px){
    margin-bottom: 40px;
  }
  &__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 145.69%;
    margin-bottom: 32px;
       @media only screen and (max-width: 767px) {
        font-size: 30px;
        margin-bottom: 24px;
       }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
    @media only screen and (max-width: 767px){
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
    }
    h4 {
      font-weight: 700;
      font-size: 24px;
      line-height: 142.19%;
      margin-bottom: 32px;
      @media only screen and (max-width: 767px){
        font-size: 20px;
        margin-bottom: 16px;
      }
    }
    p {
      margin: 0;
      font-size: 19px;
      line-height: 23px;
      color: #1f1f1f;
      @media only screen and (max-width: 767px){
        font-size: 16px;
      }
    }
    &_img {
      text-align: right;
      @media only screen and (max-width: 767px){
        order: 1;
        text-align: center;
        height: 222px;
        margin-bottom: 24px;
      }
      img{
        @media only screen and (max-width: 767px){
          height: 100%;
        }
      }
    }
    &_content{
      @media only screen and (max-width: 767px){
        order: 2;
      }
    }
    &:nth-child(2n+1) {
      .validators__item_content {
        order: 2;
      }
      .validators__item_img {
        order: 1;
        text-align: left;
      }
    }
  }
}
</style>
