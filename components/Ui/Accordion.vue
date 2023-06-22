<template>
  <div>
    <div class="accordion" id="faq">
      <div class="accordion-item" v-for="(item, index) in list" :key="index">
        <h2 class="accordion-header" :id="`heading${index}`">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse${index}`"
            :aria-expanded="selectedIndex == index ? true : false"
            :aria-controls="`collapse${index}`"
            :class="{ show: selectedIndex == index }"
          >
            {{ item.question }}
          </button>
        </h2>
        <div
          :id="`collapse${index}`"
          class="accordion-collapse collapse"
          :aria-labelledby="`heading${index}`"
          data-bs-parent="#faq"
          :class="{ show: selectedIndex == index }"
        >
          <div class="accordion-body">
            <p>{{ item.first }}</p>
            <p>{{ item.second }}</p>
            <p>{{ item.third }}</p>
            <p>{{ item.fourth }}</p>
            <p>{{ item.fifth }}</p>
            <p>{{ item.sixth }}</p>
            <p>{{ item.seventh }}</p>
            <p>{{ item.eighth }}</p>
            <div v-if="item.first1" class="mt-20">
              <p>{{ item.first1 }}</p>
              <p>{{ item.second1 }}</p>
              <p>{{ item.third1 }}</p>
              <p>{{ item.fourth1 }}</p>
              <p>{{ item.fifth1 }}</p>
              <p>{{ item.sixth1 }}</p>
              <p>{{ item.seventh1 }}</p>
            </div>
            <div v-if="item.first2" class="mt-20">
              <p>{{ item.first2 }}</p>
              <p>{{ item.second2 }}</p>
              <p>{{ item.third2 }}</p>
              <p>{{ item.fourth2 }}</p>
              <p>{{ item.fifth2 }}</p>
              <p>{{ item.sixth2 }}</p>
              <p>{{ item.seventh2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  list: Array,
  selectedIndex: Number,
});
</script>
