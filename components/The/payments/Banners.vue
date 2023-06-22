<template>
  <div class="container-main banner">
    <div class="banner-first">
      <div class="content">
        <h2 class="title">{{ $t("transfers_commission") }}</h2>
        <p class="description">
          {{ $t("transfers_commission_text") }}
        </p>
      </div>
      <img src="/content/banner1.png" alt="" class="img" />
    </div>
    <div class="banner-list">
      <div class="banner-list__width">
        <div class="banner-second -first">
          <h3>{{ $t("comfort_ease_use") }}</h3>
          <img src="/content/banner2.png" alt="" />
        </div>
        <div class="banner-second -second">
          <img src="/content/banner3.png" alt="" />
          <h3>{{ $t("protection_system") }}</h3>
        </div>
      </div>
      <div class="banner-third">
        <div class="content">
          <h2 class="title">{{ $t("wide_range_services") }}</h2>
          <p class="description">
            {{ $t("wide_range_services_text") }}
          </p>
        </div>
        <img src="/content/banner4.png" alt="" class="img" />
        <img src="/content/banner4_mobile.png" alt="" class="img -mb" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="scss" scoped>
.banner {
  margin-bottom: 64px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
  &-first {
    background: linear-gradient(180deg, #00007b 0%, #0000af 100%);
    box-shadow: 5px 4px 17px rgba(114, 114, 114, 0.25);
    border-radius: 28px;
    margin-bottom: 30px;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 44px;
    min-height: 500px;
    position: relative;
    @media only screen and (max-width: 991px) {
      min-height: 400px;
    }
    @media only screen and (max-width: 767px) {
      min-height: auto;
      padding: 0 20px 24px;
      flex-wrap: wrap;
    }
    .content {
      max-width: 474px;
      @media only screen and (max-width: 767px) {
        max-width: 100%;
        order: 2;
      }
    }
    .title {
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      margin-bottom: 32px;
      @media only screen and (max-width: 767px) {
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 16px;
      }
    }
    .description {
      font-weight: 600;
      font-size: 19px;
      line-height: 130.19%;
    }
    .img {
      position: absolute;
      right: 0;
      top: 0;
      max-width: 689px;
      @media only screen and (max-width: 991px) {
        max-width: 400px;
      }
      @media only screen and (max-width: 767px) {
        position: relative;
        max-width: 100%;
        order: 1;
        margin-bottom: 24px;
      }
    }
  }
  &-list {
    display: flex;
    gap: 30px;
    @media only screen and (max-width: 1300px) {
      flex-wrap: wrap;
    }
    &__width {
      max-width: 494px;
      width: 100%;
      @media only screen and (max-width: 1300px) {
        max-width: 100%;
        display: flex;
        gap: 30px;
        order: 2;
      }
      @media only screen and (max-width: 991px) {
        flex-wrap: wrap;
        gap: 0;
      }
      @media only screen and (max-width: 767px) {
        order: 1;
      }
    }
  }
  &-second {
    border-radius: 20px;
    height: 230px;
    color: #fff;
    box-shadow: -3px 4px 14px rgba(154, 154, 154, 0.25);
    display: flex;
    position: relative;
    @media only screen and (max-width: 1300px) {
      width: 50%;
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
    }
    @media only screen and (max-width: 767px) {
      flex-wrap: wrap;
      height: auto;
    }
    h3 {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      padding-top: 37px;
      @media only screen and (max-width: 767px) {
        order: 2;
        padding: 40px 20px;
      }
    }
    img {
      position: absolute;
      @media only screen and (max-width: 767px) {
        order: 1;
        position: relative;
      }
    }
    &.-first {
      background: rgba(38, 119, 241, 0.53);
      padding-left: 44px;
      margin-bottom: 30px;
      @media only screen and (max-width: 767px) {
        padding: 50px 0 0 0;
      }
      h3 {
        width: 220px;
        @media only screen and (max-width: 767px) {
          width: 100%;
        }
      }
      img {
        bottom: 0;
        right: 0;
        width: 265px;
      }
    }
    &.-second {
      background: rgba(253, 121, 0, 0.97);
      padding-right: 20px;
      @media only screen and (max-width: 767px) {
        padding: 50px 0 0 0;
      }
      h3 {
        width: 234px;
        margin: 0 0 0 auto;
        @media only screen and (max-width: 767px) {
          margin: 0;
          width: 100%;
        }
      }
      img {
        bottom: 0;
        left: 20px;
        width: 218px;
        object-fit: scale-down;
        @media only screen and (max-width: 767px) {
          width: 100%;
          left: 0;
        }
      }
    }
  }
  &-third {
    background: linear-gradient(180deg, #00007b 0%, #0000af 100%);
    box-shadow: -3px 4px 14px rgba(154, 154, 154, 0.25);
    width: calc(100% - 524px);
    border-radius: 20px;
    color: #fff;
    position: relative;
    overflow: hidden;
    @media only screen and (max-width: 1300px) {
      order: 1;
      width: 100%;
    }
    @media only screen and (max-width: 767px) {
      order: 2;
      display: flex;
      flex-wrap: wrap;
    }
    .content {
      max-width: 357px;
      width: 100%;
      padding: 86px 0 0 33px;
      @media only screen and (max-width: 1300px) {
        padding: 40px 0 40px 33px;
      }
      @media only screen and (max-width: 767px) {
        order: 2;
        padding: 0 20px 24px;
      }
    }
    .title {
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
      margin-bottom: 32px;
      @media only screen and (max-width: 767px) {
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 16px;
      }
    }
    .description {
      font-weight: 600;
      font-size: 19px;
      line-height: 130.19%;
    }
    .img {
      position: absolute;
      top: 0;
      right: -3px;
      width: 395px;
      height: 100%;
      object-fit: scale-down;
      object-position: bottom right;
      @media only screen and (max-width: 767px) {
        position: relative;
        order: 1;
        height: auto;
        display: none;
        width: 60%;
        margin: -5px 0 8px auto;
      }
      &.-mb {
        display: none;
        @media only screen and (max-width: 767px) {
          display: block;
        }
      }
    }
  }
}
</style>
