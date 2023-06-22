<template>
  <div>
    <Header />
    <TheTopPage :content="topPage">
      <template #top_title
        >{{ $t("payments_top_title.first") }} <br />
        {{ $t("payments_top_title.second") }}
      </template>
      <template #top_description
        >{{ $t("payments_top_description.first") }} <br />
        {{ $t("payments_top_description.second") }}
      </template>
    </TheTopPage>
    <ThePaymentsBanners />
    <ThePaymentsPaymentMethods />
    <ThePaymentsSafety />
    <ThePaymentsSlider />
    <ThePaymentsTariffsCommissions />
    <TheBottomPage :content="bottomPage" />
    <Footer />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

useSeoMeta({
  title: t("payments_meta.title"),
  ogTitle: t("payments_meta.title"),
  description: t("payments_meta.description"),
  ogDescription: t("payments_meta.description"),
  keywords: t("payments_meta.keywords"),
});

const topPage = {
  title: t("payments_top_title"),
  img: "/payments.png",
};
const bottomPage = {
   title: t("download_avtobus.first"),
  title2: t("download_avtobus.second"),
  description: "",
  application: false,
  img: "/qr.svg",
};
</script>
