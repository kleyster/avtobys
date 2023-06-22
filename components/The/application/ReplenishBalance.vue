<template>
  <div class="container-main replenish-balance">
    <div class="replenish-balance__title">
      {{ $t("replenish_balance.first") }}
      <span>{{ $t("replenish_balance.second") }}</span>
      {{ $t("replenish_balance.third") }}
    </div>
    <div class="replenish-balance__description">
      {{ $t("replenish_balance_text") }}
    </div>
    <div class="row replenish-balance__content">
      <div class="col-md-8">
        <h3>{{ $t("applications") }}</h3>
        <div class="list">
          <div class="item" v-for="(item, index) in applications" :key="index">
            <img :src="item.img" alt="" />
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h3>{{ $t("terminals") }}</h3>
        <div class="list">
          <div class="item" v-for="(item, index) in terminals" :key="index">
            <img :src="item.img" alt="" />
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const applications = [
  {
    img: "/logos/kaspi.svg",
    name: "Kaspi.kz",
  },
  {
    img: "/logos/kassa24.svg",
    name: "Касса 24",
  },
  {
    img: "/logos/halyk.svg",
    name: "Halyk Bank",
  },
  {
    img: "/logos/evraziya.svg",
    name: "Евразийский Банк",
  },
  {
    img: "/logos/qiwi.svg",
    name: "Qiwi",
  },
  {
    img: "/logos/forte.svg",
    name: "Forte Bank",
  },
  {
    img: "/logos/yurt.svg",
    name: "Юрта кошелек",
  },
  {
    img: "/logos/aitu.svg",
    name: "aitu",
  },
];

const terminals = [
  {
    img: "/logos/kassa24.svg",
    name: "Касса 24",
  },
  {
    img: "/logos/qiwi.svg",
    name: "Qiwi",
  },
  {
    img: "/logos/rps.svg",
    name: "РПС",
  },
];
</script>

<style lang="scss" scoped>
.replenish-balance {
  color: $dark;
  margin-bottom: 100px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 124.69%;
    letter-spacing: 0.005em;
    margin-bottom: 32px;
    @media only screen and (max-width: 767px) {
      font-size: 30px;
      margin-bottom: 16px;
    }
    span {
      color: $yellow;
    }
  }
  &__description {
    max-width: 880px;
    width: 100%;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 40px;
    @media only screen and (max-width: 767px) {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }
  &__content {
    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 136.4%;
      margin-bottom: 40px;
      @media only screen and (max-width: 767px) {
        font-size: 18px;
        margin-bottom: 24px;
        text-align: center;
      }
    }
  }
}
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  @media only screen and (min-width: 1800px) {
    gap: 42px;
  }
  @media only screen and (max-width: 767px) {
    justify-content: center;
    margin-bottom: 24px;
  }
  .item {
    width: 178px;
    height: 210px;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.09);
    border-radius: 9px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    text-align: center;
    @media only screen and (min-width: 1800px) {
      width: 230px;
    }
    @media only screen and (max-width: 991px) {
      width: 100px;
      height: 118px;
    }
    img {
      height: 100px;
      object-fit: scale-down;
      object-position: center;
      margin-bottom: 20px;
      @media only screen and (max-width: 991px) {
        height: 56px;
        margin-bottom: 12px;
      }
    }
    span {
      width: 100%;
      display: block;
      font-weight: 500;
      font-size: 16px;
      line-height: 136.4%;
      color: $dark2;
      @media only screen and (max-width: 991px) {
        font-size: 9px;
      }
    }
  }
}
</style>
