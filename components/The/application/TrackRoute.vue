<template>
  <div class="track-route">
    <div>
      <div class="track-route__title">
        {{ $t("track_route.first") }} <br />
        {{ $t("track_route.second") }}
      </div>
      <div class="track-route__list">
        <div class="track-route__list_item">
          <div class="top">
            <img src="/icons/next.svg" alt="" />
            <span
              >{{ $t("plan_trip.first") }} <br />
              {{ $t("plan_trip.second") }}</span
            >
          </div>
          <img src="/content/treking1.png" alt="" class="img" />
        </div>
        <div class="track-route__list_item">
          <div class="top">
            <img src="/icons/tenge.svg" alt="" />
            <span
              >{{ $t("pay_route.first") }} <br />
              {{ $t("pay_route.second") }}</span
            >
          </div>
          <img src="/content/treking2.png" alt="" class="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.track-route {
  display: flex;
  justify-content: center;
  margin: 0 auto 64px;
  padding: 0 24px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 142.19%;
    letter-spacing: 0.015em;
    color: $dark;
    margin-bottom: 40px;
    @media only screen and (max-width: 767px) {
      font-size: 26px;
      margin-bottom: 24px;
    }
  }
  &__list {
    display: flex;
    @media only screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
    &_item {
      margin-right: 76px;
      @media only screen and (max-width: 991px) {
        margin-right: 30px;
      }
      @media only screen and (max-width: 767px) {
        margin-right: 0;
        margin-bottom: 24px;
      }
      .top {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        @media only screen and (max-width: 767px) {
          margin-bottom: 24px;
        }
        img {
          width: 82px;
          min-width: 82px;
          height: 82px;
          object-fit: scale-down;
          margin-right: 20px;
          @media only screen and (max-width: 767px) {
            width: 60px;
            min-width: 60px;
            height: 60px;
            margin-right: 10px;
          }
        }
        span {
          font-weight: 600;
          font-size: 20px;
          line-height: 124%;
          color: $dark2;
          @media only screen and (max-width: 991px) {
            font-size: 16px;
          }
        }
      }
      .img {
        max-width: 300px;
        @media only screen and (max-width: 767px) {
          max-width: 200px;
        }
      }
    }
  }
}
</style>
