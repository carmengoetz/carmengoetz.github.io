<template>
  <div class="whoops"></div>
</template>

<script>
export default {
  name: "Whoops",
};
</script>

<style scoped lang="scss">
.whoops {
  background-color: white;
  padding-top: -50px;
  margin-top: 50px;
}

.btn {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
}

.btn-xl {
  font-size: 18px;
  padding: 20px 40px;
}

.btn-primary {
  background-color: #265f65;
  border-color: #265f65;
}

.btn-primary:active,
.btn-primary:focus,
.btn-primary:hover {
  background-color: #265f65 !important;
  border-color: #265f65 !important;
  color: white;
}

.btn-primary:active,
.btn-primary:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(38, 95, 101, 0.5) !important;
  box-shadow: 0 0 0 0.2rem rgba(38, 95, 101, 0.5) !important;
}
</style>
