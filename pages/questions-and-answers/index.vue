<template>
  <div>
    <Header />
    <div class="faq container-main">
      <div class="faq__title">{{ $t("questions_answers") }}</div>
      <div class="faq__content">
        <div class="faq__search">
          <form @submit.prevent="getSearch" class="faq__search">
            <input
              type="text"
              :placeholder="$t('looking_for')"
              @keydown="autocompleteSearch"
              v-model="search"
            />
            <button class="search" type="submit">
              <span>{{ $t("find") }}</span
              ><img src="/icons/search.svg" alt="" />
            </button>
            <span class="close" v-if="isDelete" @click="deleteText">
              <img src="/icons/close_dark.svg" alt="" />
            </span>
          </form>
        </div>
        <div
          class="faq__search_menu"
          v-if="openDropdown"
          v-click-outside="resetAttributes"
        >
          <p v-if="searchList.length == 0">
            {{ $t("nothing_found") }}
          </p>
          <ul v-else>
            <li
              v-for="(item, index) in searchList"
              :key="index"
              @click="selectedQuestion(item)"
            >
              {{ item.question }}
            </li>
          </ul>
        </div>
      </div>
      <div class="row faq__content" v-if="!resultSearch">
        <div class="col-md-3 faq__menu">
          <ul>
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
        <div class="col-md-8 offset-md-1">
          <UiAccordion
            :list="selectedItem.value"
            :selectedIndex="selectedIndex"
          />
        </div>
      </div>
      <div class="faq__result" v-else>
        <div class="title">
          {{ $t("found_query") }} {{ searchList.length }} {{ $t("results") }}:
        </div>
        <div class="list">
          <div
            class="item"
            v-for="(item, index) in searchList"
            :key="index"
            @click="selectedQuestion(item)"
          >
            <div class="question">
              <span>{{ index + 1 }}.</span>
              {{ item.question }}
            </div>
            <div class="answer" v-html="item.answer"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

useSeoMeta({
  title: t("questions_answers_meta.title"),
  ogTitle: t("questions_answers_meta.title"),
  description: t("questions_answers_meta.description"),
  ogDescription: t("questions_answers_meta.description"),
  keywords: t("questions_answers_meta.keywords"),
});

