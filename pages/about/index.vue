<template>
  <div>
    <Header />
    <TheAboutMain />
    <TheAboutOurLeaders />
    <TheBottomPage :content="bottomPage" />
    <Footer />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

useSeoMeta({
  title: t("about_meta.title"),
  ogTitle: t("about_meta.title"),
  description: t("about_meta.description"),
  ogDescription: t("about_meta.description"),
  keywords: t("about_meta.keywords")
});

const bottomPage = {
  title: t("download_avtobus.first"),
  title2: t("download_avtobus.second"),
  description: "",
  application: false,
  img: "/qr.svg",
};
</script>
