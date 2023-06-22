<template>
  <div class="possibilities">
    <div class="possibilities__bg">
      <div class="container-main">
        <h2 class="possibilities__title text-48">
          {{ $t("opportunities_avtobys") }}
        </h2>
        <div class="possibilities__block">
          <div class="possibilities__content">
            <div class="possibilities__content_item">
              <h4>{{ $t("payments") }}</h4>
              <p>{{ $t("payments_text") }}</p>
            </div>
            <div class="possibilities__content_item">
              <h4>{{ $t("paying") }}</h4>
              <p>{{ $t("paying_text") }}</p>
            </div>
            <div class="possibilities__content_item">
              <h4>{{ $t("replenishment") }}</h4>
              <p>{{ $t("replenishment_text") }}</p>
            </div>
          </div>
          <img
            src="/content/phone_main.png"
            alt=""
            class="possibilities__img"
          />
          <div class="possibilities__content">
            <div class="possibilities__content_item">
              <h4>{{ $t("electronic_wallet") }}</h4>
              <p>{{ $t("electronic_wallet_text") }}</p>
            </div>
            <div class="possibilities__content_item">
              <h4>{{ $t("routes") }}</h4>
              <p>{{ $t("routes_text") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.possibilities {
  padding: 0 72px;
  margin-bottom: 64px;
  color: #fff;
  @media only screen and (max-width: 1300px) {
    margin-bottom: 40px;
    padding: 0 40px;
  }
  @media only screen and (max-width: 767px) {
    padding: 0 24px;
  }
  &__bg {
    background: linear-gradient(180deg, #000052 0%, #0000af 100%);
    border-radius: 21px;
    padding: 80px 70px;
    @media only screen and (max-width: 1300px) {
      padding: 40px 30px;
    }
    @media only screen and (max-width: 767px) {
      padding: 40px 14px 8px;
    }
  }
  &__title {
    text-align: center;
    margin-bottom: 48px;
    @media only screen and (max-width: 767px) {
      font-size: 32px;
      margin-bottom: 24px;
    }
  }
  &__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
  }
  &__img {
    max-width: 290px;
    width: 100%;
    @media only screen and (max-width: 991px) {
      max-width: 260px;
    }
    @media only screen and (max-width: 767px) {
      order: 1;
      width: 180px;
      margin: 0 auto 24px;
    }
  }
  &__content {
    max-width: 390px;
    width: 100%;
    @media only screen and (min-width: 1840px) {
      max-width: 505px;
    }
    @media only screen and (max-width: 767px) {
      order: 2;
    }
    &_item {
      margin-bottom: 72px;
      @media only screen and (max-width: 991px) {
        margin-bottom: 32px;
      }
      &:last-child{
        margin-bottom: 0;
      }
      h4 {
        font-weight: 700;
        font-size: 26px;
        line-height: 32px;
        margin-bottom: 32px;
        @media only screen and (max-width: 1300px) {
          font-size: 24px;
          margin-bottom: 16px;
        }
      }
      p {
        font-weight: 500;
        font-size: 16px;
        line-height: 130.19%;
      }
    }
  }
  .container-main {
    @media only screen and (max-width: 991px) {
      padding: 0;
    }
  }
}
</style>
