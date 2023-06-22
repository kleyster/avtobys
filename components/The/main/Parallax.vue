<template>
  <div class="parallax">
    <div class="container-main">
      <div class="parallax__content">
        <div class="phone">
          <img src="/content/phone1.png" alt="" />
        </div>
        <div class="phone">
          <img src="/content/phone_group.png" alt="" />
        </div>
        <div class="phone">
          <img src="/content/phone4.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted} from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const phone = gsap.utils.toArray(".phone");
  gsap.to(phone[0], {
    y: -100,
    scrollTrigger: { trigger: phone[0], scrub: !0 },
  }),
    gsap.to(phone[1], {
      y: -80,
      scrollTrigger: { trigger: phone[1], scrub: !0 },
    }),
    gsap.to(phone[2], {
      y: -100,
      scrollTrigger: { trigger: phone[2], scrub: !0 },
    });
});
</script>

<style lang="scss" scoped>
.parallax {
  background: $blue;
  overflow: hidden;
  -webkit-clip-path: polygon(0 20%, 100% 0%, 100% 80%, 0% 100%);
  clip-path: polygon(0 20%, 100% 0%, 100% 80%, 0% 100%);
  height: 800px;
  @media only screen and (max-width: 1300px) {
    height: 560px;
  }
  @media only screen and (max-width: 991px) {
    height: 380px;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 767px) {
    -webkit-clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%);
    clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%);
    height: 355px;
  }
  &__content {
    display: flex;
    justify-content: center;
    gap: 80px;
    @media only screen and (max-width: 1130px) {
      gap: 40px;
    }
  }
}
.phone {
  &:nth-child(1){
    margin-top: 80px;
    @media only screen and (max-width: 767px){
      margin-top: 0;
    }
  }
  @media only screen and (max-width: 767px) {
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(3) {
      display: none;
    }
  }
  img {
    max-width: 400px;
    width: 100%;
    @media only screen and (max-width: 1300px) {
      width: 300px;
    }
    @media only screen and (max-width: 991px) {
      width: 200px;
    }
  }
}
</style>
