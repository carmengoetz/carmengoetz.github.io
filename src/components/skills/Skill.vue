<template>
  <div class="skill">
    <fa :icon="icon" type="fas" class="fa-inverse skill__icon"></fa>
    <p class="skill__description" v-html="description"></p>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: ["title", "description", "icon"],
};
</script>

<style scoped lang="scss">
.skill {
  &__icon {
    width: 100px;
    height: 100px;
    color: $orchid;
  }

  &__heading {
    margin: 15px 0;
    text-transform: none;
    color: $blue-jeans;
  }

  &__description {
    margin: 12px auto;
    color: white;
  }
}
</style>
