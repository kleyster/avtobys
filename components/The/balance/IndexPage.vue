<template>
  <div class="balance">
    <div class="container">
      <img src="logo.svg" alt="Avtobys" class="balance__logo" />
      <h2 class="text-center">{{ $t("balance_title") }}</h2>
      <div class="balance__block_orange">
        <h3>{{ $t("balance_subtitle") }}</h3>
        <div class="balance__row">
          <img src="icons/mobile_tenge.svg" alt="Balance" />
          <div class="balance__text">1. {{ $t("balance_text1") }}</div>
        </div>
        <div class="balance__row">
          <img src="icons/credit_card.svg" alt="Balance" />
          <div class="balance__text">2. {{ $t("balance_text2") }}</div>
        </div>
      </div>
      <div class="balance__block">
        {{ $t("balance_text3") }}
        <br /><br />
        {{ $t("balance_text4") }}
      </div>
      <img src="content/balance_man.png" class="balance__man_img" alt="" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useStorage } from "@vueuse/core";

const props = defineProps({
    lang: {
        type: String,
        default: 'ru'
    }
})
const route = useRoute();
const { locale } = useI18n();
const myLocale = useStorage("myLocale", "ru");

onMounted(() => {
  changeLanguage(props.lang);
});

const changeLanguage = (key) => {
  myLocale.value = key;
  locale.value = key;
};
</script>

<style lang="scss" scoped>
.balance {
  color: #0000af;
  background-color: white;
  min-height: 100vh;
  margin: 0;
  padding: 20px 0;
  &__logo {
    display: block;
    margin: 0 auto 20px;
  }
  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 20px;
  }
}
.balance__block_orange {
  background-color: #ffe9ae;
  border-radius: 15px;
  padding: 1rem;
  margin-top: 2rem;
}
h3 {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
}
.balance__row {
  display: flex;
  margin-top: 1.5rem;
  align-items: flex-start;
}
.balance__row img {
  margin-right: 1rem;
}
.balance__block {
  margin-top: 2rem;
}
.balance__man_img {
  width: 100%;
  max-width: 300px;
  display: block;
  margin: 20px auto;
}
</style>
