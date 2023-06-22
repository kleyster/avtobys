<template>
  <div class="operator">
    <div class="container-main">
      <div class="operator__title">{{ $t('operator_title') }}</div>
      <div class="operator__content">
        <ul>
          <li><b>{{ $t('operator[0].bold') }}</b> {{ $t('operator[0].regular') }}</li>
          <li><b>{{ $t('operator[1].bold') }}</b></li>
          <li><b>{{ $t('operator[2].bold') }}</b> {{ $t('operator[2].regular') }}</li>
        </ul>
        <ul>
          <li>
            <b>{{ $t('operator[3].bold') }}</b> {{ $t('operator[3].regular') }}
          </li>
          <li><b>{{ $t('operator[4].bold') }}</b> {{ $t('operator[4].regular') }}</li>
          <li><b>{{ $t('operator[5].bold') }}</b> {{ $t('operator[5].regular') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="scss" scoped>
.operator {
  background: linear-gradient(276.51deg, #0000af 6.72%, #040489 96.94%);
  color: #fff;
  padding: 76px 0;
  margin-bottom: 64px;
  @media only screen and (max-width: 767px){
    padding: 40px 0 12px;
    margin-bottom: 40px;
  }
  &__title {
    text-align: center;
    font-weight: 700;
    font-size: 36px;
    line-height: 145.69%;
    margin-bottom: 40px;
    letter-spacing: 0.005em;
    @media only screen and (min-width: 1840px){
      margin-bottom: 70px;
    }
    @media only screen and (max-width: 767px){
      font-size: 28px;
      margin-bottom: 16px;
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
       @media only screen and (max-width: 767px) {
        flex-wrap: wrap;
       }
    ul {
      width: calc(50% - 60px);
      padding-left:20px ;
         @media only screen and (max-width: 767px) {
          width: 100%;
         }
    }
    li {
      font-size: 19px;
      line-height: 23px;
      margin-bottom: 28px;
      min-height: 46px;
      list-style-type: disc;
      @media only screen and (max-width: 767px){
        min-height: auto;
      }
    }
    b {
      font-weight: 600;
    }
  }
}
</style>
