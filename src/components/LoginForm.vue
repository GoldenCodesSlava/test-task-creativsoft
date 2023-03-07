<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>
      <div
        v-if="error"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold mr-1">Ceva nu e bine! </strong>
        <span class="block sm:inline"> {{ error }}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
      </div>
      <div
        v-if="success"
        class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div class="flex">
          <p class="font-bold">{{ success }}</p>
          <button @click="goToProfilePage()" class="ml-3">Profile</button>
        </div>
      </div>
      <form
        v-if="!success"
        @submit.prevent="handleSubmit"
        class="mt-8 space-y-6"
      >
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="username" class="sr-only">Email address</label>
            <input
              id="username"
              name="username"
              type="email"
              autocomplete="username"
              required=""
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              v-model="username"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              v-model="password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-b-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      success: "",
    };
  },
  methods: {
    async handleSubmit() {
      this.error = "";
      this.success = "";
      try {
        const data = {
          username: this.username,
          password: this.password,
        };
        const response = await axios.post(
          `${process.env.VUE_APP_LOGIN_API}/api/v1/authentication`,
          data
        );

        localStorage.setItem("userProfileId", response.data.userProfileId);

        this.getBearerToken(response.data.accessToken);
        this.success = "Logarea a finisat cu succes!";
      } catch {
        this.error = "Invalid username/password";
      }
    },

    async getBearerToken(accessToken) {
      const data = {
        username: this.username,
        accessToken: accessToken,
      };
      const response = await axios.post(
        `${process.env.VUE_APP_LOGIN_API}/api/v1/token`,
        data
      );

      localStorage.setItem("token", response.data.bearerToken);
    },

    goToProfilePage() {
      this.$router.push("/profile");
    },
  },
};
</script>
