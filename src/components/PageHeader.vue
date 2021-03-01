<template>
  <header class="masthead">
    <div class="container-fluid">
      <div class="intro-text">
        <div class="intro-heading masthead__heading">
          {{ $route.name }}<span class="blinking-cursor">|</span>
        </div>
        <div v-if="$route.meta.notFound">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">404 - page not found</h2>
          </div>
          <div class="col-lg-12 text-center">
            <br />
            <router-link
              class="btn btn-primary"
              :to="{
                name: 'Software Developer',
              }"
            >
              Back to Safety
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";
@import "../styles/_button.scss";

.masthead {
  padding-top: 100px;
  text-align: center;
  color: $orchid;

  &__heading {
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    margin-bottom: 25px;
    font-family: "Roboto Mono", monospace;
  }
}

@media (min-width: $mobile-breakpoint) {
  .masthead {
    width: 100%;
    padding-top: 0;
    background-image: url("../assets/2738.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &__heading {
      padding-top: 210px;
      padding-bottom: 290px;
      font-size: 60px;
      font-weight: 700;
      line-height: 75px;
      margin-bottom: 50px;
      font-family: "Roboto Mono", monospace;
    }
  }
}
/*#endregion HEADER*/
</style>
