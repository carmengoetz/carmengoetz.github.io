<template>
  <section class="skills">
    <SkillTabs />
  </section>
</template>

<script>
import SkillTabs from "@/components/skills/SkillTabs.vue";

export default {
  name: "Skills",
  components: {
    SkillTabs,
  },
  data: () => {
    return {
      heading: "Skills",
    };
  },
};
</script>
