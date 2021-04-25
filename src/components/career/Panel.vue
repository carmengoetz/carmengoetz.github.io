<template>
  <li class="timeline-item timeline__item" :class="{ inverted: inverted }">
    <div class="timeline-image timeline__image">
      <img class="rounded-circle img-fluid" :src="image" alt="tbd" />
    </div>
    <div class="timeline-panel timeline__panel">
      <div class="timeline-heading timeline__heading">
        <h4 class="timeline__heading--year">{{ year }}</h4>
        <h5 class="timeline__heading--subheading">
          {{ heading }}
        </h5>
      </div>
      <div class="timeline-body timeline__body">
        <p class="text-light">
          {{ description }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "Panel",
  props: ["year", "heading", "image", "description", "inverted"],
};
</script>

<style scoped lang="scss">
@import "../../styles/_variables.scss";

.timeline {
  &__item {
    position: relative;
    min-height: 50px;
    margin-bottom: 20px;
    min-height: 170px;

    &:after,
    &:before {
      display: table;
      content: " ";
    }

    &:after {
      clear: both;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__image {
    width: 170px;
    height: 170px;
    margin-left: -85px;
  }

  &__panel {
    position: relative;
    float: right;
    width: 100%;
    padding: 0 20px 0 100px;
    text-align: left;
    padding: 0 20px 20px 20px;

    &:before {
      right: auto;
      left: -15px;
      border-right-width: 15px;
      border-left-width: 0;
    }

    &:after {
      right: auto;
      left: -14px;
      border-right-width: 14px;
      border-left-width: 0;
    }

    .inverted {
      float: right;
      padding: 0 20px 0 100px;
      text-align: left;
      padding: 0 100px 20px 20px;

      &:before {
        right: auto;
        left: -15px;
        border-right-width: 15px;
        border-left-width: 0;
      }

      &:after {
        right: auto;
        left: -14px;
        border-right-width: 14px;
        border-left-width: 0;
      }
    }
  }

  &__image {
    z-index: 100;
    left: 0;
    width: 80px;
    height: 80px;
    margin: 10px auto;
    text-align: center;
    color: $dark-orchid;
    border-radius: 100%;
    background-color: white;
  }

  &__heading {
    &--year {
      margin-top: 0;
      color: $orchid !important;
    }

    &--subheading {
      font-weight: 600;
      text-transform: none;
      color: $blue-jeans;
    }
  }
}

@media (min-width: $mobile-breakpoint) {
  .timeline {
    &__item {
      min-height: 100px;
      margin-top: 50px;
    }

    &__panel {
      float: left;
      width: 41%;
      padding: 0 20px 20px 30px;
      text-align: right;
    }

    &__image {
      position: absolute;
      left: 50%;
      width: 100px;
      height: 100px;
      margin-left: -50px;
    }

    .inverted > .timeline__panel {
      float: right;
      padding: 0 30px 20px 20px;
      text-align: left;
    }
  }
}

@media (min-width: $tablet-breakpoint) {
  .timeline {
    &__item {
      min-height: 150px;
    }

    &__panel {
      padding: 0 20px 20px;
    }

    &__image {
      width: 150px;
      height: 150px;
      margin-left: -75px;
    }

    .inverted > .timeline__panel {
      padding: 0 20px 20px;
    }
  }
}
</style>
