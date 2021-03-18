<template>
  <a @click="scrollTop" v-show="visible" class="scroll glitch__scroll">
    <fa
      icon="caret-up"
      type="fas"
      class="scroll__icon glitch__scroll glitch__scroll--effect-1"
    />
    <fa
      icon="caret-up"
      type="fas"
      class="scroll__icon glitch__scroll glitch__scroll--effect-2"
    />
    <fa icon="caret-up" type="fas" class="scroll__icon glitch__scroll" />
  </a>
</template>

<script>
export default {
  name: "Scroll",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeUnmount: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped lang="scss">
.scroll {
  position: fixed;
  cursor: pointer;
  line-height: 40px;
  display: block;
  width: 48px;
  height: 48px;
  color: white;

  &__icon {
    width: 45px;
    height: 45px;
    margin-top: -5px;
    position: absolute;
  }
}
</style>
