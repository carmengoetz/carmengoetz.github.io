<template>
  <div class="projects">
    <section>
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
              link: "https://spencerkripsmusic.com",
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
              link: "https://carmengoetz.ca",
            },
          },
          image: {
            name: "carmen-goetz-thumb2.png",
            alt: "Carmen Goetz",
          },
          client: "Carmen Goetz",
          category: "Web Development",
        },
      ],
    };
  },
};
</script>
