<template>
  <div>
    <Navigation />
    <PageHeader />
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
import PageHeader from "./components/PageHeader.vue";

export default {
  name: "App",
  components: {
    Navigation,
    PageHeader,
    Scroll,
    Footer,
  },
};
</script>
PageHeader

<style lang="scss">
@import "./styles/_animations.scss";
#app {
  font-family: $font-secondary;
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
  font-family: $font-primary;
}

.container {
  max-width: 100% !important;
  padding: 0 !important;
}

section {
  margin: 0 30px;
  padding: 50px 0;
  @media (min-width: $mobile-breakpoint) {
    padding: 20px 0 50px 0;
  }
}

.section-heading {
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 15px;
  color: $orchid;
  @media (max-width: $mobile-breakpoint) {
    display: none;
  }
}

.section-subheading {
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 75px;
  text-transform: none;
  font-family: $font-secondary;
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
