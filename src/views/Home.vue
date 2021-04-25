<template>
  <section class="home">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading">About Carmen</h2>
      </div>
    </div>
    <div class="row">
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
    <div class="row">
      <div class="col-lg-8 mx-auto text-center">
        <h3 class="section-subheading home__description">
          Hi and welcome! I’m Carmen Goetz (they/them), a technology enthusiast excited
          about creating and tackling new challenges. From a young age, I’ve had a knack
          for 1’s and 0’s and knew that I wanted to pursue a career in technology.
          <br /><br />
          When I’m not behind the keyboard, I’m usually found spending time with my coon
          hound cross Tsuki, and my torbie Lily. I have a green thumb and love gardening
          and expanding my plant collection and love to work on fun projects that allow me
          to hone my creative skills.
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <a
          class="button"
          data-text="View My Resume"
          href="./carmen-resume-v2.pdf"
          target="_blank"
          >View My Resume</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";
@import "../styles/_button.scss";

.home {
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
