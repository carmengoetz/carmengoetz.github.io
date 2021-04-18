<template>
  <div class="col-md-4 col-sm-6 projects__item">
    <a class="projects__link" data-toggle="modal" :href="`#${modal.id}`">
      <div class="projects__link--hover">
        <fa icon="plus" class="projects__icon" />
      </div>
      <img
        class="img-fluid"
        :src="require(`@/assets/projects/${image.name}`)"
        :alt="image.alt"
      />
    </a>
    <div class="projects__caption">
      <h4 class="projects__caption--header">{{ client }}</h4>
      <p class="projects__caption--text">
        {{ category }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["modal", "image", "client", "category"],
};
</script>

<style scoped lang="scss">
.projects {
  &__item {
    right: 0;
    margin: 0 0 15px;

    @media (min-width: 768px) {
      margin: 0 0 30px;
    }
  }

  &__link {
    position: relative;
    display: block;
    max-width: 400px;
    margin: 0 auto;
    cursor: pointer;

    &--hover {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-transition: all ease 0.5s;
      transition: all ease 0.5s;
      opacity: 0;
      background: rgba(76, 170, 232, 0.9);
      &:hover {
        opacity: 1;
      }
    }
  }

  &__icon {
    width: 43.8%;
    margin: 25% auto;
    text-align: center;
    color: white;
  }

  &__caption {
    max-width: 400px;
    margin: 0 auto;
    padding: 25px;
    text-align: center;
    background-color: $orchid;

    &--header {
      color: white;
      margin: 0;
      text-transform: none;
    }

    &--text {
      font-size: 16px;
      font-style: italic;
      color: $russian-violet;
      margin: 0;
      font-family: $font-secondary;
    }
  }
}
</style>