const list = [
  {
    id: 1,
    name: t("faq[0].name"),
    value: [
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
    ],
  },
  {
    id: 2,
    name: t("faq[1].name"),
    value: [
      {
        question: t("faq[1].value[0].question"),
        first: t("faq[1].value[0].answer.first"),
        second: t("faq[1].value[0].answer.second"),
        third: t("faq[1].value[0].answer.third"),
        fourth: t("faq[1].value[0].answer.fourth"),
        fifth: t("faq[1].value[0].answer.fifth"),
      },
      {
        question: t("faq[1].value[1].question"),
        first: t("faq[1].value[1].answer"),
      },
      {
        question: t("faq[1].value[2].question"),
        first: t("faq[1].value[2].answer"),
      },
      {
        question: t("faq[1].value[3].question"),
        first: t("faq[1].value[3].answer"),
      },
      {
        question: t("faq[1].value[4].question"),
        first: t("faq[1].value[4].answer"),
      },
      {
        question: t("faq[1].value[5].question"),
        first: t("faq[1].value[5].answer"),
      },
      {
        question: t("faq[1].value[6].question"),
        first: t("faq[1].value[6].answer.first"),
        second: t("faq[1].value[6].answer.second"),
        third: t("faq[1].value[6].answer.third"),
        fourth: t("faq[1].value[6].answer.fourth"),
        fifth: t("faq[1].value[6].answer.fifth"),
      },
      {
        question: t("faq[1].value[7].question"),
        first: t("faq[1].value[7].answer"),
      },
      {
        question: t("faq[1].value[8].question"),
        first: t("faq[1].value[8].answer"),
      },
      {
        question: t("faq[1].value[9].question"),
        first: t("faq[1].value[9].answer.first"),
        second: t("faq[1].value[9].answer.second"),
        third: t("faq[1].value[9].answer.third"),
        fourth: t("faq[1].value[9].answer.fourth"),
        fifth: t("faq[1].value[9].answer.fifth"),
        sixth: t("faq[1].value[9].answer.sixth"),
      },
      {
        question: t("faq[1].value[10].question"),
        first: t("faq[1].value[10].answer"),
      },
      {
        question: t("faq[1].value[11].question"),
        first: t("faq[1].value[11].answer"),
      },
      {
        question: t("faq[1].value[12].question"),
        first: t("faq[1].value[12].answer"),
      },
    ],
  },
  {
    id: 3,
    name: t("faq[2].name"),
    value: [
      {
        question: t("faq[2].value[0].question"),
        first: t("faq[2].value[0].answer"),
      },
      {
        question: t("faq[2].value[1].question"),
        first: t("faq[2].value[1].answer.first"),
        second: t("faq[2].value[1].answer.second"),
        third: t("faq[2].value[1].answer.third"),
        fourth: t("faq[2].value[1].answer.fourth"),
        fifth: t("faq[2].value[1].answer.fifth"),
        sixth: t("faq[2].value[1].answer.sixth"),
        seventh: t("faq[2].value[1].answer.seventh"),
        eighth: t("faq[2].value[1].answer.eighth"),

        first1: t("faq[2].value[1].answer2.first"),
        second1: t("faq[2].value[1].answer2.second"),
        third1: t("faq[2].value[1].answer2.third"),
        fourth1: t("faq[2].value[1].answer2.fourth"),
        fifth1: t("faq[2].value[1].answer2.fifth"),
        sixth1: t("faq[2].value[1].answer2.sixth"),
        seventh1: t("faq[2].value[1].answer2.seventh"),

        first2: t("faq[2].value[1].answer3.first"),
        second2: t("faq[2].value[1].answer3.second"),
        third2: t("faq[2].value[1].answer3.third"),
        fourth2: t("faq[2].value[1].answer3.fourth"),
        fifth2: t("faq[2].value[1].answer3.fifth"),
        sixth2: t("faq[2].value[1].answer3.sixth"),
        seventh2: t("faq[2].value[1].answer3.seventh"),
      },
      {
        question: t("faq[2].value[2].question"),
        first: t("faq[2].value[2].answer.first"),
        second: t("faq[2].value[2].answer.second"),
        third: t("faq[2].value[2].answer.third"),
        fourth: t("faq[2].value[2].answer.fourth"),
      },
      {
        question: t("faq[2].value[3].question"),
        first: t("faq[2].value[3].answer"),
      },
      {
        question: t("faq[2].value[4].question"),
        first: t("faq[2].value[4].answer.first"),
        second: t("faq[2].value[4].answer.second"),
        third: t("faq[2].value[4].answer.third"),
        fourth: t("faq[2].value[4].answer.fourth"),
        fifth: t("faq[2].value[4].answer.fifth"),
      },
      {
        question: t("faq[2].value[5].question"),
        first: t("faq[2].value[5].answer"),
      },
      {
        question: t("faq[2].value[6].question"),
        first: t("faq[2].value[6].answer"),
      },
      {
        question: t("faq[2].value[7].question"),
        first: t("faq[2].value[7].answer"),
      },
      {
        question: t("faq[2].value[8].question"),
        first: t("faq[2].value[8].answer"),
      },
      {
        question: t("faq[2].value[9].question"),
        first: t("faq[2].value[9].answer.first"),
        second: t("faq[2].value[9].answer.second"),
        third: t("faq[2].value[9].answer.third"),
        fourth: t("faq[2].value[9].answer.fourth"),
        fifth: t("faq[2].value[9].answer.fifth"),
        sixth: t("faq[2].value[9].answer.sixth"),
        seventh: t("faq[2].value[9].answer.seventh"),
        eighth: t("faq[2].value[9].answer.eighth"),
      },
      {
        question: t("faq[2].value[10].question"),
        first: t("faq[2].value[10].answer"),
      },
      {
        question: t("faq[2].value[11].question"),
        first: t("faq[2].value[11].answer"),
      },
      {
        question: t("faq[2].value[12].question"),
        first: t("faq[2].value[12].answer"),
      },
    ],
  },
  {
    id: 4,
    name: t("faq[3].name"),
    value: [
      {
        question: t("faq[3].value[0].question"),
        first: t("faq[3].value[0].answer.first"),
      },
      {
        question: t("faq[3].value[1].question"),
        first: t("faq[3].value[1].answer.first"),
      },
      {
        question: t("faq[3].value[2].question"),
        first: t("faq[3].value[2].answer.first"),
      },
      {
        question: t("faq[3].value[3].question"),
        first: t("faq[3].value[3].answer.first"),
      },
      {
        question: t("faq[3].value[4].question"),
        first: t("faq[3].value[4].answer.first"),
      },
      {
        question: t("faq[3].value[5].question"),
        first: t("faq[3].value[5].answer.first"),
      },
      {
        question: t("faq[3].value[6].question"),
        first: t("faq[3].value[6].answer.first"),
      },
      {
        question: t("faq[3].value[7].question"),
        first: t("faq[3].value[7].answer.first"),
      },
      {
        question: t("faq[3].value[8].question"),
        first: t("faq[3].value[8].answer.first"),
      },
      {
        question: t("faq[3].value[9].question"),
        first: t("faq[3].value[9].answer.first"),
      },
    ],
  },
  {
    id: 5,
    name: t("faq[4].name"),
    value: [
      {
        question: t("faq[4].value[0].question"),
        first: t("faq[4].value[0].answer"),
      },
      {
        question: t("faq[4].value[1].question"),
        first: t("faq[4].value[1].answer"),
      },
      {
        question: t("faq[4].value[2].question"),
        first: t("faq[4].value[2].answer"),
      },
      {
        question: t("faq[4].value[3].question"),
        first: t("faq[4].value[3].answer"),
      },
      {
        question: t("faq[4].value[4].question"),
        first: t("faq[4].value[4].answer"),
      },
      {
        question: t("faq[4].value[5].question"),
        first: t("faq[4].value[5].answer"),
      },
      {
        question: t("faq[4].value[6].question"),
        first: t("faq[4].value[6].answer"),
      },
      {
        question: t("faq[4].value[7].question"),
        first: t("faq[4].value[7].answer"),
      },
      {
        question: t("faq[4].value[8].question"),
        first: t("faq[4].value[8].answer"),
      },
      {
        question: t("faq[4].value[9].question"),
        first: t("faq[4].value[9].answer"),
      },
      {
        question: t("faq[4].value[10].question"),
        first: t("faq[4].value[10].answer"),
      },
      {
        question: t("faq[4].value[11].question"),
        first: t("faq[4].value[11].answer"),
      },
    ],
  },
];
const selected = ref(1);
const selectedItem = ref(list[0]);

