<template>
  <div class="about">
    <PageHeader />

    <section id="about">
      <div class="container">
        <div class="row fade-in">
          <div class="col-lg-12 text-center ">
            <h2 class="section-heading text-uppercase">
              About Me
            </h2>
          </div>
        </div>
        <div class="row fade-in">
          <div class="col-lg-8 mx-auto text-center">
            <h3 class="section-subheading text-light">
              If you want to learn more about my journey in the tech industry, scroll for a brief 
              description of my past five years.
            </h3>
          </div>
        </div>
        <Timeline />
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import Timeline from '@/components/about/Timeline.vue'
import { fadeInElements } from '@/js/animations.js'

export default {
  name: 'About',
  components: {
    PageHeader,
    Timeline
  },
  setup () {
    return fadeInElements();
  }
}
</script>


<style scoped>

#about {
    background-color: #202326;
    padding-top: -50px;
    margin-top: 50px;
}

</style>