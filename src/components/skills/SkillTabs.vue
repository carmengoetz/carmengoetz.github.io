<template>
  <div class="row fade-in">
    <Tabs v-model="selectedTab" class="skills__tabs">
      <Tab
        class="skills__tab"
        v-for="(skill, i) in skills"
        :key="`skill${i}`"
        :val="skill.title"
        :label="skill.title"
        :indicator="true"
      />
    </Tabs>
    <TabPanels v-model="selectedTab" :animate="true" :swipeable="true">
      <TabPanel v-for="(skill, i) in skills" :key="`skill${i}`" :val="skill.title">
        <Skill
          :key="skills[i].title"
          :description="skills[i].description"
          :icon="skills[i].icon"
          class="skills__skill"
        />
      </TabPanel>
    </TabPanels>
  </div>
</template>

<script>
import Skill from "@/components/skills/Skill.vue";
import { fadeInElements } from "@/js/animations.js";
import { Tabs, Tab, TabPanels, TabPanel } from "vue3-tabs";
import { reactive, toRefs } from "vue";

const skills = [
  {
    index: 0,
    title: "Technologies",
    description:
      "PHP, JavaScript, HTML5/CSS3, Vue 3, ReactJS, Laravel, Symphony, CakePHP, Java, C#, C, Android Studio, Xamarin, Swift, MySQL, Oracle, GoogleOAuth 2.0, Apple REST API, Google Cloud Platform, Nginx",
    icon: "code",
  },
  {
    index: 1,
    title: "Methodologies",
    description:
      "Agile development, Test Driven Design, Domain Driven Design, Object oriented design & development",
    icon: "project-diagram",
  },
  {
    index: 2,
    title: "Version Control",
    description:
      "Projects using Bit Bucket and GitHub. Commits are always well commented and documented",
    icon: "code-branch",
  },
  {
    index: 3,
    title: "Fundamentals",
    description:
      "Candid communicator, self motivated, team player, exceptionally curious, full of ambition, goal oriented,",
    icon: "comments",
  },
];

export default {
  name: "Skills",
  components: {
    Skill,
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup() {
    const state = reactive({
      selectedTab: skills[0].index,
    });

    const fadeIn = fadeInElements();

    return {
      fadeIn,
      skills,
      ...toRefs(state),
    };
  },
  data: () => {
    return {
      heading: "SkillTabs",
    };
  },
};
</script>

<style scoped lang="scss">
.skills {
  &__tab {
    color: $blue-jeans;
    padding: 10px 20px;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    &__tabs {
      margin: 0 auto;
    }

    &__tab {
      font-family: $font-primary;
      color: $blue-jeans;
      padding: 10px;
      cursor: pointer;
    }

    &__skill {
      margin: 30px auto 0 auto;
    }
  }
  .active-tab {
    border-width: 0px;
    border-top-width: 2px;
    border-style: solid;
  }
}
</style>
