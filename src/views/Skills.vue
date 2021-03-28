<template>
  <section class="skills">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading skills__heading">Skills</h2>
      </div>
    </div>
    <SkillTabs />
  </section>
</template>

<script>
import SkillTabs from "@/components/skills/SkillTabs.vue";
import { glitchInElements } from "@/js/animations.js";

export default {
  name: "Skills",
  components: {
    SkillTabs,
  },
  setup() {
    return glitchInElements();
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
