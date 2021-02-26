<template>
  <header
    class="masthead container"
  >
    <div class="container-fluid">
      <div class="intro-text">
        <div class="intro-heading ">
          {{ $route.name }}<span class="blinking-cursor">|</span>
        </div>
        <div v-if="$route.meta.notFound">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">404 - page not found</h2>
          </div>
          <div class="col-lg-12 text-center ">
            <br>
            <router-link
              class="btn btn-primary btn-xl text-uppercase" 
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
    name: 'PageHeader',
}
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.masthead {
    padding-top: 100px;
    text-align: center;
    color: $orchid;
    margin-top: 100px;
}

.masthead .intro-text .intro-heading {
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    margin-bottom: 25px;
    font-family: 'Roboto Mono', monospace;
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
    background-color: $dark-orchid;
    border-color: $dark-orchid;
}

.btn-primary:active, .btn-primary:focus, .btn-primary:hover {
    background-color: $dark-orchid !important;
    border-color: $dark-orchid !important;
    color: $blue-jeans !important;
}

.btn-primary:active, .btn-primary:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(153, 52, 192, 0.5) !important;
    box-shadow: 0 0 0 0.2rem rgba(153, 52, 192, 0.5) !important;
}

@media (min-width: 768px) {
    .masthead {
        width: 100%;
        padding-top: 0;
        background-image: url("../assets/2738.jpg");
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        background-size: cover;
    }

  .intro-text {
      padding-top: 210px;
      padding-bottom: 290px;
  }

  .intro-heading {
      font-size: 60px;
      font-weight: 700;
      line-height: 75px;
      margin-bottom: 50px;
      font-family: 'Roboto Mono', monospace;
  }
}
/*#endregion HEADER*/

</style>