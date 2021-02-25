<template>
  <div class="home">
    <PageHeader />

    <section id="home">
      <div class="container">
        <div class="row ">
          <div class="col-lg-12 text-center ">
            <h2 class="section-heading text-uppercase">
              Carmen Goetz
            </h2>
          </div>
        </div>
        <div class="row ">
          <div class="col-lg-12 text-center ">
            <div class="photo">
              <img
                class="mx-auto rounded-circle fade-in"
                src="../assets/about/8E6FB7C4-42F5-441C-B421-1C46F3CBA6D5.jpg"
                alt=""
              >
            </div>
          </div>
        </div>
        <div class="row ">
          <div class="col-lg-8 mx-auto text-center">
            <h3 class="section-subheading text-light">
              I am a full stack software developer at 7shifts in Saskatoon. I am a technology 
              enthusiast, lover of animals and nature, and a Nintendo fiend!
            </h3>
          </div>
        </div>
        <div>
        <a
          class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          href="./carmen-resume-v2.pdf"
          target="_blank"
        >View My Resume</a>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import { fadeInElements } from '@/js/animations.js'

export default {
  name: 'Home',
  components: {
    PageHeader,
  },
  setup () {
    return fadeInElements();
  }
}
</script>


<style scoped>

#home {
    background-color: #202326;
    padding-top: -50px;
    margin-top: 50px;
}

#home > h4, h2, h5 {
    color: #9DC5CA;
}

.photo {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
}

.photo img {
    width: 300px;
    height: 300px;
    border: 7px solid #fff;
}

.btn {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 700;
}

.btn-xl {
    font-size: 18px;
    padding: 20px 40px;
}

.btn-primary {
    background-color: #265F65;
    border-color: #265F65;
}

.btn-primary:active, .btn-primary:focus, .btn-primary:hover {
    background-color: #265F65 !important;
    border-color: #265F65 !important;
    color: white;
}

.btn-primary:active, .btn-primary:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(38, 95, 101, 0.5) !important;
    box-shadow: 0 0 0 0.2rem rgba(38, 95, 101, 0.5) !important;
}

</style>