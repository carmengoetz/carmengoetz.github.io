<template>
  <div class="home">
    <PageHeader />
    <section>
      <div class="row fade-in">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">About Carmen</h2>
        </div>
      </div>
      <div class="row fade-in">
        <div class="col-lg-12 text-center">
          <div class="home__photo">
            <img
              class="mx-auto rounded-circle"
              src="../assets/career/BE5C8630-D318-4E47-BA74-7E876FA1C8E3.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="row fade-in">
        <div class="col-lg-8 mx-auto text-center">
          <h3 class="section-subheading home__description">
            I am a full stack software developer at
            <a src="https://7shifts.com" target="_blank">7shifts</a> in Saskatoon. I am a
            technology enthusiast, lover of animals and nature, and a Nintendo fiend!
          </h3>
        </div>
      </div>
      <div class="row fade-in">
        <div class="col-lg-8 mx-auto text-center">
          <a class="btn btn-primary" href="./carmen-resume-v2.pdf" target="_blank"
            >View My Resume</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import { fadeInElements } from "@/js/animations.js";

export default {
  name: "Home",
  components: {
    PageHeader,
  },
  setup() {
    return fadeInElements();
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";
@import "../styles/_button.scss";

.home {
  > h4,
  h2,
  h5 {
    color: $orchid;
  }

  &__photo {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;

    img {
      width: 300px;
      height: 300px;
      border: 7px solid $orchid;
    }
  }

  &__description {
    color: $blue-jeans;
  }
}
</style>
