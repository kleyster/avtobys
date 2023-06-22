<template>
  <div class="rates">
    <div class="container-main">
      <div class="rates__content">
        <div class="col-md-3 offset-md-1 rates-one">
          <div class="rates__title">{{ $t("tariffs") }}</div>
          <div class="rates__description">
            <p>
              {{ $t("tariff_categories") }}
            </p>
            <ul>
              <li>{{ $t("standard") }}</li>
              <li>{{ $t("school") }}</li>
              <li>{{ $t("social") }}</li>
              <li>{{ $t("preferential") }}</li>
            </ul>
          </div>
          <img src="/content/line1.svg" alt="" class="line" />
        </div>
        <div class="col-md-4 rates__card">
          <img src="/content/cards.png" alt="" />
        </div>
        <div class="col-md-3 offset-md-1 rates__description2">
          <img src="/content/line2.svg" alt="" class="line" />
          <p>
            {{ $t("tariffs_text") }}
          </p>
        </div>
      </div>
    </div>
    <div class="rates__bg"></div>
  </div>
</template>

<style lang="scss" scoped>
.rates {
  position: relative;
  padding-top: 100px;
  margin-top: -20px;
  @media only screen and (max-width: 767px) {
    padding: 40px 0 24px;
    margin-top: 0;
    background: $blue-light;
  }
  &__bg {
    background: $blue-light;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    border-top-left-radius: 16px;
    z-index: -1;
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
  &__content {
    position: relative;
    display: flex;
    @media only screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
  }
  &__title {
    font-weight: 700;
    font-size: 53.2319px;
    line-height: 145.69%;
    letter-spacing: 0.005em;
    color: $dark;
    margin-bottom: 40px;
    @media only screen and (max-width: 767px) {
      font-size: 32px;
      margin-bottom: 16px;
      text-align: center;
    }
  }
  &__description {
    font-weight: 500;
    font-size: 19px;
    line-height: 28px;
    color: $dark2;
    @media only screen and (max-width: 767px) {
      font-size: 17px;
      margin-bottom: 32px;
    }
    li {
      margin-bottom: 12px;
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
  &__description2 {
    font-weight: 500;
    font-size: 19px;
    line-height: 28px;
    color: $dark2;
    position: absolute;
    bottom: 0;
    right: 0;
    @media only screen and (max-width: 767px) {
      position: relative;
      bottom: auto;
      order: 3;
      font-size: 17px;
    }
    .line {
      width: 140px;
      margin-bottom: 20px;
      margin-left: -50px;
      @media only screen and (max-width: 991px) {
        display: none;
      }
    }
  }
  &__card {
    display: flex;
    align-items: flex-end;
    margin-bottom: -30px;
    padding-top: 30px;
    @media only screen and (max-width: 767px) {
      order: 1;
      margin-bottom: 24px;
      padding-top: 0;
    }
  }
  &-one {
    position: relative;
    @media only screen and (max-width: 767px) {
      order: 2;
    }
    .line {
      position: absolute;
      width: 140px;
      left: 50%;
      bottom: 38px;
      @media only screen and (min-width: 1840px) {
        bottom: 120px;
      }
      @media only screen and (max-width: 1300px) {
        left: 60%;
      }
      @media only screen and (max-width: 991px) {
        display: none;
      }
    }
  }
}
</style>
