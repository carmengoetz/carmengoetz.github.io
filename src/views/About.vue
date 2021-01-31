<template>
  <div class="about">
    <PageHeader />

    <section id="about">
      <div class="container">
        <div class="row ">
          <div class="col-lg-12 text-center ">
            <h2 class="section-heading text-uppercase">
              About Me
            </h2>
          </div>
        </div>
        <div class="row ">
          <div class="col-lg-8 mx-auto text-center">
            <h3 class="section-subheading text-light">
              I am a full stack software developer at 7shifts 
              in Saskatoon. I am a technology enthusiast, lover of animals and nature, and a Nintendo 
              fiend! If you want to learn more, scroll for a brief description of my past five years.
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


export default {
  name: 'About',
  components: {
    PageHeader,
    Timeline
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

.team-member {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
}

.team-member img {
    width: 300px;
    height: 300px;
    border: 7px solid #fff;
}

</style>