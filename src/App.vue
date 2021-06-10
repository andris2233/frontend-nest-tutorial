<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  async created() {
    const users = await this.$api.users.getAll();
    console.log(users);
  },
};
</script>

<style lang="scss" scoped>
  #app {
    background: #333;
  }
</style>
