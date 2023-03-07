<template>
  <h3 v-if="user">Hi, {{ user.fullName }}</h3>
  <h3 v-if="!user">You are not logged in!</h3>

  <div>Name: {{ user.fullName }}</div>
  <div>Email: {{ user.email }}</div>
  <div>Phone: {{ user.phoneNumber }}</div>
  <div>Company: {{ user.company }}</div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "ProfilePage",
  computed: {
    ...mapGetters(["user"]),
  },
  async created() {
    const response = await axios.get(
      `${
        process.env.VUE_APP_LOGIN_API
      }/api/v1/secured/users-profiles/${localStorage.getItem("userProfileId")}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    this.$store.dispatch("user", response.data.UserProfile);
  },
};
</script>
