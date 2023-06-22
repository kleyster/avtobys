<template>
  <div>
    <Header />
    <TheForPartnersTopPage />
    <TheForPartnersElectronicPaymentSystem />
    <TheForPartnersAdvantages />
    <TheForPartnersConnectWithUs />
    <TheForPartnersPossibilities />
    <TheForPartnersDataSlider />
    <TheForPartnersValuesForOperator />
    <TheForPartnersValuesForAdministration />
    <TheForPartnersValuesForCarriers />
    <TheForPartnersGetPresentation />
    <TheForPartnersSlider />
    <TheForPartnersValidatorTypes />
    <TheForPartnersTariffsFormed />
    <TheMap :content="content" />
    <TheForPartnersBecomePartner />
    <Footer />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

useSeoMeta({
  title: t("for_partners_meta.title"),
  ogTitle: t("for_partners_meta.title"),
  description: t("for_partners_meta.description"),
  ogDescription: t("for_partners_meta.description"),
  keywords: t("for_partners_meta.keywords")
});

const content = {
  title: t('achievements'),
  description: t('achievements_text')
};
</script>