<template>
  <div class="safety">
    <div class="safety__orbit">
      <img src="/content/orbit.png" alt="" class="safety__orbit_img" />
      <div class="safety__orbit_icons">
        <div class="icon orbit">
          <img src="/icons/lock.svg" alt="" />
        </div>
        <div class="icon orbit">
          <img src="/icons/lock2.svg" alt="" />
        </div>
        <div class="icon orbit">
          <img src="/icons/key.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="container-main">
      <div class="safety__content col-md-5">
        <div class="safety__content_title">{{ $t("safety") }}</div>
        <div class="safety__content_description">
          <p>
            {{ $t("safety_text1") }}
          </p>
          <p>
            {{ $t("safety_text2") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  var orbit = gsap.utils.toArray(".orbit");
  gsap.to(orbit[0], {
    x: -20,
    y: 40,
    scrollTrigger: { trigger: orbit[0], scrub: !0 },
  }),
    gsap.to(orbit[1], {
      x: 20,
      y: 50,
      scrollTrigger: { trigger: orbit[1], scrub: !0 },
    }),
    gsap.to(orbit[2], {
      y: 50,
      scrollTrigger: { trigger: orbit[2], scrub: !0 },
    });
  gsap.registerPlugin(ScrollTrigger);
});
</script>

<style lang="scss" scoped>
.safety {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin-bottom: 8px;
  }
  .container-main {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 767px) {
      position: relative;
      top: auto;
      transform: auto;
      transform: translateY(0);
    }
  }
  &__orbit {
    position: relative;
    width: 660px;
    margin-left: -130px;
    @media only screen and (max-width: 991px) {
      width: 430px;
      margin-left: -200px;
    }
    @media only screen and (max-width: 767px) {
      margin-bottom: 24px;
    }
    &_img {
      width: 660px;
    }
    &_icons {
      .icon {
        position: absolute;
        @media only screen and (max-width: 991px) {
          width: 54px;
        }
        &:nth-child(1) {
          top: 140px;
          left: 176px;
          @media only screen and (max-width: 991px) {
            display: none;
          }
        }
        &:nth-child(2) {
          top: 40px;
          right: 25px;
        }
        &:nth-child(3) {
          bottom: 90px;
          right: 70px;
        }
      }
    }
  }
  &__content {
    &_title {
      font-weight: 700;
      font-size: 40px;
      line-height: 145.69%;
      letter-spacing: 0.005em;
      color: $dark;
      margin-bottom: 32px;
      @media only screen and (max-width: 991px) {
        font-size: 32px;
        margin-bottom: 16px;
      }
    }
    &_description {
      font-weight: 500;
      font-size: 18px;
      line-height: 133.4%;
      color: $dark2;
      @media only screen and (max-width: 991px) {
        font-size: 16px;
      }
      p {
        margin-bottom: 32px;
      }
    }
  }
}
</style>
