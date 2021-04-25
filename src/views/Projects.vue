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
      <div class="row projects__items">
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
            project: "My portfolio.",
            image: {
              name: "carmen-goetz2.png",
              alt: "Carmen Goetz",
            },
            date: "March 2021",
            description:
              "A website portfolio that showcased my creativity, talent and technical knowledge. Displayed on this website are some of the projects that I am proud to have worked on. This website was created using Vue.js, Vue Router and Bootstrap. I envisioned this website to express my personality and my passion for front-end web development. The logo for my website was designed and created by <a href='https://www.creativereyne.ca' target='_blank'>Creative Reyne</a>.",
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
            id: "projectsModal2",
            project: "Wellness Application",
            image: { name: "refresh2.png", alt: "User Profile" },

            date: "September 2017 - April 2018",
            description:
              "This project was created for Refresh, a local company in Saskatoon as part of a school project during my time at Saskatchewan Polytechnic. The intention of the project was a web application focusing on mental health and awareness and to create a solution that health and wellness providers can utilize to track the history of their patients.<br/><br/>When a user creates an account, each time they log on, they are asked to enter data about their mental well-being for the day. Users have the ability to add information and data about their mental wellness on the website and view their history from previous entries. They can also give friends or wellness professionals permission to view it, to see trends and to pinpoint areas that may need attention or further treatment.<br/><br/>The project was designed and developed in a group of 6 people using Symphony as part of a Final project for a class. The project was never put into production, but the source code is available in my GitHub.",
          },
          image: {
            name: "refresh-thumb2.png",
            alt: "Refresh Wellness",
          },
          client: "Refresh",
          category: "Web Development",
        },
        {
          modal: {
            id: "projectsModal3",
            project: "Portfolio for writer, artists, game designer",
            image: {
              name: "the-dewsletter.png",
              alt: "The Dewsletter",
            },
            date: "In Progress",
            description:
              "This portfolio website was created for a writer, artist and game designer using WordPress. Currently in progress, is a custom WordPress theme used to display Dew’s personality to their potential clients.",
          },
          image: {
            name: "the-dewsletter-thumb2.png",
            alt: "The Dewsletter",
          },
          client: "The Dewsletter",
          category: "Web Development",
        },
        // Not ready to be displayed
        // {
        //   modal: {
        //     id: "projectsModal4",
        //     project: "Portfolio for Graphic and Web Designer",
        //     image: {
        //       name: "creative-reyne.png",
        //       alt: "Creative Reyne",
        //     },
        //     date: "In Progress",
        //     description: "",
        //   },
        //   image: {
        //     name: "creative-reyne-thumb.gif",
        //     alt: "Creative Reyne",
        //   },
        //   client: "Creative Reyne",
        //   category: "Web Development",
        // },
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
