import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login";
import Home from "../views/Home";
import ForgotPassword from "../components/ForgotPassword";

import Application from "../components/Applicant/Application";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/forgotpassword",
    name: "Forgot",
    component: ForgotPassword,
  },
  {
    path: "/application",
    name: "Application",
    component: Application,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
