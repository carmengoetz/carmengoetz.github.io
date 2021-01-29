<template>
    <div class="col-md-4 col-sm-6 experience-item">
        <a class="experience-link" data-toggle="modal" :href="`#${modal.id}`">
            <div class="experience-hover">
                <div class="experience-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" :src="require(`@/assets/experience/${image.name}`)" :alt="image.alt">
        </a>
        <div class="experience-caption">
            <h4>{{client}}</h4>
            <p class="text-muted">{{category}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'item',
    props: ['modal', 'image', 'client', 'category']
}
</script>

<style scoped>
h4 {
    color: #9DC5CA;
    margin: 0;
    text-transform: none;
}

.experience-item {
    right: 0;
    margin: 0 0 15px;
}

.experience-link {
    position: relative;
    display: block;
    max-width: 400px;
    margin: 0 auto;
    cursor: pointer;
}

.experience-hover {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transition: all ease 0.5s;
    transition: all ease 0.5s;
    opacity: 0;
    background: rgba(38, 95, 101, 0.9);
}

.experience-hover:hover {
    opacity: 1;
}

.experience-hover-content {
    font-size: 20px;
    position: absolute;
    top: 50%;
    width: 100%;
    height: 20px;
    margin-top: -12px;
    text-align: center;
    color: white;
}

.experience-hover-content i {
    margin-top: -12px;
}

.experience-caption {
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
    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

@media (min-width: 767px) {
    .experience-item {
        margin: 0 0 30px;
    }
}
</style>