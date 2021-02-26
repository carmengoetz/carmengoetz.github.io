<template>
  <div class="col-md-4">
    <span class="fa-stack fa-4x">
      <i class="fas fa-circle fa-stack-2x" />
      <i class="fas {{icon}} fa-stack-1x fa-inverse" />
    </span>
    <h4 class="skill-heading">
      {{ title }}
    </h4>
    <p class="text-light">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
    name: 'Skill',
    props: ['title', 'description', 'icon']
}
</script>

<style scoped>
.skill-heading {
    margin: 15px 0;
    text-transform: none;
    color: #9DC5CA;
}
</style>