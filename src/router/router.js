import { createRouter, createWebHashHistory } from "vue-router";
import Profile from "../components/Profile.vue";
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";

const routes = [
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Profile,
  },
  {
    path: "/login",
    component: LoginForm,
  },
  {
    path: "/register",
    component: RegisterForm,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes,
});

export default router;
