<template>
  <div>
    <Navigation />
    <div class="container">
      <!-- <router-view v-slot="{ Component }" :key="$route.path" >
            <transition name="component-fade" mode="out-in">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view> -->

      <transition name="component-fade" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </div>
    <Scroll />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Scroll from "@/components/Scroll.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Scroll,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./styles/_variables.scss";

#app {
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
  background-image: linear-gradient($xiketic, $russian-violet);
}

p {
  line-height: 1.75;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

.container {
  max-width: 100% !important;
  padding: 0 !important;
}

section {
  padding: 50px 0;
  @media (min-width: $mobile-breakpoint) {
    padding: 100px 0;
  }
}

.section-heading {
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 15px;
  color: $orchid;
}

.section-subheading {
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 75px;
  text-transform: none;
  font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

::selection {
  background: $blue-jeans;
  text-shadow: none;
}

img::selection {
  background: transparent;
}

img::-moz-selection {
  background: transparent;
}

/*#region BLINKING CURSOR*/
.blinking-cursor {
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: $orchid;
  }
}

@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: $orchid;
  }
}

@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: $orchid;
  }
}

@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: $orchid;
  }
}

@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: $orchid;
  }
}
/*endregion BLINKING CURSOR*/

/*region ANIMATIONS*/
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 1s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}

.fade-in {
  opacity: 0;
  transition: 2s all ease-in-out;
}
/*endregion ANIMATIONS*/

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: $xiketic;
}

::-webkit-scrollbar-thumb {
  background: $dark-orchid;

  &:hover {
    background: $orchid;
  }
}
/*endregion SCROLLBAR*/
</style>
