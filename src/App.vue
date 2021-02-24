<template>
  <div id="page-top">
    <Navigation />
    <div class="container">
        <transition name="component-fade" mode="out-in">
            <router-view :key="$route.path" />
        </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  },
}

</script>

<style>
#app {
  font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

p {
    line-height: 1.75;
}

.text-primary {
    color: #265F65 !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 700;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

section {
    padding: 100px 0;
}

.section-heading {
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 15px;
}

.section-subheading {
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 75px;
    text-transform: none;
    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

@media (min-width: 768px) {
    section {
        padding: 150px 0;
    }
}

::selection {
    background: #9DC5CA;
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
    from, to {
        color: transparent;
    }
    50% {
        color: #265F65;
    }
}

@-moz-keyframes blink {
    from, to {
        color: transparent;
    }
    50% {
        color: #265F65;
    }
}

@-webkit-keyframes blink {
    from, to {
        color: transparent;
    }
    50% {
        color: #265F65;
    }
}

@-ms-keyframes blink {
    from, to {
        color: transparent;
    }
    50% {
        color: #265F65;
    }
}

@-o-keyframes blink {
    from, to {
        color: transparent;
    }
    50% {
        color: #265F65;
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
    transition: 3s all ease-in-out;
}

/* .fade-in-element {
    animation: fade-in 3s;
}

.hidden {
    opacity: 0;
} */
/*endregion ANIMATIONS*/
</style>
