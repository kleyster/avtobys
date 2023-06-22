<template>
  <div class="advantages container-main">
    <div class="advantages__title">{{ $t('advantages_title') }}</div>
    <div class="row">
      <div class="col-md-4 advantages__flex">
        <div class="advantages__item">
          <img src="/icons/icon1.svg" alt="" />
          <div class="advantages__item_content">
            <h5>{{ $t('advantages[0].title') }}</h5>
            <p>
              {{ $t('advantages[0].description') }}
            </p>
          </div>
        </div>
        <div class="advantages__item">
          <img src="/icons/icon2.svg" alt="" />
          <div class="advantages__item_content">
            <h5>{{ $t('advantages[1].title') }}</h5>
            <p>
               {{ $t('advantages[1].description') }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 advantages__flex">
        <div class="advantages__item">
          <img src="/icons/icon3.svg" alt="" />
          <div class="advantages__item_content">
            <h5>{{ $t('advantages[2].title') }}</h5>
            <p>
               {{ $t('advantages[2].description') }}
            </p>
          </div>
        </div>
        <div class="advantages__item">
          <img src="/icons/icon4.svg" alt="" />
          <div class="advantages__item_content">
            <h5>{{ $t('advantages[3].title') }}</h5>
            <p> {{ $t('advantages[3].description') }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 advantages__flex">
        <div class="advantages__item">
          <img src="/icons/icon5.svg" alt="" />
          <div class="advantages__item_content">
            <h5>{{ $t('advantages[4].title') }}</h5>
            <p>
              {{ $t('advantages[4].description') }}
            </p>
          </div>
        </div>
        <div class="advantages__item">
          <img src="/icons/icon6.svg" alt="" />
          <div class="advantages__item_content">
            <h5>{{ $t('advantages[5].title') }}</h5>
            <p>
               {{ $t('advantages[5].description') }}
            </p>
          </div>
        </div>
        <div class="advantages__item">
          <img src="/icons/icon7.svg" alt="" />
          <div class="advantages__item_content">
            <h5>{{ $t('advantages[6].title') }}</h5>
            <p>
               {{ $t('advantages[6].description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advantages {
  margin-bottom: 32px;
  @media only screen and (max-width: 767px){
    margin-bottom: 8px;
  }
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 145.69%;
    letter-spacing: 0.005em;
    color: #1c1d1d;
    margin-bottom: 40px;
    @media only screen and (max-width: 767px){
      font-size: 28px;
      margin-bottom: 24px;
    }
  }
  &__flex {
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
  }
  &__item {
    margin-bottom: 32px;
    display: flex;
    @media only screen and (max-width: 767px){
      flex-wrap: wrap;
    }
    &_content {
      color: #000;
    }
    img {
      width: 60px;
      min-width: 60px;
      height: 60px;
      margin-right: 24px;
      @media only screen and (max-width: 767px){
        margin-bottom: 20px;
      }
    }
    h5 {
      font-weight: 600;
      font-size: 18px;
      line-height: 130.69%;
      margin-bottom: 20px;
      @media only screen and (max-width: 767px){
        margin-bottom: 8px;
      }
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 130.19%;
      margin: 0;
      min-height: 63px;
      @media only screen and (max-width: 767px){
        min-height: auto;
      }
    }
  }
}
</style>
