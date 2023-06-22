<template>
  <div class="payments-slider">
    <div class="payments-slider__circle">
      <ul class="payments-slider__circle__list">
        <li
          v-for="(item, index) in list"
          :key="index"
          @click="selected = item.id"
          :class="{ '-active': selected == item.id }"
        >
          <span></span>
          {{ item.number }}. {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="container-main">
      <div class="payments-slider__item col-md-6 offset-md-6">
        <img :src="selectedItem.img" alt="" class="payments-slider__item_img" />
        <div>
          <div class="payments-slider__item_title">{{ selectedItem.name }}</div>
          <div class="payments-slider__item_description">
            {{ selectedItem.description }}
            <p v-if="selectedItem.sub_description !== undefined">
              {{ selectedItem.sub_description }}
            </p>
          </div>
          <div class="payments-slider__item_number">
            {{ selectedItem.number }}
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div
        class="payments-slider__item"
        v-for="(item, index) in list"
        :key="index"
      >
        <img :src="item.img" alt="" class="payments-slider__item_img" />
        <div>
          <div class="payments-slider__item_title">{{ item.name }}</div>
          <div class="payments-slider__item_description">
            {{ item.description }}
            <p v-if="item.sub_description !== undefined">
              {{ item.sub_description }}
            </p>
          </div>
          <div class="payments-slider__item_number">
            {{ item.number }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const selected = ref(1);

const list = [
  {
    id: 1,
    name: t("payments_slider[0].name"),
    description: t("payments_slider[0].description"),
    img: "/paymentList/phone1.png",
    number: "01",
  },
  {
    id: 2,
    name: t("payments_slider[1].name"),
    description: t("payments_slider[1].description"),
    img: "/paymentList/phone2.png",
    number: "02",
  },
  {
    id: 3,
    name: t("payments_slider[2].name"),
    description: t("payments_slider[2].description"),
    img: "/paymentList/phone3.png",
    number: "03",
  },
  {
    id: 4,
    name: t("payments_slider[3].name"),
    description: t("payments_slider[3].description"),
    sub_description: t("payments_slider[3].sub_description"),
    img: "/paymentList/phone4.png",
    number: "04",
  },
];

const selectedItem = ref(list[0]);

watch(
  () => selected.value,
  () => {
    selectedItem.value = list.find((item) => item.id == selected.value);
  }
);
</script>

<style lang="scss" scoped>
.payments-slider {
  display: flex;
  align-items: center;
  margin-bottom: 64px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
  &__circle {
    width: 355px;
    height: 773px;
    border: 5px solid #d0e3ff;
    border-radius: 0 100% 100% 0 / 0 50% 50% 0;
    margin-left: -5px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    @media only screen and (max-width: 1300px) {
      margin-left: -200px;
    }
    @media only screen and (max-width: 991px) {
      display: none;
    }
    &__list {
      position: absolute;
      left: 100%;
      li {
        font-weight: 500;
        font-size: 20px;
        line-height: 145.69%;
        letter-spacing: 0.005em;
        color: #7e7e7e;
        margin-bottom: 55px;
        display: flex;
        align-items: center;
        white-space: nowrap;
        position: relative;
        cursor: pointer;
        @media only screen and (max-width: 1300px) {
          font-size: 18px;
        }
        span {
          width: 16px;
          height: 16px;
          background: #d0e3ff;
          display: block;
          border-radius: 50%;
          margin-right: 30px;
          transition: 1s;
        }
        &:nth-child(1) {
          margin-left: -25px;
        }
        &:nth-child(2) {
          margin-left: -8px;
        }
        &:nth-child(3) {
          margin-left: -7px;
        }
        &:nth-child(4) {
          margin-left: -25px;
          margin-bottom: 0;
        }
        &.-active {
          span {
            background: #0000af;
            box-shadow: 0 0 1px 4px rgba(0, 0, 175, 0.27);
            transition: 1s;
          }
        }
      }
    }
  }
  &__item {
    display: flex;
    align-items: center;
    position: relative;
    @media only screen and (max-width: 991px) {
      display: block;
      padding: 0 20px;
    }
    &_img {
      max-width: 292px;
      width: 100%;
      margin-right: 45px;
      @media only screen and (max-width: 1300px) {
        margin-right: 25px;
        max-width: 220px;
      }
      @media only screen and (max-width: 991px) {
        max-width: 200px;
        min-width: 200px;
         margin: 0 0 24px 0;
      }
    }
    &_title {
      font-weight: 700;
      font-size: 24px;
      line-height: 145.69%;
      letter-spacing: 0.005em;
      color: $dark;
      margin-bottom: 32px;
      @media only screen and (max-width: 991px) {
        font-size: 18px;
        margin-bottom: 8px;
      }
    }
    &_description {
      font-weight: 500;
      font-size: 18px;
      line-height: 141.88%;
      color: $dark2;
      @media only screen and (max-width: 991px) {
        font-size: 16px;
      }
      p {
        margin: 20px 0 0 0;
        font-weight: 600;
      }
    }
    &_number {
      font-weight: 600;
      font-size: 228px;
      line-height: 1;
      letter-spacing: 0.005em;
      color: rgba(208, 227, 255, 0.34);
      position: absolute;
      bottom: 0;
      left: 265px;
      z-index: -1;
      @media only screen and (max-width: 1300px) {
        left: 185px;
      }
      @media only screen and (max-width: 991px) {
        display: none;
      }
    }
  }
  .container-main {
    position: absolute;
    left: 0;
    right: 0;
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
}
.mobile {
  display: none;
  overflow-x: auto;
  padding: 0 20px;
  @media only screen and (max-width: 991px) {
    display: flex;
  }
}
</style>
