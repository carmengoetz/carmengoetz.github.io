<template>
  <div class="about">
    <PageHeader />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'FourOhFour',
  components: {
    PageHeader,
  },
}
</script>

<style scoped>
#about {
    background-color: #202326;
    padding-top: -50px;
    margin-top: 50px;
}

#about > h4, h2, h5 {
    color: #9DC5CA;
}
</style>