<template>
  <div class="container-main">
    <div class="ticket row">
      <div class="col-md-5 offset-md-1 ticket-first">
        <div class="ticket__title">{{ $t('have_smartphone.first') }} <br /> {{ $t('have_smartphone.second') }}</div>
        <p class="ticket__description">
          {{ $t("have_smartphone_text.first") }} <br />
          {{ $t("have_smartphone_text.second") }} <br />
          {{ $t("have_smartphone_text.third") }}
        </p>
        <UiApplication bgColor="#546F94" />
      </div>
      <div class="col-md-4 offset-md-1 ticket-second">
        <img src="/content/phone_qr.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ticket {
  align-items: center;
  margin-bottom: 64px;
  @media only screen and (max-width: 1300px) {
    margin-bottom: 40px;
  }
  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 124.69%;
    letter-spacing: 0.005em;
    color: $dark;
    margin-bottom: 32px;
    @media only screen and (max-width: 991px) {
      font-size: 30px;
      margin-bottom: 16px;
    }
  }
  &__description {
    font-weight: 500;
    font-size: 18px;
    line-height: 133.4%;
    color: $dark2;
    margin-bottom: 40px;
    @media only screen and (max-width: 767px) {
      margin-bottom: 24px;
    }
  }
  &-first {
    @media only screen and (max-width: 767px) {
      order: 2;
    }
  }
  &-second {
    @media only screen and (max-width: 767px) {
      order: 1;
      margin-bottom: 24px;
    }
  }
}
</style>
