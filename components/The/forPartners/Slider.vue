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
    name: t("partner_payments_slider[0].name"),
    img: "/paymentList/phone1.png",
    number: "01",
  },
  {
    id: 2,
    name: t("partner_payments_slider[1].name"),
    img: "/paymentList/phone2.png",
    number: "02",
  },
  {
    id: 3,
    name: t("partner_payments_slider[2].name"),
    img: "/paymentList/phone3.png",
    number: "03",
  },
  {
    id: 4,
    name: t("partner_payments_slider[3].name"),
    img: "/paymentList/phone4.png",
    number: "04",
  },
  {
    id: 5,
    name: t("partner_payments_slider[4].name"),
    img: "/paymentList/phone5.png",
    number: "05",
  },
  {
    id: 6,
    name: t("partner_payments_slider[5].name"),
    img: "/paymentList/phone6.png",
    number: "06",
  },
  {
    id: 7,
    name: t("partner_payments_slider[6].name"),
    img: "/paymentList/phone7.png",
    number: "07",
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
  margin-bottom: 128px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
  &__circle {
    width: 767px;
    height: 767px;
    border: 5px solid #d0e3ff;
    border-radius: 50%;
    margin-left: -580px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    @media only screen and (max-width: 1300px) {
      margin-left: -700px;
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
        margin-bottom: 30px;
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
          margin-left: -48px;
        }
        &:nth-child(2) {
          margin-left: -24px;
        }
        &:nth-child(3) {
          margin-left: -10px;
        }
        &:nth-child(4) {
          margin-left: -5px;
        }
        &:nth-child(5) {
          margin-left: -10px;
        }
        &:nth-child(6) {
          margin-left: -24px;
        }
        &:nth-child(7) {
          margin-left: -50px;
          margin-bottom: 0;
          @media only screen and (max-width: 1300px) {
            margin-left: -45px;
          }
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
  @media only screen and (max-width: 991px) {
    display: flex;
    padding: 0 20px;
  }
}
</style>
