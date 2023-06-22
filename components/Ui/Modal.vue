<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    id="test"
    style="display: none"
  >
  </button>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          @click="emit('close')"
        ></button>
        <div class="modal-body">
          <img src="icons/success.png" alt="" />
          <h2>{{ $t("ready") }}</h2>
          <p>
            {{ $t("modal_text") }}
          </p>
          <button type="button" class="btn-ok" data-bs-dismiss="modal" @click="emit('close')">
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isShow: Boolean,
});
const emit = defineEmits(["close"]);

watch(
  () => props.isShow,
  () => {
    if (props.isShow == true) {
      document.getElementById("test").click();
    }
  }
);
</script>

<style lang="scss" scoped>
.modal {
  &-body {
    text-align: center;
    color: #000;
    padding: 16px;
    img {
      margin: 0 auto 20px;
      display: block;
      width: 100px;
    }
    h2 {
      margin-bottom: 20px;
    }
  }
  .btn-close {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 1;
  }
  .btn-ok {
    background: #0000af;
    color: #fff;
    width: 100px;
    height: 40px;
    margin: 0 auto;
    border-radius: 6px;
  }
}
</style>
