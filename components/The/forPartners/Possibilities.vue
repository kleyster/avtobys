<template>
  <div class="possibilities container-main">
    <div class="possibilities__title">{{ $t("opportunities_title") }}</div>
    <div class="possibilities__flex">
      <div class="possibilities__list first">
        <div class="possibilities__list_item">
          <img src="/partners_possibilities/icon1.svg" alt="" class="img" />
          <div class="content">
            <h4>{{ $t("opportunities[0].title") }}</h4>
            <p>
              {{ $t("opportunities[0].description") }}
            </p>
          </div>
          <img src="/partners_possibilities/line1.svg" alt="" class="arrow" />
        </div>
        <div class="possibilities__list_item">
          <img src="/partners_possibilities/icon2.svg" alt="" class="img" />
          <div class="content">
            <h4>{{ $t("opportunities[1].title") }}</h4>
            <p>
              {{ $t("opportunities[1].description") }}
            </p>
          </div>
          <img src="/partners_possibilities/line2.svg" alt="" class="arrow" />
        </div>
        <div class="possibilities__list_item">
          <img src="/partners_possibilities/icon3.svg" alt="" class="img" />
          <div class="content">
            <h4>{{ $t("opportunities[2].title") }}</h4>
            <p>
              {{ $t("opportunities[2].description") }}
            </p>
          </div>
          <img src="/partners_possibilities/line3.svg" alt="" class="arrow" />
        </div>
        <div class="possibilities__list_item">
          <img src="/partners_possibilities/icon4.svg" alt="" class="img" />
          <div class="content">
            <h4>{{ $t("opportunities[3].title") }}</h4>
            <p>
              {{ $t("opportunities[3].description") }}
            </p>
          </div>
          <img src="/partners_possibilities/line4.svg" alt="" class="arrow" />
        </div>
      </div>
      <div class="possibilities__phone">
        <img src="/partners_possibilities/phone.png" alt="" />
      </div>
      <div class="possibilities__list second">
        <div class="possibilities__list_item">
          <img src="/partners_possibilities/icon5.svg" alt="" class="img" />
          <div class="content">
            <h4>{{ $t("opportunities[4].title") }}</h4>
            <p>
              {{ $t("opportunities[4].description") }}
            </p>
          </div>
          <img src="/partners_possibilities/line5.svg" alt="" class="arrow" />
        </div>
        <div class="possibilities__list_item">
          <img src="/partners_possibilities/icon6.svg" alt="" class="img" />
          <div class="content">
            <h4>{{ $t("opportunities[5].title") }}</h4>
            <p>
              {{ $t("opportunities[5].description") }}
            </p>
          </div>
          <img src="/partners_possibilities/line6.svg" alt="" class="arrow" />
        </div>
        <div class="possibilities__list_item">
          <img src="/partners_possibilities/icon7.svg" alt="" class="img" />
          <div class="content">
            <h4>{{ $t("opportunities[6].title") }}</h4>
            <p>
              {{ $t("opportunities[6].description") }}
            </p>
          </div>
          <img src="/partners_possibilities/line7.svg" alt="" class="arrow" />
        </div>
        <div class="possibilities__list_item">
          <img src="/partners_possibilities/icon8.svg" alt="" class="img" />
          <div class="content">
            <h4>{{ $t("opportunities[7].title") }}</h4>
            <p>
              {{ $t("opportunities[7].description") }}
            </p>
          </div>
          <img src="/partners_possibilities/line8.svg" alt="" class="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<style lang="scss" scoped>
.possibilities {
  margin-bottom: 128px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 145.69%;
    letter-spacing: 0.005em;
    color: #1c1d1d;
    margin-bottom: 64px;
    @media only screen and (max-width: 767px) {
      font-size: 28px;
      margin-bottom: 24px;
    }
  }
  &__flex {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    position: relative;
     @media only screen and (min-width: 1840px){
      justify-content: space-around;
     }
    @media only screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
  }
  &__list {
    width: 50%;
    @media only screen and (min-width: 1840px) {
      width: 40%;
    }
    @media only screen and (max-width: 767px) {
      width: 100%;
    }
    &_item {
      display: flex;
      color: #141a33;
      margin-bottom: 60px;
      max-width: 364px;
      width: 100%;
      position: relative;
      @media only screen and (max-width: 1300px) {
        margin: 0 0 60px 0 !important;
      }
      @media only screen and (max-width: 767px) {
        flex-wrap: wrap;
        margin-bottom: 24px !important;
      }
      &:last-child {
        @media only screen and (max-width: 1300px) {
          margin: 0 !important;
        }
      }
      .img {
        background: #ffffff;
        box-shadow: -1px 3px 26px 11px rgba(58, 58, 58, 0.08);
        border-radius: 12px;
        width: 60px;
        min-width: 60px;
        height: 60px;
        margin-right: 28px;
        @media only screen and (max-width: 767px) {
          margin-bottom: 20px;
        }
      }
      h4 {
        font-weight: 600;
        font-size: 16px;
        line-height: 133.4%;
        margin-bottom: 20px;
      }
      p {
        font-size: 15px;
        line-height: 130.19%;
        margin: 0;
      }
      .arrow {
        position: absolute;
        @media only screen and (max-width: 1300px) {
          display: none;
        }
      }
    }
  }
  .first {
    .possibilities__list_item {
      &:nth-child(1) {
        .arrow {
          left: 100%;
          top: 27%;
        }
      }
      &:nth-child(2) {
        margin-left: 40px;
        .arrow {
          left: 100%;
          top: 45%;
        }
      }
      &:nth-child(3) {
        .arrow {
          left: 100%;
          top: 45%;
        }
      }
      &:nth-child(4) {
        margin-bottom: 0;
        margin-left: 80px;
        .arrow {
          left: 100%;
          top: -15%;
        }
      }
    }
  }
  .second {
    .possibilities__list_item {
      margin: 0 0 60px auto;
      &:nth-child(1) {
        margin-right: 50px;
        .arrow {
          left: -10px;
          top: 45%;
        }
      }
      &:nth-child(2) {
        .arrow {
          right: 85%;
          top: 30%;
        }
      }
      &:nth-child(3) {
        .arrow {
          right: 102%;
          top: 13%;
        }
      }
      &:nth-child(4) {
        margin-bottom: 0;
        margin-right: 60px;
        .arrow {
          left: 20px;
          top: -60px;
        }
      }
    }
  }
  &__phone {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: -50px;
    @media only screen and (max-width: 1300px) {
      display: none;
    }
    img {
      transform: rotate(-10deg);
       @media only screen and (min-width: 1840px){
        width: 340px;
       }
    }
  }
}
</style>
