<template>
  <div class="flex-header">
    <div class="title-flex" v-if="windowWidth > 768">
      <span class="title-flex-arrow"> > </span>
      <h4>List of all applications</h4>
      <span class="title-flex-dir"> >> </span>
      <h3 class="title-flex-title">Create New</h3>
    </div>

    <div class="title-flex" v-if="windowWidth <= 768" @click="menuToggle">
      <h1>Optacredit</h1>
      <div class="menuToggle" v-if="navVisible === false"></div>
      <div class="closeMenu" v-if="navVisible === true"></div>
    </div>

    <div>
      <Tabs v-bind:tabs="tabs" v-on:detect="detectTab" :activeTab="activeTab" />
    </div>

    <div class="form-container" v-if="activeTab == 1">
      <DetailsComp
        title="Personal Details"
        v-bind:formDetails="personalDetails"
      />
      <DetailsComp
        title="Identity Details"
        v-bind:formDetails="identityDetails"
      />
      <DetailsComp title="Address" v-bind:formDetails="addressDetails" />
    </div>

    <div class="form-container" v-if="activeTab === 2">
      <DetailsComp
        title="General Information"
        v-bind:formDetails="generalDetails"
      />
      <DetailsComp title="Bank Details" v-bind:formDetails="bankDetails" />
    </div>

    <div class="form-container" v-if="activeTab === 3">
      <DetailsComp title="Refernces" v-bind:formDetails="referenceDetails" />
    </div>

    <div class="form-container" v-if="activeTab === 4">
      <UploadComp title="Documents" />
    </div>
  </div>
</template>

<script>
import Tabs from "./Tabs";
import DetailsComp from "../DetailsComp/DetailsComp";
import UploadComp from "../UploadComp/UploadComp";
export default {
  props: ["menuToggle", "navVisible"],
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      activeTab: 1,
      windowWidth: window.innerWidth,

      tabs: [
        {
          id: 1,
          title: "Personal Details",
        },
        {
          id: 2,
          title: "Additional Details",
        },
        {
          id: 3,
          title: "References",
        },
        {
          id: 4,
          title: "Document Upload",
        },
      ],
      personalDetails: [
        {
          id: 1,
          label: "First Name",
          type: "text",
          value: "",
        },
        {
          id: 2,
          label: "Last Name",
          type: "text",
        },
        {
          id: 3,
          label: "DOB",
          type: "number",
        },
        {
          id: 4,
          label: "Phone",
          type: "number",
        },
        {
          id: 5,
          label: "Tenure",
          type: "text",
        },
        {
          id: 6,
          label: "Gender",
          type: "select",
          options: ["Male", "Female"],
        },
        {
          id: 7,
          label: "Email id",
          type: "email",
        },
        {
          id: 8,
          label: "Loan amount required",
          type: "number",
        },
      ],
      identityDetails: [
        {
          id: 1,
          label: "Permenant account number (PAN)",
          type: "number",
        },
        {
          id: 2,
          label: "Aadhar number",
          type: "number",
        },
        {
          id: 3,
          label: "Voter id",
          type: "number",
        },
        {
          id: 4,
          label: "Voter id state",
          type: "text",
        },
        {
          id: 5,
          label: "Passport",
          type: "number",
        },
        {
          id: 6,
          label: "Driving license state",
          type: "text",
        },
        {
          id: 7,
          label: "Driving License",
          type: "number",
        },
      ],
      addressDetails: [
        {
          id: 1,
          label: "Present address",
          type: "text",
        },
        {
          id: 2,
          label: "City",
          type: "text",
        },
        {
          id: 3,
          label: "State",
          type: "select",
          options: ["Tamilnadu", "Andhra"],
        },
        {
          id: 4,
          label: "Pincode",
          type: "number",
        },
        {
          id: 5,
          label: "Permanent address",
          type: "text",
        },
        {
          id: 6,
          label: "City",
          type: "text",
        },
        {
          id: 7,
          label: "State",
          type: "text",
        },
        {
          id: 8,
          label: "Pincode",
          type: "number",
        },
      ],
      generalDetails: [
        {
          id: 1,
          label: "Employer name",
          type: "text",
        },
        {
          id: 2,
          label: "Office Email",
          type: "email",
        },
        {
          id: 3,
          label: "Total experience",
          type: "number",
        },
        {
          id: 4,
          label: "Office Phone",
          type: "number",
        },
        {
          id: 5,
          label: "Do you have any existing debt?",
          type: "text",
        },
      ],
      bankDetails: [
        {
          id: 1,
          label: "Bank account number",
          type: "number",
        },
        {
          id: 2,
          label: "Branch name",
          type: "text",
        },
        {
          id: 3,
          label: "IFSC code",
          type: "number",
        },
        {
          id: 4,
          label: "Bank name",
          type: "text",
        },
      ],
      referenceDetails: [
        {
          id: 1,
          label: "Reference name 1",
          type: "text",
        },
        {
          id: 2,
          label: "Address",
          type: "text",
        },
        {
          id: 3,
          label: "Phone number",
          type: "number",
        },
        {
          id: 4,
          label: "City",
          type: "text",
        },
        {
          id: 5,
          label: "State",
          type: "text",
        },
        {
          id: 6,
          label: "Pincode",
          type: "number",
        },
        {
          id: 7,
          label: "Reference name 2",
          type: "text",
        },
        {
          id: 8,
          label: "Address",
          type: "text",
        },
        {
          id: 9,
          label: "Phone number",
          type: "number",
        },
        {
          id: 10,
          label: "City",
          type: "text",
        },
        {
          id: 11,
          label: "State",
          type: "text",
        },
        {
          id: 12,
          label: "pincode",
          type: "number",
        },
      ],
    };
  },
  components: {
    Tabs,
    DetailsComp,
    UploadComp,
  },

  methods: {
    detectTab(tabId) {
      this.activeTab = tabId;
    },

    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
<style lang="scss" scoped>
$bg-green-dark: rgba(24, 161, 131, 1);

.form-container {
  height: 100vh;
  overflow-y: scroll;
}
.flex-header {
  width: 100%;
}
.title-flex {
  display: flex;
  padding: 15px 20px;
  width: 100%;
  border-bottom: 1px solid whitesmoke;
  height: 100px;
  align-items: center;

  .menuToggle {
    width: 30px;
    height: 30px;
    background: url("../../assets/menu.png");
    background-repeat: none;
    cursor: pointer;
  }

  .closeMenu {
    width: 30px;
    height: 30px;
    background-size: 25px;
    background: url("../../assets/close.png");
    background-repeat: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    color: white;
    background: linear-gradient(to right, #18a183, #20b26b);
  }

  @media (max-width: 715px) {
    padding: 10px 15px;
  }

  @media (max-width: 600px) {
    display: flex;
  }

  &-arrow {
    margin-right: 1rem;
    transform: rotate(180deg);
    background-color: #18a183;
    height: 30px;
    width: 30px;
    border-radius: 50px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
  }

  h4 {
    color: #cccccc;
    margin-right: 0.6rem;
    font-weight: 300;
  }

  &-dir {
    color: #18a183;
    margin-right: 0.5rem;
    font-size: 20px;
    font-weight: 600;
  }

  &-title {
    color: #18a183;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
}
</style>
