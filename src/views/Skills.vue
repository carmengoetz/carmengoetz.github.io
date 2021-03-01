<template>
  <div class="skills">
    <PageHeader :heading="heading" :page="page" :show-resume="false" />
    <section>
      <div class="row fade-in">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading skills__heading">Skills</h2>
        </div>
      </div>
      <SkillTabs />
    </section>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import SkillTabs from "@/components/skills/SkillTabs.vue";
import { fadeInElements } from "@/js/animations.js";

export default {
  name: "Skills",
  components: {
    PageHeader,
    SkillTabs,
  },
  setup() {
    return fadeInElements();
  },
  data: () => {
    return {
      heading: "Skills",
    };
  },
};
</script>

<style scoped lang="scss">
@media (min-width: 768px) {
  .skills {
    &__heading {
      margin-bottom: 30px;
    }
  }
}
</style>
