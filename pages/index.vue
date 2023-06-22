<template>
  <div>
    <Header />
    <TheTopPage :content="topPage">
      <template #top_title
        >{{ $t("home_top_title.first") }} <br />
        {{ $t("home_top_title.second") }}
        <span>{{ $t("home_top_title.third") }}</span>
      </template>
    </TheTopPage>
    <TheMainPossibilities />
    <TheMainAdvantagesMobileAvtobus />
    <TheMainParallax />
    <TheMainTicket />
    <TheMainSafety />
    <TheMainRates />
    <TheMainSupport />
    <TheMap :content="content" />
    <TheMainPopularQuestions />
    <TheBottomPage :content="bottomPage" />
    <Footer />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

useSeoMeta({
  title: t("home_meta.title"),
  ogTitle: t("home_meta.title"),
  description: t("home_meta.description"),
  ogDescription: t("home_meta.description"),
  keywords: t("home_meta.keywords"),
});

const topPage = {
  title: t("home_top_title"),
  description: t("home_top_description"),
  img: "/main.png",
};
const bottomPage = {
  title: t("home_bottom_title"),
  description: t("home_bottom_description"),
  application: true,
};
const content = {
  title: t("we_are_available"),
  description: t("we_are_available_cities"),
  text: t("we_are_available_text"),
};
</script>