watch(
  () => selected.value,
  () => {
    selectedItem.value = list.find((item) => item.id == selected.value);
  }
);

const search = ref();
const isDelete = ref(false);

watch(
  () => search.value,
  () => {
    if (search.value.length >= 1) {
      isDelete.value = true;
      searchItem();
    } else {
      openDropdown.value = false;
      resultSearch.value = false;
      isDelete.value = false;
    }
  }
);

const deleteText = () => {
  search.value = "";
  searchList.value = [];
  resultSearch.value = false;
};

const openDropdown = ref(false);
const autocompleteSearch = () => {
  openDropdown.value = true;
};

const searchList = ref([]);

const searchItem = () => {
  let array = [];
  for (let item of list) {
    array.push(...item.value);
  }
  searchList.value = array.filter((data) =>
    data.question.toLowerCase().includes(search.value.toLowerCase())
  );
};

const selectedIndex = ref();

const selectedQuestion = (item) => {
  openDropdown.value = false;
  resultSearch.value = false;
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].value.length; j++) {
      if (list[i].value[j].question == item.question) {
        selected.value = list[i].id;
        selectedIndex.value = list[i].value.findIndex(
          (i) => i.question == item.question
        );
      }
    }
  }
};

const resultSearch = ref(false);
const getSearch = () => {
  resultSearch.value = true;
  openDropdown.value = false;
};

