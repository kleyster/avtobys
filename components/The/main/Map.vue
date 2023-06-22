<template>
  <div class="map">
    <div class="container-main">
      <div class="col-md-10 offset-md-1">
        <div class="map__title">{{ $t("we_are_available") }}</div>
        <div class="map__description text-md">
          <p v-html="$t('we_are_available_cities')"></p>
          <p class="dt"> {{ $t("we_are_available_text") }}</p>
        </div>
        <div class="col-md-10 offset-md-1">
          <img src="/content/map.png" alt="" />
        </div>
        <div class="map__description text-md">
          <p class="mb">{{ $t("we_are_available_text") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.map {
  background: $blue-light;
  padding-bottom: 64px;
  margin-bottom: 64px;
  @media only screen and (max-width: 767px) {
    padding-bottom: 10px;
    margin-bottom: 40px;
  }
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: $dark;
    margin-bottom: 32px;
    @media only screen and (max-width: 767px) {
      font-size: 30px;
      text-align: center;
      margin-bottom: 16px;
    }
  }
  &__description {
    line-height: 20px;
    color: $dark2;
    margin-bottom: 30px;
    p {
      margin: 0;
      @media only screen and (max-width: 767px) {
        br {
          display: none;
        }
      }
    }
    @media only screen and (max-width: 767px) {
      text-align: center;
      font-size: 16px;
    }
  }
}
.mb {
  margin-top: 24px !important;
}
</style>
