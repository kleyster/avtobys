<template>
  <div>
    <Header />
    <div class="container-main">
      <img src="404.webp" alt="" class="img" />
      <p>{{ $t('page_not_found') }}</p>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.img {
  height: 400px;
  margin: 0 auto;
  display: block;
}
p {
  text-align: center;
  margin-bottom: 60px;
}
</style>
