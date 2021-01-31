<template>
  <div
    id="mainNav"
    class="navbar navbar-expand-lg fixed-top"
  >
    <div class="container">
      <router-link
              class="navbar-brand js-scroll-trigger" 
              :to="{
                name: 'Software Developer',
                hash: '#page-top'
              }"
            >
        <img
        id="brand"
        src="../assets/logos/carmen-goetz-logo.png"
        width="300"
        alt="carmen goetz">
      </router-link>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars" />
      </button>
      <div
        id="navbarResponsive"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav text-uppercase ml-auto">
          <li
            v-for="page in pages"
            :key="page.name"
            class="nav-item"
          >
            <router-link
              class="nav-link js-scroll-trigger" 
              :to="{
                name: page.name,
                hash: '#page-top'
              }"
            >
              {{ page.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Navigation',
  data: () => {
    return {
      pages: [
        { path: '/about', name: 'About', exact: false },
        { path: '/skills', name: 'Skills', exact: false },
        { path: '/experience', name: 'Experience', exact: false },
        { path: '/contact', name: 'Contact', exact: false },
      ],
    }
  },
  methods: {
    getTarget: function (item) {
      return item.newTab === false ? '' : '_blank'
    }
  }
}
</script>

<style scoped>
#mainNav {
    background-color: white;
}

.navbar-toggler {
    font-size: 40px;
    right: 0;
    padding: 13px;
    color: #265F65;
    border: 0;
    background-color: white;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

.navbar-brand {
    color: #265F65;
    font-family: 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

.router-link-exact-active, .navbar-brand:focus, .navbar-brand:hover {
    color: #265F65 !important;
}

.nav-link {
    font-size: 90%;
    font-weight: 400;
    padding: 0.75em 0;
    letter-spacing: 1px;
    color: black;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

#mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {
    color: #265F65;
}

@media (min-width: 992px) {
    #mainNav {
        padding-top: 25px;
        padding-bottom: 25px;
        -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
        transition: padding-top 0.3s, padding-bottom 0.3s;
        border: none;
        background-color: transparent;
    }
    #mainNav .navbar-brand {
        font-size: 1.75em;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }

    #mainNav .navbar-nav .nav-item .nav-link {
        padding: 1.1em 1em !important;
    }
    #mainNav.navbar-shrink {
        padding-top: 0;
        padding-bottom: 0;
        background-color: white;
    }
    #mainNav.navbar-shrink .navbar-brand {
        font-size: 1.25em;
        padding: 12px 0;
    }
}
</style>