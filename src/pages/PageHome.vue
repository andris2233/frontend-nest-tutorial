<template>
  <section class="home">
    <button @click="onLogout">
      logout
    </button>
  </section>
</template>

<script>
export default {
  name: 'PageHome',
  methods: {
    onLogout() {
      this.$store.dispatch('auth/logout');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
