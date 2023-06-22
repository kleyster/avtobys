<template>
  <div class="container-main payment">
    <div class="payment__title">
      <template v-if="locale !== 'ru'">
        <i18n-t keypath="electronic_system.first">
          <template #title>
            <span>Avtobys</span>
          </template>
        </i18n-t>
      </template>
      <template v-else>{{ $t("electronic_system.first") }}</template>
      <br />
      <i18n-t keypath="electronic_system.second">
        <template #title>
          <span>Avtobys</span>
        </template>
      </i18n-t>
    </div>
    <div class="payment__list">
      <div class="payment__item" v-for="(item, index) in list" :key="index">
        <div class="payment__item_content col-md-5">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <p v-if="item.sub_description" class="mt-30">
            {{ item.sub_description }}
          </p>
        </div>
        <div class="payment__item_img col-md-5">
          <img :src="item.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const list = [
  {
    title: t("electronic_system_list[0].title"),
    description: t("electronic_system_list[0].description"),
    img: "/content/illustration1.png",
  },
  {
    title: t("electronic_system_list[1].title"),
    description: t("electronic_system_list[1].description"),
    img: "/content/illustration2.png",
  },
  {
    title: t("electronic_system_list[2].title"),
    description: t("electronic_system_list[2].description"),
    img: "/content/illustration3.png",
  },
  {
    title: t("electronic_system_list[3].title"),
    description: t("electronic_system_list[3].description.first"),
    sub_description: t("electronic_system_list[3].description.second"),
    img: "/content/illustration4.png",
  },
];
</script>
<style lang="scss" scoped>
.payment {
  margin-bottom: 64px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 0;
  }
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 145.69%;
    letter-spacing: 0.005em;
    color: #1f1f1f;
    margin-bottom: 40px;
    @media only screen and (max-width: 767px) {
      font-size: 28px;
      margin-bottom: 24px;
    }
    span {
      color: $blue;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 38px;
    @media only screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
    &_content {
      @media only screen and (max-width: 767px) {
        margin-bottom: 24px;
      }
      h3 {
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        color: #0021a5;
        margin-bottom: 32px;
        @media only screen and (max-width: 767px) {
          font-size: 20px;
          margin-bottom: 16px;
        }
      }
      p {
        font-weight: 500;
        font-size: 19px;
        line-height: 23px;
        margin-bottom: 0;
        color: #1f1f1f;
        @media only screen and (max-width: 767px) {
          font-size: 16px;
        }
      }
    }
    &_img {
      img {
        height: 310px;
        object-fit: scale-down;
        object-position: left;
        @media only screen and (max-width: 767px) {
          height: auto;
        }
      }
    }
    &:nth-child(2n) {
      .payment__item_content {
        order: 2;
        @media only screen and (max-width: 767px) {
          order: 1;
        }
      }
      .payment__item_img {
        order: 1;
        @media only screen and (max-width: 767px) {
          order: 2;
        }
      }
    }
    &:nth-child(4) {
      img {
        height: 410px;
        @media only screen and (max-width: 767px) {
          height: auto;
        }
      }
    }
  }
}
.mt-30 {
  margin-top: 30px;
}
</style>
