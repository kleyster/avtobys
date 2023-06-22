<template>
  <div class="safety container-main">
    <div class="col-md-5">
      <img src="/content/security.png" alt="" class="safety__img" />
    </div>
    <div class="col-md-5 offset-md-1">
      <div class="safety__title">{{ $t("safety") }}</div>
      <div class="safety__description">
        <p>{{ $t("payments_safety_text1") }}</p>
        <p>{{ $t("payments_safety_text2") }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.safety {
  display: flex;
  align-items: center;
  margin-bottom: 64px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 24px;
    flex-wrap: wrap;
    text-align: center;
  }
  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 124.69%;
    letter-spacing: 0.005em;
    color: $dark;
    margin-bottom: 32px;
    @media only screen and (max-width: 767px) {
      font-size: 30px;
      margin-bottom: 16px;
    }
  }
  &__description {
    font-weight: 500;
    font-size: 18px;
    line-height: 133.4%;
    color: $dark;
    max-width: 536px;
    p {
      margin-bottom: 20px;
    }
  }
  &__img {
    @media only screen and (max-width: 767px) {
      margin-bottom: 24px;
    }
  }
}
</style>
