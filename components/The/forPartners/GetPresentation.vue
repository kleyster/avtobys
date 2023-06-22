<template>
  <div class="container-main presentation">
    <div class="col-md-6">
       <div class="presentation__title mb">{{ $t("get_presentation") }}</div>
      <div class="presentation__video">
        <!-- <video poster="/content/video.png" ref="videoPlayer">
          <source src="/content/video.mp4" type="video/mp4" />
        </video> -->
        <img :src="show ? 'video.png' : 'video.gif'" alt="">
        <button class="play" @click="playVideo" v-if="show">
          <img src="/icons/play.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="col-md-5 offset-md-1">
      <div class="presentation__title dt">{{ $t("get_presentation") }}</div>
      <form ref="form" @submit.prevent="sendEmail" class="form">
        <div class="form-item">
          <label>{{ $t('name') }}</label>
           <input type="text" name="from_name" :value="reset" />
        </div>
        <div class="form-item">
          <label for="">{{ $t('phone_number') }}</label>
          <input type="tel" name="number" :value="reset" />
        </div>
        <div class="form-item">
          <label>{{ $t('email') }}</label>
          <input type="email" name="email" :value="reset" />
        </div>
        <button type="submit">{{ $t('send') }}</button>
      </form>
    </div>
      <UiModal :isShow="isShow"  @close="isShow = false"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const videoPlayer = ref(null);
const show = ref(true);

const playVideo = () => {
  // videoPlayer.value.play();
  show.value = false;
};

const role = ref("Перевозчиком");
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
      role.value = 'Перевозчиком'
    },
    (error) => {
      console.log("FAILED...", error.text);
    }
  );
};
</script>

<style lang="scss" scoped>
.presentation {
  display: flex;
  align-items: center;
  margin-bottom: 128px;
  @media only screen and (max-width: 767px){
    flex-wrap: wrap;
    margin-bottom: 60px;
  }
  &__video {
    max-width: 492px;
    width: 100%;
    position: relative;
    @media only screen and (max-width: 767px){
      margin-bottom: 24px;
    }
    video {
      width: 100%;
    }
    .play {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 124.69%;
    color: #1c1d1d;
    margin-bottom: 32px;
    @media only screen and (max-width: 767px){
      font-size: 32px;
      margin-bottom: 24px;
      display: none;
    }
  }
  .form {
    max-width: 407px;
    width: 100%;
    &-item {
      margin-bottom: 16px;
      label {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 20px;
        color: #1f1f1f;
        @media only screen and (max-width: 767px){
          font-size: 18px;
          margin-bottom: 16px;
        }
      }
      input {
        height: 56px;
        width: 100%;
        border: 1px solid #6c6c6c;
        border-radius: 10px;
        padding: 0 16px;
        @media only screen and (max-width: 767px){
          height: 40px;
          border-radius: 6px;
        }
      }
    }
    button {
      width: 231px;
      height: 54px;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      background: #0000af;
      border-radius: 10px;
      margin-top: 40px;
    }
  }
}
.mb{
  display: none;
  @media only screen and (max-width: 767px){
    display: block;
  }
}
</style>
