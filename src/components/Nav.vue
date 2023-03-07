<template>
  <nav>
    <button v-if="user" @click="goToProfilePage()">Profile</button>
    <button v-if="!user" @click="goToLoginPage()">Login</button>
    <button v-if="user" @click="logout()">Logout</button>
    <button v-if="!user" @click="goToRegisterPage()">Register</button>
  </nav>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
}

nav button {
  font-weight: bold;
  color: #2c3e50;
}

nav button.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavComponent",
  methods: {
    goToLoginPage() {
      this.$router.push("/login");
    },
    goToRegisterPage() {
      this.$router.push("/register");
    },
    goToProfilePage() {
      this.$router.push("/profile");
    },
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
