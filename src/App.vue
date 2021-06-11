<template>
  <section id="app">
    <section class="user">
      <form
        class="user__form"
        @submit.prevent="createUser"
      >
        <h2 class="user__form-header">Add user</h2>
        <input
          v-model="form.email"
          type="text"
          placeholder="email"
        >
        <input
          v-model="form.password"
          type="password"
          placeholder="password"
        >
        <button
          :disabled="disableButton"
          type="submit"
        >
          Add user
        </button>
      </form>
      <div class="user__list">
        <div
          v-for="user in users"
          :key="user.id"
          class="user__list-item"
        >
          {{ user }}
        </div>
      </div>
    </section>
  </section>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    form: {
      email: 'user@jwt2.com',
      password: '1234567',
    },
    users: [],
  }),
  computed: {
    disableButton() {
      return !this.form.email || !this.form.password;
    },
  },
  methods: {
    async createUser() {
      const { email, password } = this.form;
      // const newUser = await this.$api.users.create({ email, password });
      // this.users.push(newUser);

      this.$store.dispatch('auth/login', { email, password });

      this.clearForm();
    },

    clearForm() {
      this.form.email = '';
      this.form.password = '';
    },
  },
  async created() {
    const users = await this.$api.users.getAll();
    this.users = users;
  },
};
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  #app {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: sans-serif;
  }

  .user {
    display: flex;
    align-items: flex-start;
    padding: 30px;
    &__form {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-between;
      box-shadow: 0 0 10px #dadada;
      padding: 20px;
      min-height: 200px;
      width: 300px;
      border-radius: 15px;
      &-header {
        text-align: center;
        margin: 0;
      }
    }
    &__list {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      &-item {
        padding: 10px;
      }
    }
  }

</style>
