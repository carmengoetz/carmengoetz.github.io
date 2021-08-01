<template>
  <section class="contact">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading">Contact Me</h2>
        <h3 class="section-subheading contact__description">
          Get in touch with me for any inquiries you may have! I look forward to hearing
          from you soon.
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
                  class="form-control form-control__input"
                  type="text"
                  placeholder="Name *"
                  required="required"
                  v-model="form.name"
                />
                <p class="help-block text-danger" />
              </div>

              <div class="form-group">
                <input
                  name="from_email"
                  class="form-control form-control__input"
                  type="email"
                  placeholder="Email *"
                  required="required"
                  v-model="form.email"
                />
                <p class="help-block text-danger" />
              </div>
              <div class="form-group">
                <input
                  name="from_phone"
                  class="form-control form-control__input"
                  type="tel"
                  pattern="/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im"
                  placeholder="Phone Number"
                  v-model="form.phone"
                />
                <p class="help-block text-danger" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  name="message"
                  class="form-control form-control__text"
                  placeholder="Message *"
                  required="required"
                  v-model="form.message"
                />
                <p class="help-block text-danger" />
              </div>
            </div>
            <div class="clearfix" />
            <div class="col-lg-12 text-center">
              <button class="button" type="submit" :disabled="!formIsValid">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  components: {},
  data() {
    const defaultForm = Object.freeze({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    return {
      form: Object.assign({}, defaultForm),
      defaultForm,
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.name &&
        this.form.email &&
        /.+@.+/.test(this.form.email) &&
        this.form.message
      );
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
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
            alert("Message Sent!");
            this.resetForm();
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            alert("There was a problem sending your message, please try again");
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

.form-control {
  padding: 20px;
  color: $blue-jeans;
  font-family: $font-primary;
  border-radius: 0;
  border: 2px solid $dark-orchid;
  background-color: transparent;
  letter-spacing: 2px;

  &::placeholder {
    color: $blue-jeans;
  }

  &__input {
    height: auto;
  }

  &__text {
    height: 234px;
  }

  &:focus {
    border-color: $orchid;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: transparent;
  }
}
</style>
