<template>
  <div>
    <Header />
    <TheTopPage :content="topPage">
      <template #top_title> 
        <template v-if="locale !== 'ru'">
           <i18n-t keypath="application_top_title.first">
            <template #title>
              <span>Avtobys</span>
            </template>
          </i18n-t>
        </template>
        <template v-else>{{ $t("application_top_title.first") }}</template>
         <br />
        <i18n-t keypath="application_top_title.second">
            <template #title>
              <span>Avtobys</span>
            </template>
          </i18n-t>
      </template>
    </TheTopPage>
    <TheApplicationSlider />
    <TheApplicationPayments />
    <TheApplicationReplenishBalance />
    <TheApplicationTrackRoute />
    <TheApplicationLinkingTransportCard />
    <TheBottomPage :content="bottomPage" />
    <Footer />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

useSeoMeta({
  title: t("application_meta.title"),
  ogTitle: t("application_meta.title"),
  description: t("application_meta.description"),
  ogDescription: t("application_meta.description"),
  keywords: t("application_meta.keywords"),
});

const topPage = {
  title: t("application_top_title"),
  description: t("application_top_description"),
  img: "/application.png",
};
const bottomPage = {
  title: t("download_avtobus.first"),
  title2: t("download_avtobus.second"),
  description: "",
  application: false,
  img: "/qr.svg",
};
</script>
