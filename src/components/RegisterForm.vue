<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Register
        </h2>
      </div>
      <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
        <div class="form-step" v-show="step === 1">
          <div class="-space-y-px shadow-sm">
            <div class="relative">
              <label for="email" class="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="relative block w-full appearance-none rounded mb-8 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                v-model="email"
              />
              <p
                v-for="error of v$.email.$errors"
                :key="error.$uid"
                class="text-left absolute -bottom-6 text-sm"
              >
                {{ error.$message }}
              </p>
            </div>
            <div class="relative">
              <label for="fullName" class="sr-only">Full name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autocomplete="fullName"
                required=""
                class="relative block w-full rounded mb-8 appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Full name"
                v-model="fullName"
              />
              <p
                v-for="error of v$.fullName.$errors"
                :key="error.$uid"
                class="text-left absolute -bottom-6 text-sm"
              >
                {{ error.$message }}
              </p>
            </div>
            <div class="relative">
              <label for="phoneNumber" class="sr-only">Phone Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                autocomplete="phoneNumber"
                required=""
                class="relative block w-full rounded mb-8 appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Phone Number"
                v-model="phoneNumber"
              />
              <p
                v-for="error of v$.phoneNumber.$errors"
                :key="error.$uid"
                class="text-left absolute -bottom-6 text-sm"
              >
                {{ error.$message }}
              </p>
            </div>
            <div class="relative">
              <label for="countryCode" class="sr-only">Country</label>
              <select
                id="countryCode"
                name="countryCode"
                class="relative block w-full rounded mb-8 appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                v-model="countryCode"
              >
                <option value="" disabled hidden>Select Country</option>
                <option value="RO">Romania</option>
                <option value="MD">Moldova</option>
              </select>
            </div>
            <div class="relative">
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="password"
                class="relative block w-full rounded mb-8 appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                v-model="password"
              />
              <p
                v-for="error of v$.password.$errors"
                :key="error.$uid"
                class="text-left absolute -bottom-6 text-sm"
              >
                {{ error.$message }}
              </p>
            </div>
            <div class="relative">
              <label for="confirmPassword" class="sr-only"
                >Confirm Password</label
              >
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                class="relative block w-full mb-12 appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Confirm Password"
                v-model="confirmPassword"
              />
              <div class="absolute -bottom-10">
                <p
                  v-for="error of v$.confirmPassword.$errors"
                  :key="error.$uid"
                  class="text-left text-sm"
                >
                  {{ error.$message }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between mt-3 mb-3">
            <div class="flex items-center relative">
              <input
                id="agreeWithTerms"
                name="agreeWithTerms"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                v-model="agreeWithTerms"
              />
              <label
                for="agreeWithTerms"
                class="ml-2 block text-sm text-gray-900"
                >Terms agree</label
              >
              <p
                v-for="error of v$.agreeWithTerms.$errors"
                :key="error.$uid"
                class="text-left ml-3 text-sm"
              >
                {{ error.$message }}
              </p>
            </div>
          </div>
          <div>
            <button
              @click="nextStep"
              type="button"
              class="group relative flex w-full justify-center rounded-b-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Next
            </button>
          </div>
        </div>
        <div class="form-step" v-show="step === 2">
          <div>
            <label for="companySize" class="sr-only">Company Size</label>
            <select
              id="companySize"
              name="companySize"
              class="relative block w-full mb-8 appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              v-model="companySize"
            >
              <option value="" disabled hidden>Select Company Size</option>
              <option value="0-10">0-10</option>
              <option value="11-50">11-50</option>
            </select>
          </div>
          <div class="relative">
            <label for="companyName" class="sr-only">Company name</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              autocomplete="companyName"
              required=""
              class="relative block w-full appearance-none border mb-8 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Company name"
              v-model="companyName"
            />
            <p
              v-for="error of v$.agreeWithTerms.$errors"
              :key="error.$uid"
              class="absolute text-left ml-3 text-sm"
            >
              {{ error.$message }}
            </p>
          </div>
          <div>
            <label for="jobRole" class="sr-only">Job Role</label>
            <select
              id="jobRole"
              name="jobRole"
              class="relative block w-full mb-8 appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              v-model="jobRole"
            >
              <option value="" disabled hidden>Select Job Role</option>
              <option
                v-for="role in jobRoles"
                :key="role.name"
                value="{{role.name}}"
              >
                {{ role.name }}
              </option>
              <option value="11-50">11-50</option>
            </select>
          </div>
          <div>
            <button
              @click="prevStep"
              type="button"
              class="group relative flex w-full justify-center rounded-t-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Prev
            </button>
          </div>
          <div>
            <button
              type="submit"
              class="group relative flex w-full justify-center rounded-b-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign Up
            </button>
          </div>
          <div class="errors mt-2">
            <p>{{ serverError }}</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, sameAs, helpers } from "@vuelidate/validators";
import axios from "axios";
export default {
  name: "RegisterForm",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      email: "",
      fullName: "",
      phoneNumber: "",
      countryCode: "",
      password: "",
      confirmPassword: "",
      agreeWithTerms: "",
      step: 1,
      // jobRoles: this.getJobRoles,
      jobRoles: [{ name: "Director" }, { name: "HR" }, { name: "Manager" }],
      jobRole: "",
      companyName: "",
      serverError: "",
    };
  },
  methods: {
    prevStep() {
      this.step--;
    },
    async nextStep() {
      const result = await this.v$.$validate();
      console.log(this.v$);
      if (!result) {
        return;
      }
      this.step++;
    },
    async handleSubmit() {
      const data = {
        email: this.email,
        fullName: this.fullName,
        phoneNumber: this.phoneNumber,
        countryCode: this.countryCode,
        confirmPassword: this.confirmPassword,
        password: this.password,
        agreeWithTerms: this.agreeWithTerms,
        company: this.companyName,
        profession: this.jobRole,
      };
      try {
        await axios.post(
          `${process.env.VUE_APP_LOGIN_API}/api/v1/register`,
          data
        );

        this.$router.push("/login");
      } catch (e) {
        this.serverError = e.response.data.error;
      }
    },
    // async getJobRoles() {
    //   const response = await axios.get(
    //     `${process.env.VUE_APP_JOB_API}/api/job_roles?page=1&itemsPerPage=25`,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         mode: "cors",
    //       },
    //     }
    //   );

    //   console.log(response.data);

    //   return response.data;
    // },
  },
  validations() {
    return {
      fullName: { required },
      phoneNumber: { required },
      email: { required, email },
      password: {
        required: required,
        goodPassword: helpers.withMessage("Invalid password", (password) => {
          return (
            password.length >= 8 &&
            /[a-z]/.test(password) &&
            /[A-Z]/.test(password) &&
            /[0-9]/.test(password)
          );
        }),
      },
      confirmPassword: {
        required: required,
        sameAs: sameAs(this.password),
      },
      agreeWithTerms: { required },
    };
  },
};
</script>
