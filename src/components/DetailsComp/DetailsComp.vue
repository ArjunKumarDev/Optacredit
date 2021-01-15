<template>
  <div class="detail-form-container">
    <div class="detail-form">
      <h4>{{ title }}</h4>
      <div class="title-highlight"></div>
      <div class="detail-form-inputs">
        <div v-for="detail in formDetails" :key="detail.id">
          <!-- Input or Select condition !-->

          <div v-if="detail.type == 'select'">
            <select class="select-type">
              <option v-for="option in detail.options" :key="option">{{
                option
              }}</option>
            </select>
          </div>

          <div v-if="detail.type == 'text'">
            <input :type="detail.type" v-model="detail.value" />
            <label for="first">{{ detail.label }}</label>
          </div>

          <div v-if="detail.type == 'email'">
            <input :type="detail.type" v-model="detail.value" />
            <label for="first">{{ detail.label }}</label>
          </div>

          <div v-if="detail.type == 'number'">
            <input :type="detail.type" v-model="detail.value" />
            <label for="first">{{ detail.label }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "formDetails"],
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

.detail-form-container:last-child {
  margin-bottom: 165px;
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
  &-inputs {
    margin-top: 2rem;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    input,
    .select-type {
      width: 75%;
      margin-right: 15px;
      margin-bottom: 2rem;
      padding: 10px 0;
      border-right: none;
      border-left: none;
      border-top: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      outline: none;

      @media (max-width: 800px) {
        width: 100%;
      }
    }

    input,
    :focus {
      outline: none;
      border-color: #1e9a5c;
    }

    label {
      display: block;
      transform: translate(0, -3.75rem);
      position: absolute;
      transition: all 0.2s;
      font-size: 0.9rem;
      text-transform: uppercase;

      @media (max-width: 800px) {
        font-size: 0.8rem;
      }
    }

    input:focus + label {
      color: #111;
      transform: translate(0, -5.25rem);
    }
  }
}
</style>
