<template>
  <div class="faq">
    <div class="container-main">
      <div class="col-md-7">
        <div class="faq__title">{{ $t("frequently_asked_questions") }}</div>
        <UiAccordion :list="limit" />
        <button
          class="button"
          @click="showFullList = !showFullList"
          v-if="list.length > 8"
        >
          <span v-if="!showFullList">{{ $t("view_all_questions") }}</span>
          <span v-else>{{ $t("hide_all_questions") }}</span>
        </button>
      </div>
    </div>
    <img src="/content/faq.svg" alt="" class="faq__img" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const list = [
  {
    question: t("popular_questions[0].question"),
    first: t("popular_questions[0].answer.first"),
    second: t("popular_questions[0].answer.second"),
    third: t("popular_questions[0].answer.third"),
    fourth: t("popular_questions[0].answer.fourth"),
    fifth: t("popular_questions[0].answer.fifth"),
    sixth: t("popular_questions[0].answer.sixth"),
  },
  {
    question: t("popular_questions[1].question"),
    first: t("popular_questions[1].answer.first"),
    second: t("popular_questions[1].answer.second"),
    third: t("popular_questions[1].answer.third"),
    fourth: t("popular_questions[1].answer.fourth"),
    fifth: t("popular_questions[1].answer.fifth"),
    sixth: t("popular_questions[1].answer.sixth"),
  },
  {
    question: t("popular_questions[2].question"),
    first: t("popular_questions[2].answer.first"),
    second: t("popular_questions[2].answer.second"),
    third: t("popular_questions[2].answer.third"),
  },
    {
    question: t("popular_questions[3].question"),
    first: t("popular_questions[3].answer.first"),
    second: t("popular_questions[3].answer.second"),
    third: t("popular_questions[3].answer.third"),
    fourth: t("popular_questions[3].answer.fourth"),
    fifth: t("popular_questions[3].answer.fifth"),
  },
    {
    question: t("popular_questions[4].question"),
    first: t("popular_questions[4].answer.first"),
    second: t("popular_questions[4].answer.second"),
    third: t("popular_questions[4].answer.third"),
    fourth: t("popular_questions[4].answer.fourth"),
    fifth: t("popular_questions[4].answer.fifth"),
  },
    {
    question: t("popular_questions[5].question"),
    first: t("popular_questions[5].answer.first"),
    second: t("popular_questions[5].answer.second"),
    third: t("popular_questions[5].answer.third"),
    fourth: t("popular_questions[5].answer.fourth"),
    fifth: t("popular_questions[5].answer.fifth"),
    sixth: t("popular_questions[5].answer.sixth"),
  },
    {
    question: t("popular_questions[6].question"),
    first: t("popular_questions[6].answer.first"),
  },
    {
    question: t("popular_questions[7].question"),
    first: t("popular_questions[7].answer.first"),
    second: t("popular_questions[7].answer.second"),
    third: t("popular_questions[7].answer.third"),
    fourth: t("popular_questions[7].answer.fourth"),
  },
    {
    question: t("popular_questions[8].question"),
    first: t("popular_questions[8].answer.first"),
  },
    {
    question: t("popular_questions[9].question"),
    first: t("popular_questions[9].answer.first"),
    second: t("popular_questions[9].answer.second"),
    third: t("popular_questions[9].answer.third"),
    fourth: t("popular_questions[9].answer.fourth"),
  },
];

const limit = ref(list.slice(0, 8));

const showFullList = ref(false);

watch(
  () => showFullList.value,
  () => {
    if (showFullList.value) {
      limit.value = list;
    } else {
      limit.value = list.slice(0, 8);
    }
  }
);
</script>

<style lang="scss" scoped>
.faq {
  color: $dark2;
  position: relative;
  overflow: hidden;
  margin-bottom: 64px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 133.4%;
    margin-bottom: 32px;
    @media only screen and (max-width: 767px) {
      font-size: 30px;
      margin-bottom: 16px;
    }
  }
  &__img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 100%;
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
}

.button {
  font-weight: 700;
  font-size: 15px;
  line-height: 124.69%;
  letter-spacing: 0.005em;
  color: #ffffff;
  padding: 11px 20px;
  background: $blue;
  border-radius: 10px;
  margin-top: 14px;
  @media only screen and (max-width: 767px) {
    margin: 14px auto 0;
  }
}
</style>
