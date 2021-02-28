<template>
  <div class="col-md-4 col-sm-6 projects-item">
    <a class="projects-link" data-toggle="modal" :href="`#${modal.id}`">
      <div class="projects-hover">
        <div class="projects-hover-content">
          <i class="fas fa-plus fa-3x" />
        </div>
      </div>
      <img
        class="img-fluid"
        :src="require(`@/assets/projects/${image.name}`)"
        :alt="image.alt"
      />
    </a>
    <div class="projects-caption">
      <h4>{{ client }}</h4>
      <p class="text-muted">
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

<style scoped>
h4 {
  color: #9dc5ca;
  margin: 0;
  text-transform: none;
}

.projects-item {
  right: 0;
  margin: 0 0 15px;
}

.projects-link {
  position: relative;
  display: block;
  max-width: 400px;
  margin: 0 auto;
  cursor: pointer;
}

.projects-hover {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-transition: all ease 0.5s;
  transition: all ease 0.5s;
  opacity: 0;
  background: rgba(38, 95, 101, 0.9);
}

.projects-hover:hover {
  opacity: 1;
}

.projects-hover-content {
  font-size: 20px;
  position: absolute;
  top: 50%;
  width: 100%;
  height: 20px;
  margin-top: -12px;
  text-align: center;
  color: white;
}

.projects-hover-content i {
  margin-top: -12px;
}

.projects-caption {
  max-width: 400px;
  margin: 0 auto;
  padding: 25px;
  text-align: center;
  background-color: #fff;
}

p {
  font-size: 16px;
  font-style: italic;
  margin: 0;
  font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

@media (min-width: 767px) {
  .projects-item {
    margin: 0 0 30px;
  }
}
</style>
