<template>
  <form @submit.prevent="submit()">
    <p v-if="errorMessage" class="error">{{ this.errorMessage }}</p>
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button type="submit">Log in</button>
  </form>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: ""
    }
  },

  methods: {
    submit() {
      this.$emit("submit", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
.error { color: tomato; }
</style>
