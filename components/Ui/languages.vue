<template>
  <div class="dropdown">
    <button
      class="dropdown-toggle text-md"
      type="button"
      id="dropdown-language"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ localTitle }}
      <span class="navbar-toggler-icon"
        ><img src="/icons/down.svg" alt=""
      /></span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdown-language">
      <li>
        <button
          class="dropdown-item text-md"
          v-if="localTitle !== 'қазақша'"
          @click="setLocale('kz')"
        >
          қазақша
        </button>
      </li>
      <li>
        <button
          class="dropdown-item text-md"
          v-if="localTitle !== 'русский'"
          @click="setLocale('ru')"
        >
          русский
        </button>
      </li>
      <li>
        <button
          class="dropdown-item text-md"
          v-if="localTitle !== 'english'"
          @click="setLocale('en')"
        >
          english
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useStorage } from "@vueuse/core";
import { useRouter } from "vue-router"

const router = useRouter();
const { locale } = useI18n();
const localTitle = ref("");
const myLocale = useStorage("myLocale", "ru");

const getLocale = (key) => {
  if (key === "ru") {
    localTitle.value = "русский";
  }
  if (key === "kz") {
    localTitle.value = "қазақша";
  }
  if (key === "en") {
    localTitle.value = "english";
  }
};
if (process.client) {
  if (localStorage.myLocale) {
    getLocale(localStorage.myLocale);
  } else {
    localTitle.value = "русский";
  }
}
const setLocale = (key) => {
  myLocale.value = key;
  locale.value = key;
  getLocale(key);
  router.go(0);
};
</script>

<style lang="scss" scoped>
.dropdown {
  &-toggle {
    &::after {
      display: none;
    }
    @media only screen and (max-width: 991px) {
      font-size: 18px;
    }
  }
  &-menu {
    padding: 0;
  }
  &-item {
    font-weight: 400;
    padding: 8px 16px;
    &:hover,
    &:focus {
      background: none;
      color: $blue;
    }
    @media only screen and (max-width: 991px) {
      font-size: 18px;
    }
  }
}
</style>
