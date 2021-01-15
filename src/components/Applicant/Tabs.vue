<template>
  <div class="tab-flex">
    <label
      v-bind:class="{ currentTab: activeTab === tab.id }"
      v-for="tab in tabs"
      :key="tab.id"
      @click="$emit('detect', tab.id)"
      >{{ tab.title }}</label
    >
  </div>
</template>

<script>
export default {
  props: ["tabs", "activeTab"],
};
</script>
<style lang="scss" scoped>
.tab-flex {
  padding: 10px 10px;
  background: #e5e5e5;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  label {
    margin-right: 2.5rem;
    padding-left: 2rem;
    color: #3d3d3d;
    font-size: 1rem;
    cursor: pointer;
  }

  .currentTab {
    color: #1e9a5c;
    font-weight: 600;
  }
}
</style>
