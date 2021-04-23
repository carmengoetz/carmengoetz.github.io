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
          If you’re curious about my time in the technology industry, scroll down and join
          me on my journey!
        </h3>
      </div>
    </div>
    <Timeline />
  </section>
</template>

<script>
import Timeline from "@/components/career/Timeline.vue";

export default {
  name: "Career",
  components: {
    Timeline,
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
