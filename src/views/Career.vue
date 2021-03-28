<template>
  <section class="career">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading">Career Timeline</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 mx-auto text-center">
        <h3 class="section-subheading career__description">
          If you want to learn more about my journey in the tech industry, scroll for a
          brief description of my past five years.
        </h3>
      </div>
    </div>
    <Timeline />
  </section>
</template>

<script>
import Timeline from "@/components/career/Timeline.vue";
import { glitchInElements } from "@/js/animations.js";

export default {
  name: "Career",
  components: {
    Timeline,
  },
  setup() {
    return glitchInElements();
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.career {
  &__description {
    color: $blue-jeans;
  }
}
</style>
