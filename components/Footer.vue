<template>
  <footer class="footer">
    <div class="container-main">
      <div class="col-md-10 offset-md-1 footer__content">
        <div>
          <nuxt-link to="/" class="footer__logo"
            ><img src="/logo.svg" alt=""
          /></nuxt-link>
          <div class="footer__contacts">
            <p>
              Email: <a href="mailto:avtobys@gmail.com">avtobys@gmail.com</a>
            </p>
            <p>
              {{ $t("contacts") }}
              <a href="tel:+7 7172 56 77 54">+7 7172 56 77 54</a>
            </p>
          </div>
          <a href="https://avtobys.kz/rules/" target="_blank" class="footer__contract_offer">{{
            $t("offer_agreement")
          }}</a>
        </div>
        <div class="footer__social">
          <p>
            {{ $t("social_text.first") }} <br />
            {{ $t("social_text.second") }} <br />
            {{ $t("social_text.third") }}
          </p>
          <div class="footer__social_list">
            <a href="https://avtobys.kz/rules/" target="_blank"
              ><img src="/icons/telegram.svg" alt=""
            /></a>
            <a href="https://www.instagram.com/avtobyskz/" target="_blank"
              ><img src="/icons/instagram.svg" alt=""
            /></a>
            <a href="https://www.facebook.com/avtobyskz" target="_blank"
              ><img src="/icons/facebook.svg" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 80px 0;
  border-top: 1px solid #dfdfdf;
  @media only screen and (max-width: 767px) {
    padding: 40px 0;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 767px) {
      display: block;
    }
  }
  &__logo {
    display: block;
    margin-bottom: 35px;
    width: 91px;
  }
  &__contacts {
    margin-bottom: 35px;
    p {
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;
      color: $grey-dark;
      a {
        color: $grey-dark;
      }
    }
  }
  &__contract_offer {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: $dark2;
    border-bottom: 1px solid $dark2;
  }
  &__social {
    @media only screen and (max-width: 767px) {
      margin-top: 40px;
    }
    p {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      color: $dark2;
      margin-bottom: 49px;
      @media only screen and (max-width: 767px) {
        text-align: left;
      }
    }
    &_list {
      display: flex;
      justify-content: flex-end;
      @media only screen and (max-width: 767px) {
        justify-content: flex-start;
      }
      a {
        margin-right: 16px;
        @media only screen and (max-width: 767px) {
          margin: 0 16px 0 0;
        }
      }
    }
  }
}
</style>
