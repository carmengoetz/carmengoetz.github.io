<template>
  <div class="contact">
    <PageHeader />
    <section>
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Contact Me</h2>
          <h3 class="section-subheading contact__description">
            Get in touch on me for any inquiries you may have!
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form @submit.prevent="sendEmail">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    name="from_name"
                    class="form-control"
                    type="text"
                    placeholder="Your Name *"
                    required="required"
                  />
                  <p class="help-block text-danger" />
                </div>

                <div class="form-group">
                  <input
                    name="from_email"
                    class="form-control"
                    type="email"
                    placeholder="Your Email *"
                    required="required"
                  />
                  <p class="help-block text-danger" />
                </div>
                <div class="form-group">
                  <input
                    name="from_phone"
                    class="form-control"
                    type="tel"
                    pattern="/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im"
                    placeholder="Your Phone"
                  />
                  <p class="help-block text-danger" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea
                    name="message"
                    class="form-control"
                    placeholder="Your Message *"
                    required="required"
                  />
                  <p class="help-block text-danger" />
                </div>
              </div>
              <div class="clearfix" />
              <div class="col-lg-12 text-center">
                <button class="btn btn-primary" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  components: {
    PageHeader,
  },
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_4ysvek7",
          "template_r185rjp",
          e.target,
          "user_20V2lpCRDxS6tEJvEjxAP"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_button.scss";
.contact {
  &__description {
    color: $blue-jeans;
  }
}
.form-group {
  margin-bottom: 25px;
}
input,
textarea {
  padding: 20px;
}

input.form-control {
  height: auto;
}

textarea.form-control {
  height: 248px;
}
.form-control:focus {
  border-color: #9dc5ca;
  -webkit-box-shadow: none;
  box-shadow: none;
}

::-webkit-input-placeholder,
:-moz-placeholder,
::-moz-placeholder,
:-ms-input-placeholder {
  font-weight: 700;
  color: #ced4da;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
