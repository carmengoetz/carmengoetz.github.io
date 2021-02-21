<template>
  <div class="about">
    <div>sup</div>
    <PageHeader />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'NotFound',
  components: {
    PageHeader,
  },
}
</script>

<style scoped>
.about {
    background-color: #202326;
    padding-top: -50px;
    margin-top: 50px;
}

.about > h4, h2, h5 {
    color: #9DC5CA;
}
</style>