<template>
  <div class="navbar navbar-expand-lg">
    <router-link
      class="navbar-brand navbar__logo"
      data-text="carmen goetz"
      :to="{
        name: 'Home',
      }"
    >
      <img
        src="../assets/160293217_260754872185421_1608448610566618226_n.png"
        alt="carmen goetz"
        class="navbar__logo--image"
      />
    </router-link>

    <div
      v-on:click="openMobileNav()"
      id="burger"
      class="navbar-toggler navbar-toggler-right navbar__toggle"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <div class="navbar__toggle--line1"></div>
      <div class="navbar__toggle--line2"></div>
      <div class="navbar__toggle--line3"></div>
    </div>
    <div id="navbarResponsive" class="collapse navbar-collapse">
      <ul class="navbar-nav text-uppercase ml-auto">
        <li v-for="page in pages" :key="page.name">
          <router-link
            class="nav-link navbar__link glitch"
            :data-text="page.name"
            :to="{
              name: page.name,
            }"
          >
            {{ page.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () => {
    return {
      pages: [
        { path: "/", name: "Home", exact: true },
        { path: "/career", name: "Career", exact: false },
        { path: "/skills", name: "Skills", exact: false },
        { path: "/projects", name: "Projects", exact: false },
        { path: "/contact", name: "Contact", exact: false },
      ],
    };
  },
  methods: {
    getTarget: function (item) {
      return item.newTab === false ? "" : "_blank";
    },
    openMobileNav() {
      const burger = document.getElementById("burger");
      burger.classList.toggle("toggle");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.navbar {
  background-color: $xiketic;

  &__logo {
    color: $dark-orchid;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 3px;
    font-family: $font-brand;
    width: 200px;
    padding: 0 12px;
    margin: 0 40px -36px 40px;
    &--image {
      width: 200px;
    }

    @media (max-width: $mobile-breakpoint) {
      margin: 0;
      &--image {
        width: 150px;
      }
    }
  }

  &__link {
    font-size: 90%;
    font-weight: 400;
    padding: 0.75em 0;
    letter-spacing: 2px;
    color: $dark-orchid;
    font-family: $font-primary;

    &:hover {
      color: $blue-jeans !important;
    }
  }

  &__toggle {
    display: block;

    &--line1,
    &--line2,
    &--line3 {
      width: 30px;
      height: 3px;
      margin: 8px;
      background-color: $dark-orchid;
      transition: all 0.3s ease-in;
    }
  }
}

.router-link-exact-active {
  color: $blue-jeans !important;
}

.toggle {
  .navbar__toggle--line1 {
    transform: rotate(-45deg) translate(-9px, 10px);
  }
  .navbar__toggle--line2 {
    opacity: 0;
  }
  .navbar__toggle--line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
}

@media (min-width: $tablet-breakpoint) {
  .navbar {
    padding-top: 4px;
    -webkit-transition: padding-top 0.3s;
    transition: padding-top 0.3s;
    border: none;
    background-color: $xiketic;

    &__logo {
      font-size: 40px;
    }

    &__link {
      padding: 1.1em 1em !important;
    }

    &__toggle {
      display: none;
      cursor: pointer;
    }
  }

  .navbar-shrink {
    padding-top: 0;
    padding-bottom: 0;
    background-color: $xiketic;
  }
}
</style>
