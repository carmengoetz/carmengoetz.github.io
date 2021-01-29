<template>
    <header class="masthead container animate-in" :class="page">
    <div class="container-fluid">
        <div class="intro-text">
            <div class="intro-heading ">{{heading}}<span class="blinking-cursor">|</span></div>

        </div>

    <div v-if="showResume">
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="resources/carmen-resume-v2.pdf"
           target="_blank">View My Resume</a>
    </div>
    </div>
</header>
</template>

<script>
export default {
    name: 'page-header',
    props: ['heading', 'page', 'showResume'],
}
</script>

<style scoped>
.masthead {
    padding-top: 100px;
    text-align: center;
    color: #265F65;

}

.masthead .intro-text .intro-heading {
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    margin-bottom: 25px;
    font-family: 'Roboto Mono', monospace;
}

@media (max-width: 427px) {
    #brand {
        width: 250px;
    }
}

@media (max-width: 377px) {
    #brand {
        width: 175px;
    }
}

@media (min-width: 768px) {
    .about {
        background-image: url("../assets/apple-apple-devices-business-205316.jpg");
    }
    .skills {
        margin-top: 100px;
        background-image: url("../assets/computer-desk-electronics-238118.jpg");
    }
    .experience {
        margin-top: 100px;
        background-image: url("../assets/coffee-computer-cup-604898.jpeg");
    }
    .contact {
        margin-top: 100px;
        background-image: url("../assets/computer-cup-desk-434337.jpg");
    }

    .masthead {
        padding-top: 0;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        background-size: cover;
    }

    .masthead .intro-text {
        padding-top: 210px;
        padding-bottom: 290px;
    }

    .masthead .intro-text .intro-heading {
        font-size: 60px;
        font-weight: 700;
        line-height: 75px;
        margin-bottom: 50px;
        font-family: 'Roboto Mono', monospace;
    }

    
}
/*#endregion HEADER*/
</style>