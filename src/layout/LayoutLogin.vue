<template>
  <section class="login">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'LayoutLogin',
};
</script>

<style lang="scss" scoped>
  .login {
    min-height: 100vh;
    background: linear-gradient(#e66465, #9198e5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
