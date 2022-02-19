<template>
  <div class="projects">
    <section>
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Projects</h2>
          <h3 class="section-subheading projects__description">
            Projects, personal or business, completed or in progress
          </h3>
        </div>
      </div>
      <div class="row projects__items justify-content-center">
        <Item
          v-for="item in projects"
          :key="item.index"
          :modal="item.modal"
          :image="item.image"
          :client="item.client"
          :category="item.category"
        />
      </div>
    </section>

    <Modal
      v-for="(project, i) in projects"
      :key="`project${i}`"
      :id="project.modal.id"
      :project="project.modal.project"
      :client="project.client"
      :image="project.modal.image"
      :carousel="project.modal.carousel"
      :date="project.modal.date"
      :category="project.category"
      :description="project.modal.description"
      :github="project.modal.github"
      :website="project.modal.website"
    />
  </div>
</template>

<script>
import Item from "@/components/projects/Item.vue";
import Modal from "@/components/projects/Modal.vue";

export default {
  name: "Projects",
  components: {
    Item,
    Modal,
  },
  data: () => {
    return {
      projects: [
        {
          modal: {
            id: "projectsModal1",
            project: "Portfolio/Shop for Classical Musicion",
            image: {
              name: "spencer-krips-music.png",
              alt: "Spencer Krips Music",
            },
            date: "February 2022",
            description:
              "Spencer Krips is a musician located in Saskatoon SK Canada. Spencer's website was built using Vue.js, Vuetify and Vue Router. The purpose of this website is for prospective employers and customers to display a portfolio of his works, events he is a part of, and sell his music and merch. ",
            github: {
              name: "carmengoetz/spencer-krips-music",
              link: "https://github.com/carmengoetz/spencer-krips-music",
            },
            website: {
              name: "Spencer Krips Music",
              link: "https://main.d2keh6sf0oj7xn.amplifyapp.com",
            },
          },
          image: {
            name: "spencer-krips-music-thumb.png",
            alt: "Spencer Krips Music",
          },
          client: "Spencer Krips Music",
          category: "Web Development",
        },
        {
          modal: {
            id: "projectsModal2",
            project: "Portfolio for Artist",
            image: {
              name: "zachary-knuttila.png",
              alt: "Zachary Knuttila",
            },
            date: "October 2021",
            description:
              "A website portfolio for Zachary Knuttila, a digital artist, created with Vue.js, Vue Router, and Vuetify.",
            github: {
              name: "carmengoetz/zachary-knuttila",
              link: "https://github.com/carmengoetz/zachary-knuttila",
            },
            website: {
              name: "Zachary J Knuttila",
              link: "https://zacharyjknuttila.com",
            },
          },
          image: {
            name: "zachary-knuttila-thumb.png",
            alt: "Zachary Knuttila",
          },
          client: "Zachary Knuttila",
          category: "Web Development",
        },
        {
          modal: {
            id: "projectsModal3",
            project: "Portfolio for Graphic Designer",
            image: {
              name: "creative-reyne.png",
              alt: "Creative Reyne",
            },
            date: "June 2021",
            description:
              "A website portfolio for Creative Reyne, a graphic designer, created with Vue.js, Vue Router, Vuetify, and Vuex. This website has  2 sides to it, a side directed to clients who are content creators, and the other directed to standard business. With collaboration with Creative Reyne themselves, we were able to encapsulate their talents, give a feel for their style, and showcase what services they have available.",
            github: {
              name: "carmengoetz/CreativeReyne",
              link: "https://github.com/carmengoetz/CreativeReyne",
            },
            website: {
              name: "Creative Reyne",
              link: "https://creativereyne.ca",
            },
          },
          image: {
            name: "creative-reyne-thumb.png",
            alt: "Creative Reyne",
          },
          client: "Creative Reyne",
          category: "Web Development",
        },
        {
          modal: {
            id: "projectsModal4",
            project: "My Portfolio",
            image: {
              name: "carmen-goetz2.png",
              alt: "Carmen Goetz",
            },
            date: "March 2021",
            description:
              "A website portfolio that showcased my creativity, talent and technical knowledge. Displayed on this website are some of the projects that I am proud to have worked on. This website was created using Vue.js, Vue Router and Bootstrap. I envisioned this website to express my personality and my passion for front-end web development. The logo for my website was designed and created by <a href='https://www.creativereyne.ca' target='_blank'>Creative Reyne</a>.",
            github: {
              name: "carmengoetz/carmengoetz.github.io",
              link: "https://github.com/carmengoetz/carmengoetz.github.io",
            },
            website: {
              name: "Carmen Goetz",
              link: "https://creativereyne.ca",
            },
          },
          image: {
            name: "carmen-goetz-thumb2.png",
            alt: "Carmen Goetz",
          },
          client: "Carmen Goetz",
          category: "Web Development",
        },
        {
          modal: {
            id: "projectsModal5",
            project: "Portfolio for writer, artists, game designer",
            image: {
              name: "the-dewsletter.png",
              alt: "The Dewsletter",
            },
            date: "In Progress",
            description:
              "This portfolio website was created for a writer, artist and game designer using WordPress. Currently in progress, is a custom WordPress theme used to display Dew’s personality to their potential clients.",
            github: null,
            website: null,
          },
          image: {
            name: "the-dewsletter-thumb2.png",
            alt: "The Dewsletter",
          },
          client: "The Dewsletter",
          category: "Web Development",
        },
        {
          modal: {
            id: "projectsModal6",
            project: "Wellness Application",
            image: { name: "refresh2.png", alt: "User Profile" },

            date: "September 2017 - April 2018",
            description:
              "This project was created for Refresh, a local company in Saskatoon as part of a school project during my time at Saskatchewan Polytechnic. The intention of the project was a web application focusing on mental health and awareness and to create a solution that health and wellness providers can utilize to track the history of their patients.<br/><br/>When a user creates an account, each time they log on, they are asked to enter data about their mental well-being for the day. Users have the ability to add information and data about their mental wellness on the website and view their history from previous entries. They can also give friends or wellness professionals permission to view it, to see trends and to pinpoint areas that may need attention or further treatment.<br/><br/>The project was designed and developed in a group of 6 people using Symphony as part of a Final project for a class. The project was never put into production, but the source code is available in my GitHub.",
            github: {
              name: "carmengoetz/wellness-application",
              link: "https://github.com/carmengoetz/wellness-application",
            },
            website: null,
          },
          image: {
            name: "refresh-thumb2.png",
            alt: "Refresh Wellness",
          },
          client: "Refresh",
          category: "Web Development",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.projects {
  &__description {
    color: $blue-jeans;
  }
}
</style>
