<template>
  <div class="data container-main">
    <div class="col-lg-6 data__slider">
      <Swiper
        :spaceBetween="10"
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="data__slider"
      >
        <swiper-slide>
          <div class="data__slide">
            <div class="data__slide_title">{{ $t("slider_title_first") }}</div>
            <div class="data__slide_flex">
              <div class="data__slide_text">
                <p>
                  <span class="percent">2%</span> <span>{{ $t("сash") }}</span>
                </p>
                <p>
                  <span class="percent">5%</span>
                  <span>{{ $t("payment_license_plate") }}</span>
                </p>
                <p>
                  <span class="percent">8%</span>
                  <span>{{ $t("bluetooth_payment") }}</span>
                </p>
                <p>
                  <span class="percent">11%</span>
                  <span>{{ $t("QR_payment") }}</span>
                </p>
                <p>
                  <span class="percent">74%</span>
                  <span>{{ $t("transport_card") }}</span>
                </p>
              </div>
              <img src="/content/pie.svg" class="pie" alt="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="data__slide">
            <div class="data__slide_title">{{ $t("slider_title_second") }}</div>
            <div class="data__slide_flex">
              <div class="data__slide_text second">
                <p>
                  <span class="percent">0,26%</span>
                  <span>{{ $t("bank_card") }}</span>
                </p>
                <p>
                  <span class="percent">12,39%</span>
                  <span>{{ $t("сash") }}</span>
                </p>
                <p>
                  <span class="percent">87,34%</span>
                  <span>{{ $t("balance") }}</span>
                </p>
              </div>
              <img src="/content/pie2.svg" class="pie" alt="" />
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>
    <div class="col-lg-6 data__content">
      <div class="data__title">{{ $t("data_title") }}</div>
      <div class="data__description">
        <p>
          {{ $t("data_text") }}
        </p>
        <ul>
          <li>
            {{ $t("data_text1") }}
          </li>
          <li>
            {{ $t("data_text2") }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const modules = [
  SwiperFreeMode,
  SwiperNavigation,
  SwiperThumbs,
  SwiperPagination,
];
</script>

<style lang="scss" scoped>
.data {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-bottom: 80px;
  @media only screen and (max-width: 767px){
    margin-bottom: 40px;
  }
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 136.69%;
    margin-bottom: 32px;
    letter-spacing: 0.015em;
    color: #0000af;
    max-width: 500px;
    @media only screen and (max-width: 767px){
      font-size: 26px;
      margin-bottom: 16px;
    }
  }
  &__content {
    padding-left: 50px;
    @media only screen and (max-width: 991px){
      order: 1;
      margin-bottom: 24px;
      padding: 0;
    }
    @media only screen and (max-width: 767px){
      margin-bottom: 16px;
    }
  }
  &__description {
    max-width: 500px;
    p {
      font-weight: 500;
      font-size: 19px;
      line-height: 23px;
      margin-bottom: 32px;
      @media only screen and (max-width: 767px){
        font-size: 16px;
        margin-bottom: 16px;
      }
    }
    ul{
      padding: 0 20px;
    }
    li {
      font-weight: 500;
      font-size: 19px;
      line-height: 23px;
      margin-bottom: 16px;
      color: #1f1f1f;
      list-style: disc;
      @media only screen and (max-width: 767px){
        font-size: 16px;
      }
    }
  }
  &__slide {
    color: #fff;
    background: $blue;
    border-radius: 10px;
    max-width: 550px;
    width: 100%;
    padding: 40px 56px 64px;
    margin-bottom: 40px;
     @media only screen and (min-width: 1840px){
      max-width: 740px;
      padding: 70px 56px 70px;
     }
     @media only screen and (max-width: 991px){
      margin: 0 auto 40px;
     }
     @media only screen and (max-width: 767px){
      padding: 18px 30px;
      min-height: 186px;
     }
    &_title {
      text-align: center;
      font-weight: 700;
      font-size: 14px;
      line-height: 124.4%;
      text-transform: uppercase;
      margin-bottom: 40px;
      @media only screen and (max-width: 767px){
        font-size: 10px;
        margin-bottom: 16px;
      }
    }
    &_flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .pie {
      width: 156px;
      height: 156px;
      @media only screen and (max-width: 767px){
        width: 78px;
        height: 78px;
      }
    }
    &_text {
      p {
        display: flex;
        align-items: center;
        margin-bottom: 22px;
        gap: 30px;
        &:last-child {
          margin-bottom: 0;
        }
        @media only screen and (max-width: 767px){
          gap: 8px;
          margin-bottom: 10px;
        }
        span {
          display: block;
          font-weight: 600;
          font-size: 13px;
          line-height: 14px;
          @media only screen and (max-width: 767px){
            font-size: 8px;
          }
        }
        .percent {
          font-weight: 700;
          position: relative;
          padding-left: 22px;
          min-width: 50px;
          &::before {
            content: "";
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #f8b6da;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
        &:nth-child(2) {
          .percent::before {
            background: #fd983b;
          }
        }
        &:nth-child(3) {
          .percent::before {
            background: #ffede1;
          }
        }
        &:nth-child(4) {
          .percent::before {
            background: #ffbf95;
          }
        }
        &:nth-child(5) {
          .percent::before {
            background: #74c4ff;
          }
        }
      }
    }
    .second {
      p {
        .percent{
          min-width: 70px;
        }
        &:nth-child(1) {
          .percent::before {
            background: #ff9851;
          }
        }
        &:nth-child(2) {
          .percent::before {
            background: #ffbb00;
          }
        }
        &:nth-child(3) {
          .percent::before {
            background: #56b8ff;
          }
        }
      }
    }
  }
  &__slider {
    @media only screen and (max-width: 991px) {
      width: 100%;
      order: 2;
    }
  }
}
</style>