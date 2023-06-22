<template>
  <div class="container-main about-main">
    <div class="about-main__flex">
      <div class="about-main__content">
        <div class="about-main__item">
          <h2>Innoforce</h2>
          <p>
            {{ $t("about_text") }}
          </p>
        </div>
        <div class="about-main__item">
          <h3>{{ $t("mission") }}</h3>
          <p>{{ $t("mission_text") }}</p>
        </div>
        <div class="about-main__item">
          <h3>{{ $t("vision") }}</h3>
          <p>
            {{ $t("vision_text") }}
          </p>
        </div>
      </div>
      <div class="about-main__img">
        <img src="/content/about.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-main {
  margin-top: 60px;
  margin-bottom: 18px;
  @media only screen and (max-width: 991px) {
    margin-top: 30px;
  }
  @media only screen and (max-width: 767px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  &__flex{
    display: flex;
    justify-content: space-between;
     @media only screen and (max-width: 991px) {
      flex-wrap: wrap;
     }
  }
  &__content {
    max-width: 440px;
    @media only screen and (max-width: 991px) {
      order: 2;
    }
  }
  &__img {
    max-width: 680px;
    padding-left: 24px;
    @media only screen and (min-width: 1840px) {
      max-width: 801px;
    }
    @media only screen and (max-width: 991px) {
      order: 1;
      margin-bottom: 32px;
      padding-left: 0;
    }
  }
  &__item {
    margin-bottom: 46px;
    @media only screen and (max-width: 767px) {
      margin-bottom: 24px;
    }
    h2 {
      font-weight: 700;
      font-size: 40px;
      line-height: 107.19%;
      letter-spacing: 0.005em;
      color: $blue;
      margin-bottom: 32px;
      @media only screen and (max-width: 767px) {
        font-size: 36px;
        margin-bottom: 16px;
      }
    }
    h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 107.19%;
      letter-spacing: 0.005em;
      color: #1c1d1d;
      margin-bottom: 16px;
    }
    p {
      font-weight: 500;
      font-size: 20px;
      line-height: 131.4%;
      color: #1f1f1f;
      margin: 0;
      @media only screen and (max-width: 767px) {
        font-size: 16px;
      }
    }
  }
}
</style>
