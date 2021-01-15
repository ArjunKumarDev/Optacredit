<template>
  <div>
    <h4>Uploaded Documents</h4>
    <div class="upload-table">
      <span>Name</span>
      <span>Type</span>
      <span>Uploaded Date</span>

      <div
        class="upload-table-details"
        v-for="uploadFile in uploadedFiles"
        :key="uploadFile"
      >
        <h4>{{ uploadFile.name }}</h4>
        <h4>{{ uploadFile.type }}</h4>
        <h4>{{ uploadFile.type }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["uploadedFiles"],
  mounted() {
    console.log(this.uploadedFiles.FileList, "props");
  },
};
</script>

<style lang="scss" scoped>
.upload-table {
  min-height: 80%;

  border: 1px solid black;
  padding: 0.5rem 0.5rem;
  margin-top: 1rem;

  span {
    margin-right: 2rem;
    color: #000000;
    width: 232px;
    display: inline-block;
  }

  &-details {
    padding: 0.9rem 0;
    border-bottom: 1px solid #000000;

    h4 {
      color: #000000;
      width: 264px;
      display: inline-block;
    }
  }
}
</style>
