<template>
  <div class="applicant-flex">
    <Sidebar v-bind:navVisible="navVisible" />
    <ApplicantHeader
      v-bind:navVisible="navVisible"
      v-bind:menuToggle="menuToggle"
    />
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import ApplicantHeader from "./ApplicantHeader";

export default {
  components: {
    Sidebar,
    ApplicantHeader,
  },

  data() {
    return {
      navVisible: false,
    };
  },

  methods: {
    menuToggle() {
      this.navVisible = !this.navVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.applicant-flex {
  display: flex;
}
</style>
