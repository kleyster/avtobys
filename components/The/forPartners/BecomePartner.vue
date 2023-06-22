<template>
  <div class="connect">
    <div class="container-main">
      <div class="connect__title">{{ $t("become_partner") }}</div>
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
    },
    (error) => {
      console.log("FAILED...", error.text);
    }
  );
};

</script>

<style lang="scss" scoped>
.connect {
  color: #1f1f1f;
  margin-bottom: 64px;
  @media only screen and (max-width: 767px) {
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
        margin-bottom: 20px;
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
        border: 2px solid #d6d6d6;
        border-radius: 10px;
        font-weight: 500;
        font-size: 20px;
        padding: 0 20px;
        @media only screen and (max-width: 767px) {
          height: 40px;
          border-radius: 6px;
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
      background: #0021a5;
      padding: 15px 57px;
      border-radius: 10px;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #fff;
      margin-top: 8px;
      @media only screen and (max-width: 767px) {
        padding: 10px 37px;
        font-size: 16px;
        border-radius: 8px;
      }
    }
  }
}
.dropdown {
  &-toggle {
    background-color: transparent;
    border: 2px solid #d6d6d6;
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
     color: #1f1f1f;
    &:focus {
      background-color: transparent;
      border-color: #1f1f1f;
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
      color: #1f1f1f;
  }
}
</style>
