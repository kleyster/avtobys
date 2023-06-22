<template>
  <div class="transport-card">
    <div class="container-main">
      <div class="transport-card__content">
        <div class="transport-card__title">
          {{ $t("linking_transport_card") }}
        </div>
        <div class="transport-card__description">
          <p>{{ $t("linking_transport_card_text1") }}</p>
          <p>{{ $t("linking_transport_card_text2") }}</p>
        </div>
      </div>
    </div>
    <img src="/content/cards_avtobys.png" alt="" class="transport-card__img" />
  </div>
</template>

<style lang="scss" scoped>
.transport-card {
  display: flex;
  align-items: center;
  height: 385px;
  margin-bottom: 60px;
  @media only screen and (max-width: 1300px) {
    height: 270px;
  }
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
    height: auto;
  }
  @media only screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
  &__content{
    max-width: 468px;
  }
  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 124.69%;
    margin-bottom: 32px;
    @media only screen and (max-width: 1300px) {
      font-size: 30px;
      margin-bottom: 16px;
    }
  }
  &__description {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    @media only screen and (max-width: 767px) {
      font-size: 16px;
    }
  }
  &__img {
    position: absolute;
    height: 385px;
    object-fit: scale-down;
    right: 0;
    @media only screen and (max-width: 1300px) {
      height: 270px;
    }
    @media only screen and (max-width: 991px) {
      position: relative;
      margin: 0 0 0 auto;
    }
    @media only screen and (max-width: 767px) {
      height: 155px;
    }
  }
}
</style>
