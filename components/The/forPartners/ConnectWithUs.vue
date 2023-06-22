<template>
  <div class="connect">
    <div class="container-main">
      <div class="connect__title">{{ $t("contact_us") }}</div>
      <form ref="form" @submit.prevent="sendEmail" class="form">
        <div class="form-item">
          <label for="">{{ $t("name") }}</label>
          <input type="text" name="from_name" :value="reset" />
        </div>
        <div class="form-item">
          <label for="">{{ $t("phone_number") }}</label>
          <input type="tel" name="number" :value="reset" />
        </div>
        <div class="form-item">
          <label for="">{{ $t("email") }}</label>
          <input type="email" name="email" :value="reset" />
        </div>
        <div class="form-item">
          <label for="">{{ $t("i_am") }}</label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ role }}
            </button>
            <ul class="dropdown-menu">
              <li
                class="dropdown-item"
                @click="role = $t('carrier')"
                :class="{ '-active': role == $t('carrier') }"
              >
                {{ $t("carrier") }}
              </li>
              <li
                class="dropdown-item"
                @click="role = $t('akimat_representative')"
                :class="{ '-active': role == $t('akimat_representative') }"
              >
                {{ $t("akimat_representative") }}
              </li>
              <li
                class="dropdown-item"
                @click="role = $t('legal_entity')"
                :class="{ '-active': role == $t('legal_entity') }"
              >
                {{ $t("legal_entity") }}
              </li>
            </ul>
          </div>
          <input type="text" name="i_am" :value="role" style="display: none" />
        </div>
        <div class="form-item comment">
          <label for="">{{ $t("comment") }}</label>
          <textarea name="comment" :value="reset" />
        </div>
        <button class="form-button" type="submit">
          {{ $t("send") }}
        </button>
      </form>
    </div>
    <UiModal :isShow="isShow"  @close="isShow = false"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const role = ref(t('carrier'));
const form = ref(null);
const isShow = ref(false);
const reset = ref(null)

const sendEmail = () => {
  let user_id = "aH8tlEieZ0Mhl8z53";
  let service_id = "service_mwntxiv";
  let template_id = "template_opge0xk";

  emailjs.sendForm(service_id, template_id, form.value, user_id).then(
    (result) => {
      isShow.value = true;
      reset.value = null;
      role.value = t('carrier')
    },
    (error) => {
      console.log("FAILED...", error.text);
    }
  );
};

</script>
<style lang="scss" scoped>
.connect {
  background: linear-gradient(276.51deg, #0000af 6.72%, #040489 96.94%);
  padding: 64px 24px;
  color: #fff;
  margin-bottom: 64px;
  @media only screen and (max-width: 767px) {
    padding: 40px 0px;
    margin-bottom: 40px;
  }
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 124.69%;
    letter-spacing: 0.005em;
    margin-bottom: 16px;
    @media only screen and (max-width: 767px) {
      font-size: 32px;
      margin-bottom: 24px;
    }
  }
  .form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-item {
      width: calc(33% - 60px);
      margin-bottom: 32px;
      @media only screen and (max-width: 1300px) {
        width: calc(33% - 20px);
      }
      @media only screen and (max-width: 767px) {
        width: 100%;
        margin-bottom: 24px;
      }
      label {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 20px;
        @media only screen and (max-width: 767px) {
          font-size: 18px;
          margin-bottom: 16px;
        }
      }
      input,
      textarea {
        width: 100%;
        height: 50px;
        border: 2px solid #ffffff;
        border-radius: 10px;
        color: #fff;
        font-weight: 500;
        font-size: 20px;
        padding: 0 20px;
        @media only screen and (max-width: 767px) {
          height: 40px;
        }
      }
      &.comment {
        width: 100%;
      }
      textarea {
        height: 176px;
        width: 100%;
        padding: 24px 33px;
        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }
    &-button {
      background: #fff;
      padding: 15px 57px;
      border-radius: 10px;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #0021a5;
      margin-top: 8px;
      @media only screen and (max-width: 767px) {
        padding: 8px 37px;
        font-size: 16px;
        border-radius: 8px;
      }
    }
  }
}
.dropdown {
  &-toggle {
    background-color: transparent;
    color: #fff;
    border: 2px solid #ffffff;
    border-radius: 10px;
    width: 100%;
    height: 50px;
    font-size: 18px;
    padding: 0 20px;
    background-image: url("/icons/down_white.svg");
    background-position: right 20px center;
    background-size: 20px 12px;
    background-repeat: no-repeat;
    text-align: left;
    font-weight: 500;
    font-size: 20px;
    &:focus {
      background-color: transparent;
      border-color: #fff;
    }
    &::after {
      display: none;
    }
  }
  &-menu {
    width: 100%;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.22);
    font-weight: 500;
    font-size: 20px;
    padding: 0;
    border-radius: 0;
    margin-top: 6px !important;
  }
  &-item {
    padding: 12px 18px;
    cursor: pointer;
    &.-active {
      background: rgba(0, 33, 165, 0.3);
    }
  }
}
.dropdown-item.active,
.dropdown-item:active {
  color: inherit;
  background-color: transparent !important;
}
</style>
