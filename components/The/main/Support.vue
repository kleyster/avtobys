<template>
  <div class="support">
    <!-- <div class="support__number">
      <img src="/icons/tel-black.svg" alt="" />
      <div>
        <a href="tel:555-666">555 - 666</a>
        <span>{{ $t("unified_number") }}</span>
      </div>
    </div> -->
    <div class="container-main">
      <div class="support__content">
        <div class="support__title text-48">{{ $t("support_service") }}</div>
        <div class="support__number mobile-number">
          <img src="/icons/tel-black.svg" alt="" />
          <div>
            <a href="tel:555-666">555 - 666</a>
            <span>{{ $t("unified_number") }}</span>
          </div>
        </div>
        <div class="support__table">
          <div class="head">
            <div class="th width-1">{{ $t("city") }}</div>
            <div class="th width-2">
              {{ $t("office_phone_number") }}
              <img src="/icons/WhatsApp.svg" alt="" />
              <span>{{ $t('whatsapp.first') }} <br />{{ $t('whatsapp.second') }}</span>
            </div>
            <div class="th width-3">{{ $t("office_address") }}</div>
            <div class="th width-4">{{ $t("office_working_hours") }}</div>
          </div>
          <div class="body">
            <div class="tr" v-for="(item, index) in list" :key="index">
              <div class="td width-1">
                <span>{{ item.city }}</span>
              </div>
              <div class="td width-2">
                <span>{{ item.tel_number }}</span>
              </div>
              <div class="td width-3">
                <span>{{ item.address }}</span>
              </div>
              <div class="td width-4">
                <span>{{ item.office_hours }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-content">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ selectedCity.city }}
              <span class="dropdown-toggle-icon"
                ><img src="/icons/down_blue.svg" alt=""
              /></span>
            </button>
            <ul class="dropdown-menu">
              <li v-for="(item, index) in list" :key="index">
                <button class="dropdown-item" @click="selectedCity = item">
                  {{ item.city }}
                </button>
              </li>
            </ul>
          </div>
          <div class="mobile-content_block">
            <div class="title">{{ selectedCity.city }}</div>
            <div class="item">
              <span>{{ $t("office_phone_number") }}</span>
              {{ selectedCity.tel_number }}
            </div>
            <div class="item">
              <span>{{ $t("office_address") }}</span>
              {{ selectedCity.address }}
            </div>
            <div class="item">
              <span>{{ $t("office_working_hours") }}</span>
              {{ selectedCity.office_hours }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const list = [
  {
    city: t("atyrau.name"),
    tel_number: "+7 771 002 61 55",
    address: t("atyrau.address"),
    office_hours: t("office_working_hours_text"),
  },
  {
    city: t("aksu.name"),
    tel_number: "+7 778 003 07 77",
    address: t("aksu.address"),
    office_hours: t("office_working_hours_text"),
  },
  {
    city: t("aktobe.name"),
    tel_number: "+7 713 252 51 01",
    address: t("aktobe.address"),
    office_hours: t("office_working_hours_text"),
  },
  {
    city: t("beyneu.name"),
    tel_number: "+7 705 393 02 02",
    address: t("beyneu.address"),
    office_hours: t("office_working_hours_text"),
  },
  {
    city: t("zhezkazgan.name"),
    tel_number: "+7 775 007 60 00",
    address: t("zhezkazgan.address"),
    office_hours: t("office_working_hours_text"),
  },
  {
    city: t("konaev.name"),
    tel_number: "+7 727 317 47 05",
    address: t("konaev.address"),
    office_hours: t("office_working_hours_text"),
  },
  {
    city: t("pavlodar.name"),
    tel_number: "+7 778 003 07 77",
    address: t("pavlodar.address"),
    office_hours: t("office_working_hours_text"),
  },
  {
    city: t("semey.name"),
    tel_number: "+7 722 244 55 48",
    address: t("semey.address"),
    office_hours: t("office_working_hours_text"),
  },
  {
    city: t("uralsk.name"),
    tel_number: "+7 777 504 44 44",
    address: t("uralsk.address"),
    office_hours: t("office_working_hours_text"),
  },
  {
    city: t("khromtau.name"),
    tel_number: "+7 713 252 51 01",
    address: t("khromtau.address"),
    office_hours: t("office_working_hours_text"),
  },
  {
    city: t("ekibastuz.name"),
    tel_number: "+ 7 778 003 07 77",
    address: t("ekibastuz.address"),
    office_hours: t("office_working_hours_text"),
  },
];

const selectedCity = ref(list[0]);
</script>

<style lang="scss" scoped>
.support {
  background: $blue-light;
  padding-top: 84px;
  @media only screen and (max-width: 767px) {
    padding-top: 0;
  }
  &__number {
    display: flex;
    align-items: center;
    background: #fff;
    max-width: 260px;
    width: 100%;
    box-shadow: -4px 0px 21px rgba(0, 0, 0, 0.02);
    border-radius: 15px 3px 0px 15px;
    padding: 22px 17px;
    margin: 0 0 40px auto;
    @media only screen and (max-width: 767px) {
      max-width: 100%;
      background: none;
      box-shadow: none;
      padding: 0;
      margin: 0;
      justify-content: center;
      align-items: flex-start;
      display: none;
    }
    img {
      width: 39px;
      margin-right: 10px;
      @media only screen and (max-width: 767px) {
        width: 20px;
        margin-top: 6px;
      }
    }
    a {
      color: $dark;
      font-weight: 700;
      font-size: 32px;
      line-height: 145.69%;
      letter-spacing: 0.005em;
      @media only screen and (max-width: 767px) {
        font-size: 24px;
      }
    }
    span {
      font-weight: 600;
      font-size: 20px;
      line-height: 145.69%;
      letter-spacing: 0.005em;
      color: #1c1d1d;
      display: block;
      @media only screen and (max-width: 767px) {
        font-size: 16px;
        color: #8ca8dd;
        line-height: 6px;
        margin-left: -17px;
      }
    }
  }
  &__title {
    text-align: center;
    color: $dark;
    margin-bottom: 32px;
    @media only screen and (max-width: 767px) {
      margin-bottom: 24px;
      font-size: 30px;
    }
  }
  // &__content{
  //   max-width: 1300px;
  //   width: 100%;
  //   margin: 0 auto;
  // }
  &__table {
    background: #fff;
    padding: 16px 16px 0;
    border-radius: 20px;
    @media only screen and (max-width: 767px) {
      display: none;
    }
    .head {
      display: flex;
      padding-bottom: 12px;
      .th {
        border-right: 1px solid rgba(196, 196, 196, 0.59);
        padding: 4px 20px 0;
        font-weight: 700;
        font-size: 16px;
        line-height: 145.69%;
        letter-spacing: 0.005em;
        &:last-child {
          border: none;
        }
        img {
          margin-left: 5px;
        }
        span {
          font-weight: 500;
          font-size: 13px;
          line-height: 126.9%;
          letter-spacing: 0.025em;
          color: #000000;
          display: block;
          margin-top: 5px;
        }
      }
    }
    .body {
      border-top: 1px solid rgba(196, 196, 196, 0.3);
      .tr {
        display: flex;
        align-items: stretch;
        &:nth-child(2n) {
          background: $blue-light;
        }
        .td {
          border-right: 1px solid rgba(196, 196, 196, 0.31);
          display: flex;
          align-items: center;
          span {
            padding: 12px 20px;
            display: block;
          }
          &:last-child {
            border: none;
          }
        }
      }
    }
  }
  .width {
    &-1 {
      width: 22%;
    }
    &-2 {
      width: 28%;
    }
    &-3 {
      width: 26%;
    }
    &-4 {
      width: 24%;
    }
  }
}
.mobile {
  &-number {
    display: none;
    @media only screen and (max-width: 767px) {
      display: flex;
      margin-bottom: 30px;
    }
  }
  &-content {
    display: none;
    @media only screen and (max-width: 767px) {
      display: block;
    }
    &_block {
      background: #fff;
      border-radius: 19px;
      padding: 24px 18px;
      .title {
        font-weight: 700;
        font-size: 18px;
        line-height: 145.69%;
        letter-spacing: 0.005em;
        color: #1f1f1f;
        margin-bottom: 14px;
      }
      .item {
        margin-bottom: 32px;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        span {
          font-weight: 600;
          margin-bottom: 6px;
          display: block;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
.dropdown {
  margin-bottom: 24px;
  &-toggle {
    width: 100%;
    height: 40px;
    border: 1.5px solid #3757aa;
    border-radius: 39px;
    background: transparent;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.005em;
    color: #000000;
    text-align: left;
    padding: 0 18px;
    overflow: hidden;
    &::after {
      display: none;
    }
    &-icon {
      position: absolute;
      right: 18px;
    }
  }
  &-menu {
    width: 100%;
    margin-top: 6px !important;
    background: #ffffff;
    border-radius: 14px;
    border: none;
    height: 237px;
    overflow-y: auto;
    padding: 0;
  }
  &-item {
    padding: 8px 22px;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.025em;
    color: #14133a;
    &:hover,
    &:focus {
      background: #ebf2ff;
    }
  }
}
.btn-check:checked + .btn,
.btn.active,
.btn.show,
.btn:first-child:active,
:not(.btn-check) + .btn:active {
  background: transparent;
  color: #000000;
  border-color: #3757aa;
  box-shadow: none;
}
</style>
