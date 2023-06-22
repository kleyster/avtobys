<template>
  <header class="header">
    <div class="mobile-top">
      <button class="mobile-toggle" @click="openMenu = true">
        <img src="/icons/menu.svg" alt="" />
      </button>
      <nuxt-link to="/" class="mobile-logo"
        ><img src="/logo.svg" alt=""
      /></nuxt-link>
    </div>
    <div class="header__content" :class="{ '-open': openMenu }">
      <button class="mobile-close" @click="openMenu = false">
        <img src="/icons/close.svg" alt="" />
      </button>
      <div class="header__content_top">
        <nuxt-link to="/" class="header__logo"
          ><img src="/logo.svg" alt=""
        /></nuxt-link>
        <ul class="header__menu text-md">
          <li>
            <nuxt-link to="/application">{{ $t("application") }}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/wallet">{{ $t("wallet") }}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">{{ $t("about") }}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/questions-and-answers">{{
              $t("questions_answers")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/for-partners">{{ $t("for_partners") }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="header__content_bottom">
        <!-- <div class="header__tel text-md">
          <a href="tel:555-666"><img src="/icons/tel.svg" alt="" /> 555-666</a>
        </div> -->
        <UiLanguages />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const openMenu = ref(false);
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 48px;
  color: $black;
  @media only screen and (max-width: 1200px) {
    padding: 16px 24px;
  }
  @media only screen and (max-width: 991px) {
    padding: 28px 24px;
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 991px) {
      position: fixed;
      top: 0;
      left: -100%;
      bottom: 0;
      width: 100%;
      background: #fff;
      padding: 30px;
      height: 100%;
      min-height: 100vh;
      z-index: 11;
      display: block;
      overflow: hidden;
      transition: all 0.5s ease-in-out;
    }
    &.-open {
      @media only screen and (max-width: 991px) {
        transition: all 0.5s ease-in-out;
        left: 0;
      }
    }
    &_top {
      display: flex;
      @media only screen and (max-width: 991px) {
        display: block;
      }
    }
    &_bottom {
      display: flex;
      align-items: center;
      @media only screen and (max-width: 991px) {
        display: block;
      }
    }
  }
  &__logo {
    margin-right: 70px;
    @media only screen and (max-width: 1200px) {
      margin-right: 30px;
    }
    @media only screen and (max-width: 991px) {
      margin-right: 0px;
    }
  }
  &__menu {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 991px) {
      display: block;
      padding-top: 16px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding-bottom: 4px;
      margin-bottom: 16px;
      margin-top: 16px;
      font-size: 18px;
    }
    li {
      margin-right: 45px;
      @media only screen and (max-width: 1200px) {
        margin-right: 15px;
      }
      @media only screen and (max-width: 991px) {
        margin: 0 0 12px 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    a {
      white-space: nowrap;
      color: #000;
      &.router-link-active.router-link-exact-active {
        color: $blue;
      }
    }
  }
  &__tel {
    margin-right: 46px;
    @media only screen and (max-width: 1200px) {
      margin-right: 20px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 18px;
      margin: 0 0 16px 0;
    }
    a {
      color: $blue;
      white-space: nowrap;
      img {
        margin-right: 12px;
        @media only screen and (max-width: 1200px) {
          margin-right: 6px;
        }
      }
    }
  }
}
.mobile {
  &-top {
    display: none;
    width: 100%;
    position: relative;
    text-align: center;
    @media only screen and (max-width: 991px) {
      display: block;
    }
  }
  &-close {
    position: absolute;
    top: 30px;
    right: 30px;
    display: none;
    @media only screen and (max-width: 991px) {
      display: block;
    }
  }
  &-toggle {
    padding: 6px;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
