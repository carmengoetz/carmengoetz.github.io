<template>
  <header
    class="masthead container "
    :class="$route.meta.class"
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

<style scoped>
.masthead {
    padding-top: 100px;
    text-align: center;
    color: #265F65;

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

@media (max-width: 427px) {
    #brand {
        width: 250px;
    }
}

@media (max-width: 377px) {
    #brand {
        width: 175px;
    }
}

@media (min-width: 768px) {
    .about {
        background-image: url("../assets/apple-apple-devices-business-205316.jpg");
    }
    .skills {
        margin-top: 100px;
        background-image: url("../assets/computer-desk-electronics-238118.jpg");
    }
    .experience {
        margin-top: 100px;
        background-image: url("../assets/coffee-computer-cup-604898.jpeg");
    }
    .contact {
        margin-top: 100px;
        background-image: url("../assets/computer-cup-desk-434337.jpg");
    }

    .masthead {
        padding-top: 0;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        background-size: cover;
    }

    .masthead .intro-text {
        padding-top: 210px;
        padding-bottom: 290px;
    }

    .masthead .intro-text .intro-heading {
        font-size: 60px;
        font-weight: 700;
        line-height: 75px;
        margin-bottom: 50px;
        font-family: 'Roboto Mono', monospace;
    }
}
/*#endregion HEADER*/
</style>