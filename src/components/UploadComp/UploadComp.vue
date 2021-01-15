<template>
  <div class="detail-form-container">
    <div class="detail-form">
      <h4>{{ title }}</h4>
      <div class="title-highlight"></div>
      <div class="upload-container">
        <!-- Upload Comp -->
        <div
          class="div1"
          v-for="(upload, idx) in totalUploads"
          :key="idx"
          @click="openUpload(idx)"
        >
          <div class="img-container">
            <div v-if="uploadedFiles.length === 0" class="img-container">
              <img
                src="../../assets/cloud-computing.png"
                alt="upload"
                class="img-upload"
              />
              <span>Upload Document</span>
            </div>

            <div
              v-if="uploadedFiles[upload - 1].fileName === null"
              class="img-container"
            >
              <img
                src="../../assets/cloud-computing.png"
                alt="upload"
                class="img-upload"
              />
              <span>Upload Document</span>
            </div>

            <div v-if="uploadedFiles[upload - 1].fileName !== null">
              <img
                v-bind:src="uploadedFiles[upload - 1].fileName"
                alt="uploadssss"
                class="img-preview"
              />
            </div>
          </div>
          <input
            type="file"
            class="hideFile"
            id="file-field"
            @change="onFileChange"
          />
        </div>
        <!-- Upload Comp Ends -->
        <div class="div2" @click="incrementUploads">
          <div class="img-container">
            <img src="../../assets/add.png" alt="upload" class="img-upload" />
            <span>Add New</span>
          </div>
        </div>
      </div>
      <div v-if="selectedFiles.length > 0">
        <PreviewComp v-bind:uploadedFiles="selectedFiles" />
      </div>
    </div>
  </div>
</template>

<script>
import PreviewComp from "../PreviewComp/PreviewComp";
export default {
  props: ["title"],
  components: {
    PreviewComp,
  },

  data() {
    return {
      totalUploads: 1,
      imagePreview: "",
      selectedFiles: [],
      selectedIndex: null,
      uploadedFiles: [{ fileName: null }],
    };
  },
  methods: {
    incrementUploads() {
      this.totalUploads = this.totalUploads + 1;
      this.uploadedFiles.unshift({ fileName: null });

      console.log(this.uploadedFiles, "filenames");
    },

    openUpload(d) {
      this.selectedIndex = d;
      document.getElementById("file-field").click();
    },

    onFileChange(e) {
      var files = e.target.files;
      var reader = e.target.files;

      console.log(files, "files");
      this.selectedFiles.push(files[0]);

      console.log(this.selectedFiles, "selected");

      if (files.length === 0) {
        console.log("empty");
      }

      reader = new FileReader();

      reader.onload = (e) => {
        console.log(e);
        this.imagePreview = e.target.result;
        // this.uploadedFiles.unshift({ fileName: this.imagePreview });

        this.uploadedFiles[this.selectedIndex].fileName = this.imagePreview;

        // this.uploadedFiles.splice(this.selectedIndex, 0, {
        //   fileName: this.imagePreview,
        // });

        console.log(this.uploadedFiles, "sdf");
      };

      reader.readAsDataURL(files[0]);
    },
  },
};
</script>
<style lang="scss" scoped>
.detail-form-container {
  margin: 50px 30px;
  border-radius: 4px;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    margin: 30px 30px;
  }
}

.detail-form {
  padding: 20px 40px;

  .title-highlight {
    border: none;
    border-bottom: 1px solid #1e9a5c;
    width: 78px;
    border-width: 2px;
    margin-top: 0.4rem;
  }

  h4 {
    color: #1e9a5c;
    text-transform: uppercase;
    display: inline-block;
  }

  .hideFile {
    display: none;
  }

  .upload-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2.6rem;
    padding-bottom: 5rem;
  }
  .div1,
  .div2 {
    width: 179px;
    height: 159px;
    margin-right: 2rem;
    margin-bottom: 2rem;
    border: 2px dashed #cccccc;
    border-radius: 17px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-upload {
    height: 50px;
    width: 50px;
  }

  .img-preview {
    height: 100px;
    width: 100px;
  }
  .img-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      color: #a4a4a4;
    }
  }
}
</style>
