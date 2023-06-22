<template>
  <div class="container-main tariffs">
    <div class="tariffs__title">{{ $t("fees_commissions") }}</div>
    <div class="tariffs__content">
      <div class="col-md-3 tariffs__content_block">
        <ul class="tariffs__menu">
          <li
            v-for="(item, index) in list"
            :key="index"
            @click="selected = item.id"
            :class="{ '-active': selected == item.id }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="mobile">
        <div class="dropdown">
          <button
            class="dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ selectedItem.name }}
            <span class="icon"
              ><img src="/icons/down_dropdown.svg" alt=""
            /></span>
          </button>
          <ul class="dropdown-menu">
            <li
              v-for="(item, index) in list"
              :key="index"
              @click="selected = item.id"
              :class="{ '-active': selected == item.id }"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8 offset-md-1 tariffs__list">
        <div class="tariffs__list_head">
          <div class="tariffs__list_item">{{ $t("service_name") }}</div>
          <div class="tariffs__list_item">{{ $t("total_fee_payer") }}</div>
        </div>
        <div class="tariffs__list_body">
          <div
            class="tariffs__list_flex"
            v-for="(item, index) in selectedItem.value"
            :key="index"
          >
            <div class="tariffs__list_item">{{ item.name }}</div>
            <div class="tariffs__list_item">{{ item.commission }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tariffs__subtitle">{{ $t("tariffs_subtitle") }}</div>
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
    name: t("tariffs_list[0].name"),
    value: [
      {
        name: t("tariffs_list[0].value[0].name"),
        commission: "3%",
      },
      {
        name: t("tariffs_list[0].value[1].name"),
        commission: "3%",
      },
      {
        name: t("tariffs_list[0].value[2].name"),
        commission: "3%",
      },
      {
        name: t("tariffs_list[0].value[3].name"),
        commission: "3%",
      },
      {
        name: t("tariffs_list[0].value[4].name"),
        commission: "3%",
      },
    ],
  },
  {
    id: 2,
    name: t("tariffs_list[1].name"),
    value: [
      {
        name: t("tariffs_list[1].value[0].name"),
        commission: "",
      },
    ],
  },
  {
    id: 3,
    name: t("tariffs_list[2].name"),
    value: [
      {
        name: t("tariffs_list[2].value[0].name"),
        commission: "2%",
      },
      {
        name: t("tariffs_list[2].value[1].name"),
        commission: "2%",
      },
      {
        name: t("tariffs_list[2].value[2].name"),
        commission: "0%",
      },
      {
        name: t("tariffs_list[2].value[3].name"),
        commission: "0%",
      },
    ],
  },
  {
    id: 4,
    name: t("tariffs_list[3].name"),
    value: [
      {
        name: t("tariffs_list[3].value[0].name"),
        commission: "0%",
      },
            {
        name: t("tariffs_list[3].value[1].name"),
        commission: "0%",
      },
                  {
        name: t("tariffs_list[3].value[2].name"),
        commission: "0%",
      },
                  {
        name: t("tariffs_list[3].value[3].name"),
        commission: "0%",
      },
                  {
        name: t("tariffs_list[3].value[4].name"),
        commission: "0%",
      },
                  {
        name: t("tariffs_list[3].value[5].name"),
        commission: "0%",
      },
                  {
        name: t("tariffs_list[3].value[6].name"),
        commission: "2,5%",
      },
                  {
        name: t("tariffs_list[3].value[7].name"),
        commission: "0%",
      },
                  {
        name: t("tariffs_list[3].value[8].name"),
        commission: "2%",
      },
                  {
        name: t("tariffs_list[3].value[9].name"),
        commission: "0%",
      },
                  {
        name: t("tariffs_list[3].value[10].name"),
        commission: "0%",
      },
                  {
        name: t("tariffs_list[3].value[11].name"),
        commission: "0%",
      },
                  {
        name: t("tariffs_list[3].value[12].name"),
        commission: "0%",
      },
                  {
        name: t("tariffs_list[3].value[13].name"),
        commission: "0%",
      },
                  {
        name: t("tariffs_list[3].value[14].name"),
        commission: "0%",
      },
    ],
  },
  {
    id: 5,
    name: t("tariffs_list[4].name"),
    value: [
      {
        name: t("tariffs_list[4].value[0].name"),
        commission: "0%",
      },
       {
        name: t("tariffs_list[4].value[1].name"),
        commission: "0%",
      },
             {
        name: t("tariffs_list[4].value[2].name"),
        commission: "0%",
      },
             {
        name: t("tariffs_list[4].value[3].name"),
        commission: "0%",
      },
             {
        name: t("tariffs_list[4].value[4].name"),
        commission: "0%",
      },
             {
        name: t("tariffs_list[4].value[5].name"),
        commission: "0%",
      },
             {
        name: t("tariffs_list[4].value[6].name"),
        commission: "2,5%",
      },
             {
        name: t("tariffs_list[4].value[7].name"),
        commission: "2,5%",
      },
             {
        name: t("tariffs_list[4].value[8].name"),
        commission: "0%",
      },
             {
        name: t("tariffs_list[4].value[9].name"),
        commission: "0%",
      },
             {
        name: t("tariffs_list[4].value[10].name"),
        commission: "0%",
      },
             {
        name: t("tariffs_list[4].value[11].name"),
        commission: "0%",
      },
             {
        name: t("tariffs_list[4].value[12].name"),
        commission: "0%",
      },
    ],
  },
  {
    id: 6,
    name: t("tariffs_list[5].name"),
    value: [
      {
        name: t("tariffs_list[5].value[0].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[5].value[1].name"),
        commission: "2%",
      },
                  {
        name: t("tariffs_list[5].value[2].name"),
        commission: "2%",
      },
                  {
        name: t("tariffs_list[5].value[3].name"),
        commission: "5%",
      },
    ],
  },
  {
    id: 7,
    name: t("tariffs_list[6].name"),
    value: [
      {
        name: t("tariffs_list[6].value[0].name"),
        commission: "2%",
      },
      {
        name: t("tariffs_list[6].value[1].name"),
        commission: "2%",
      },
            {
        name: t("tariffs_list[6].value[2].name"),
        commission: "3%",
      },
            {
        name: t("tariffs_list[6].value[3].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[6].value[4].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[6].value[5].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[6].value[6].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[6].value[7].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[6].value[8].name"),
        commission: "3%",
      },
            {
        name: t("tariffs_list[6].value[9].name"),
        commission: "5%",
      },
    ],
  },
  {
    id: 8,
    name: t("tariffs_list[7].name"),
    value: [
      {
        name: t("tariffs_list[7].value[0].name"),
        commission: "1%",
      },
            {
        name: t("tariffs_list[7].value[1].name"),
        commission: "1%",
      },
                  {
        name: t("tariffs_list[7].value[2].name"),
        commission: "0%",
      },
                  {
        name: t("tariffs_list[7].value[3].name"),
        commission: "1%",
      },
                  {
        name: t("tariffs_list[7].value[4].name"),
        commission: "1%",
      },
    ],
  },
  {
    id: 9,
    name: t("tariffs_list[8].name"),
    value: [
      {
        name: t("tariffs_list[8].value[0].name"),
        commission: "",
      },
    ]
  },
    {
    id: 10,
    name: t("tariffs_list[9].name"),
    value: [
      {
        name: t("tariffs_list[9].value[0].name"),
        commission: "0%",
      },
      {
        name: t("tariffs_list[9].value[1].name"),
        commission: "0%",
      },
      {
        name: t("tariffs_list[9].value[2].name"),
        commission: "0%",
      },
      {
        name: t("tariffs_list[9].value[3].name"),
        commission: "0%",
      },
      {
        name: t("tariffs_list[9].value[4].name"),
        commission: "0%",
      },
    ]
  },
      {
    id: 11,
    name: t("tariffs_list[10].name"),
    value: [
      {
        name: t("tariffs_list[10].value[0].name"),
        commission: "",
      },
    ]
  },
      {
    id: 12,
    name: t("tariffs_list[11].name"),
    value: [
      {
        name: t("tariffs_list[11].value[0].name"),
        commission: "",
      },
    ]
  },
      {
    id: 13,
    name: t("tariffs_list[12].name"),
    value: [
      {
        name: t("tariffs_list[12].value[0].name"),
        commission: "5%",
      },
      {
        name: t("tariffs_list[12].value[1].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[12].value[2].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[12].value[3].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[12].value[4].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[12].value[5].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[12].value[6].name"),
        commission: "0%",
      },
            {
        name: t("tariffs_list[12].value[7].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[12].value[8].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[12].value[9].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[12].value[10].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[12].value[11].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[12].value[12].name"),
        commission: "5%",
      },
            {
        name: t("tariffs_list[12].value[13].name"),
        commission: "5%",
      },
    ]
  },
        {
    id: 14,
    name: t("tariffs_list[13].name"),
    value: [
      {
        name: t("tariffs_list[13].value[0].name"),
        commission: "0%",
      },
      {
        name: t("tariffs_list[13].value[1].name"),
        commission: "0%",
      },
      {
        name: t("tariffs_list[13].value[2].name"),
        commission: "0%",
      },
      {
        name: t("tariffs_list[13].value[3].name"),
        commission: "1%",
      },
      {
        name: t("tariffs_list[13].value[4].name"),
        commission: "0%",
      },
      {
        name: t("tariffs_list[13].value[5].name"),
        commission: "1%",
      },
    ]
  }
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
.tariffs {
  margin-bottom: 55px;
  color: #141a33;
  @media only screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 124.69%;
    letter-spacing: 0.005em;
    margin-bottom: 80px;
    color: #000000;
    @media only screen and (max-width: 767px) {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }
  &__content {
    display: flex;
    @media only screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
    &_block {
      @media only screen and (max-width: 767px) {
        display: none;
      }
    }
  }
  &__menu {
    li {
      font-weight: 600;
      font-size: 18px;
      line-height: 124.69%;
      letter-spacing: 0.005em;
      margin-bottom: 40px;
      cursor: pointer;
      &.-active {
        color: #3a3acf;
      }
    }
  }
  &__list {
    &_head {
      border-bottom: 1px solid $blue;
      padding: 0 20px 22px;
      display: flex;
      align-items: center;
      width: 100%;
      font-weight: 700;
      font-size: 18px;
      line-height: 124.69%;
      letter-spacing: 0.005em;
      margin-bottom: 11px;
      @media only screen and (max-width: 767px) {
        font-size: 16px;
        padding: 0 12px 10px;
        margin: 0;
      }
    }
    &_item {
      width: 50%;
      &:last-child {
        @media only screen and (max-width: 767px) {
          padding-left: 8px;
        }
      }
    }
    &_flex {
      display: flex;
      padding: 11px 20px;
      @media only screen and (max-width: 767px) {
        padding: 8px 12px;
      }
    }
    &_body {
      font-weight: 500;
      font-size: 18px;
      line-height: 124.69%;
      letter-spacing: 0.005em;
      @media only screen and (max-width: 767px) {
        font-size: 15px;
      }
    }
  }
  &__subtitle {
    font-weight: 500;
    font-size: 24px;
    line-height: 124.69%;
    letter-spacing: 0.005em;
    color: #1f1f1f;
    margin-top: 70px;
  }
}
.mobile {
  display: none;
  @media only screen and (max-width: 767px) {
    display: block;
    width: 100%;
  }
}
.dropdown {
  margin-bottom: 18px;
  &-toggle {
    width: 100%;
    text-align: left;
    color: #3a3acf;
    font-weight: 700;
    font-size: 18px;
    line-height: 124.69%;
    letter-spacing: 0.005em;
    justify-content: space-between;
    &::after {
      display: none;
    }
    &.show {
      .icon {
        transform: rotate(180deg);
      }
    }
  }
  &-menu {
    width: 100%;
    padding: 6px 0;
    li {
      padding: 6px 12px;
      font-size: 18px;
    }
  }
}
</style>
