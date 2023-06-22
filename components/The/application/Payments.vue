<template>
  <div class="container-main payments">
    <div class="col-md-4 payments__content">
      <h2>{{ $t('payments') }}</h2>
      <p>{{ $t('application_payment_text') }}</p>
      <nuxt-link to="/payments">{{ $t('details') }}</nuxt-link>
    </div>
    <div class="col-md-6 offset-md-2 payments__img">
      <img src="/content/card_payments.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.payments {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
  &__content {
    color: $dark2;
    @media only screen and (max-width: 767px) {
      order: 2;
      text-align: center;
    }
    h2 {
      font-weight: 700;
      font-size: 40px;
      line-height: 124.69%;
      letter-spacing: 0.005em;
      margin-bottom: 32px;
      @media only screen and (max-width: 767px) {
        font-size: 32px;
        margin-bottom: 16px;
      }
    }
    p {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 40px;
      @media only screen and (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 24px;
      }
    }
    a {
      background: #546f94;
      border-radius: 10px;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      line-height: 124.69%;
      letter-spacing: 0.005em;
      width: 205px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media only screen and (max-width: 767px) {
        margin: 0 auto;
      }
    }
  }
  &__img {
    @media only screen and (max-width: 767px) {
      order: 1;
      margin-bottom: 24px;
    }
  }
}
</style>
