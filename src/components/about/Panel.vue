<template>
  <li class="timeline-item" :class="{inverted: inverted}">
    <div class="timeline-image">
      <img
        class="rounded-circle img-fluid"
        :src="image"
        alt="tbd"
      >
    </div>
    <div class="timeline-panel">
      <div class=" timeline-heading ">
        <h4 class="year">{{ year }}</h4>
        <h5 class="subheading">
          {{ heading }}
        </h5>
      </div>
      <div class=" timeline-body ">
        <p class="text-light">
          {{ description }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
    name: 'Panel',
    props: ['year', 'heading', 'image', 'description', 'inverted']
}
</script>

<style scoped>

.timeline-item {
    position: relative;
    min-height: 50px;
    margin-bottom: 50px;
}

.timeline-item:after, .timeline-item:before {
    display: table;
    content: ' ';
}

.timeline-item:after {
    clear: both;
}

.timeline-panel {
    position: relative;
    float: right;
    width: 100%;
    padding: 0 20px 0 100px;
    text-align: left;
}

.timeline-panel:before {
    right: auto;
    left: -15px;
    border-right-width: 15px;
    border-left-width: 0;
}

.timeline-panel:after {
    right: auto;
    left: -14px;
    border-right-width: 14px;
    border-left-width: 0;
}

.timeline-image {
    position: absolute;
    z-index: 100;
    left: 0;
    width: 80px;
    height: 80px;
    margin-left: 0;
    text-align: center;
    color: #3a3c41;
    border-radius: 100%;
    background-color: white;
}

.inverted > .timeline-panel {
    float: right;
    padding: 0 20px 0 100px;
    text-align: left;
}

.inverted > .timeline-panel:before {
    right: auto;
    left: -15px;
    border-right-width: 15px;
    border-left-width: 0;
}

.inverted > .timeline-panel:after {
    right: auto;
    left: -14px;
    border-right-width: 14px;
    border-left-width: 0;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.year {
    margin-top: 0;
    color: #265F65 !important;
}
.subheading {
    font-weight: 600;
    text-transform: none;
    color: #9DC5CA;
}

.timeline .timeline-body > ul,
.timeline .timeline-body > p {
    margin-bottom: 0;
}

@media (min-width: 768px) {
    .timeline-item {
        min-height: 100px;
        margin-bottom: 100px;
    }
    .timeline-panel {
        float: left;
        width: 41%;
        padding: 0 20px 20px 30px;
        text-align: right;
    }
    .timeline-image {
        left: 50%;
        width: 100px;
        height: 100px;
        margin-left: -50px;
    }
    .inverted > .timeline-panel {
        float: right;
        padding: 0 30px 20px 20px;
        text-align: left;
    }
}

@media (min-width: 992px) {
    .timeline-item {
        min-height: 150px;
    }
    .timeline-panel {
        padding: 0 20px 20px;
    }
    .timeline-image {
        width: 150px;
        height: 150px;
        margin-left: -75px;
    }
    .inverted > .timeline-panel {
        padding: 0 20px 20px;
    }
}

@media (min-width: 1200px) {
    .timeline-item {
        min-height: 170px;
    }
    .timeline-panel {
        padding: 0 20px 20px 100px;
    }
    .timeline-image {
        width: 170px;
        height: 170px;
        margin-left: -85px;
    }
    .inverted > .timeline-panel {
        padding: 0 100px 20px 20px;
    }
}
</style>