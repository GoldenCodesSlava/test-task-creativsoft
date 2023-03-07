import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuelidate from "vuelidate";
import "./assets/tailwind.css";

createApp(App).use(router, VueAxios, axios, Vuelidate).use(store).mount("#app");