const resetAttributes = () => {
  openDropdown.value = false;
};
</script>

<style lang="scss" scoped>
.faq {
  margin-top: 60px;
  margin-bottom: 80px;
  @media only screen and (max-width: 767px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  &__title {
    font-weight: 700;
    font-size: 59px;
    line-height: 107.19%;
    letter-spacing: 0.005em;
    color: #000000;
    margin-bottom: 40px;
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
  &__menu {
    @media only screen and (max-width: 767px) {
      display: none;
    }
    li {
      font-weight: 600;
      font-size: 18px;
      line-height: 124.69%;
      letter-spacing: 0.005em;
      margin-bottom: 40px;
      color: #141a33;
      cursor: pointer;
      &.-active {
        color: $blue;
      }
    }
  }
  &__content {
    position: relative;
    margin-bottom: 40px;
  }
  &__search {
    position: relative;
    display: flex;
    width: 100%;
    input {
      width: calc(100% - 165px);
      height: 54px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 175, 0.39);
      border-radius: 10px 0 0 10px;
      padding: 0 70px 0 34px;
      font-size: 18px;
      &::placeholder {
        color: #141a33;
      }
      @media only screen and (max-width: 767px) {
        width: calc(100% - 30px);
        height: 38px;
        padding: 0 40px 0 16px;
        font-size: 16px;
      }
    }
    .search {
      width: 174px;
      height: 54px;
      background: $blue;
      border-radius: 10px;
      color: #fff;
      font-weight: 700;
      font-size: 18px;
      line-height: 124.69%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      img {
        display: none;
      }
      @media only screen and (max-width: 767px) {
        width: 38px;
        height: 38px;
        img {
          display: block;
        }
        span {
          display: none;
        }
      }
    }
    .close {
      position: absolute;
      right: 190px;
      height: 54px;
      width: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media only screen and (max-width: 767px) {
        right: 45px;
        height: 38px;
      }
    }
    &_menu {
      background: #ffffff;
      border: 0.5px solid rgba(0, 0, 175, 0.39);
      border-radius: 10px;
      margin-top: 10px;
      overflow: hidden;
      position: absolute;
      z-index: 2;
      width: 100%;
      li {
        font-weight: 700;
        font-size: 16px;
        line-height: 124.69%;
        letter-spacing: 0.005em;
        color: #1f1f1f;
        padding: 15px 34px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        cursor: pointer;
        @media only screen and (max-width: 767px) {
          font-size: 15px;
          padding: 15px 15px;
        }
        &:hover {
          background: #d0e3ff;
          color: #3a3acf;
        }
        &:last-child {
          border: none;
        }
      }
      p {
        padding: 15px 34px;
        margin: 0;
        font-weight: 500;
        font-size: 16px;
        line-height: 124.69%;
        letter-spacing: 0.005em;
        color: #141a33;
      }
    }
  }
  &__result {
    color: #141a33;
    .title {
      font-weight: 500;
      font-size: 20px;
      line-height: 124.69%;
      letter-spacing: 0.005em;
      margin-bottom: 40px;
      padding: 0 34px;
      @media only screen and (max-width: 767px) {
        padding: 0;
        font-size: 16px;
        margin-bottom: 24px;
      }
    }
    .item {
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      padding: 0 45px;
      margin-bottom: 20px;
      cursor: pointer;
      @media only screen and (max-width: 767px) {
        padding: 0;
      }
      .question {
        font-weight: 700;
        font-size: 16px;
        line-height: 124.69%;
        margin-bottom: 15px;
        display: flex;
        @media only screen and (max-width: 767px) {
          margin-bottom: 8px;
        }
        span {
          display: block;
          margin-right: 4px;
        }
      }
      .answer {
        padding: 0 14px;
        margin-bottom: 20px;
        font-size: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
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
