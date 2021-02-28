<template>
  <div class="about">
    <PageHeader />
    <section>
      <div class="row fade-in">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">About Me</h2>
        </div>
      </div>
      <div class="row fade-in">
        <div class="col-lg-8 mx-auto text-center">
          <h3 class="section-subheading about__description">
            If you want to learn more about my journey in the tech industry, scroll for a
            brief description of my past five years.
          </h3>
        </div>
      </div>
      <Timeline />
    </section>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import Timeline from "@/components/about/Timeline.vue";
import { fadeInElements } from "@/js/animations.js";

export default {
  name: "About",
  components: {
    PageHeader,
    Timeline,
  },
  setup() {
    return fadeInElements();
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.about {
  &__description {
    color: $blue-jeans;
  }
}
</style>
