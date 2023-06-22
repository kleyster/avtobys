<template>
  <div class="container-main administration">
    <div class="administration__title">{{ $t('akimat_title') }}</div>
    <div class="administration__flex">
      <div class="administration__content col-md-6">
        <ul>
          <li><b>{{ $t('administration[0].bold') }}</b> {{ $t('administration[0].regular') }}</li>
          <li>
            <b>{{ $t('administration[1].bold') }}</b> {{ $t('administration[1].regular') }}
          </li>
          <li><b>{{ $t('administration[2].bold') }}</b> {{ $t('administration[2].regular') }}</li>
          <li>
            <b>{{ $t('administration[3].bold') }}</b> {{ $t('administration[3].regular') }}
          </li>
          <li><b>{{ $t('administration[4].bold') }}</b> {{ $t('administration[4].regular') }}</li>
          <li><b>{{ $t('administration[5].bold') }}</b> {{ $t('administration[5].regular') }}</li>
          <li><b>{{ $t('administration[6].bold') }}</b> {{ $t('administration[6].regular') }}</li>
          <li><b>{{ $t('administration[7].bold') }}</b> {{ $t('administration[7].regular') }}</li>
          <li><b>{{ $t('administration[8].bold') }}</b> {{ $t('administration[8].regular') }}</li>
        </ul>
      </div>
      <div class="col-md-6 administration__img">
        <img src="/content/pen.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="scss" scoped>
.administration {
  margin-bottom: 96px;
  @media only screen and (max-width: 767px){
    margin-bottom: 12px;
  }
  &__title {
    text-align: center;
    font-weight: 700;
    font-size: 36px;
    line-height: 145.69%;
    letter-spacing: 0.005em;
    margin-bottom: 40px;
    color: #1c1d1d;
    @media only screen and (max-width: 767px){
      font-size: 28px;
      margin-bottom: 16px;
    }
  }
  &__flex {
    display: flex;
    align-items: center;
       @media only screen and (max-width: 767px) {
        flex-wrap: wrap;
       }
  }
  &__content {
    li {
      font-size: 19px;
      line-height: 23px;
      margin-bottom: 32px;
      color: #141a33;
      padding-left: 52px;
      position: relative;
      @media only screen and (max-width: 767px){
        margin-bottom: 24px;
      }
      b {
        font-weight: 600;
      }
      &::before {
        content: "";
        background-image: url("/icons/wifi.svg");
        background-repeat: no-repeat;
        background-position: center;
        width: 24px;
        height: 24px;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
  &__img{
    text-align: center;
    @media only screen and (max-width: 767px){
      display: none;
    }
  }
}
</style>
