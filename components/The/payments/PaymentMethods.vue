<template>
  <div class="container-main">
    <div class="col-md-10 offset-md-1 payment-methods">
      <div class="payment-methods__title">
        {{ $t("convenient_payment_methods.first") }} <br />
        {{ $t("convenient_payment_methods.second") }}
      </div>
      <div class="payment-methods__subtitle">
        {{ $t("convenient_payment_methods_s") }}
      </div>
      <div class="payment-methods__list">
        <div
          class="payment-methods__list_item"
          v-for="(item, index) in list"
          :key="index"
        >
          <img :src="item.img" alt="" />
          <span>{{ item.name }}</span>
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
    img: "/paymentList/1.png",
    name: t("payment_methods_list[0].name"),
  },
  {
    img: "/paymentList/2.png",
    name: t("payment_methods_list[1].name"),
  },
  {
    img: "/paymentList/3.png",
    name: t("payment_methods_list[2].name"),
  },
  {
    img: "/paymentList/4.png",
    name: t("payment_methods_list[3].name"),
  },
  {
    img: "/paymentList/5.png",
    name: t("payment_methods_list[4].name"),
  },
  {
    img: "/paymentList/6.png",
    name: t("payment_methods_list[5].name"),
  },
  {
    img: "/paymentList/7.png",
    name: t("payment_methods_list[6].name"),
  },
  {
    img: "/paymentList/8.png",
    name: t("payment_methods_list[7].name"),
  },
];
</script>

<style lang="scss" scoped>
.payment-methods {
  margin-bottom: 24px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 136.69%;
    text-align: center;
    letter-spacing: 0.015em;
    color: $dark;
    margin-bottom: 32px;
    @media only screen and (max-width: 767px) {
      margin-bottom: 16px;
      font-size: 28px;
    }
  }
  &__subtitle {
    font-weight: 500;
    font-size: 24px;
    line-height: 124.69%;
    text-align: center;
    letter-spacing: 0.005em;
    color: #000000;
    margin-bottom: 40px;
    @media only screen and (max-width: 767px){
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
  &__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 767px) {
      gap: 20px;
    }
    &_item {
      width: 201px;
      height: 201px;
      display: flex;
      align-content: space-between;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 30px 40px;
      background: #ffb800;
      border-radius: 26px;
      padding: 32px 0 28px;
      @media only screen and (min-width: 1840px) {
        width: 216px;
        height: 216px;
      }
      @media only screen and (max-width: 767px) {
        width: calc(50% - 10px);
        height: auto;
        margin: 0;
        padding: 20px 16px 16px;
        border-radius: 16px;
      }
      img {
        margin-bottom: 34px;
        height: 56px;
        object-fit: scale-down;
        @media only screen and (max-width: 767px) {
          margin-bottom: 20px;
          height: auto;
        }
      }
      span {
        font-weight: 600;
        font-size: 20px;
        line-height: 124.69%;
        letter-spacing: 0.005em;
        color: $dark2;
        display: block;
        width: 150px;
        @media only screen and (max-width: 767px) {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
