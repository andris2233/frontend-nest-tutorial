<template>
  <LayoutLogin>
    <TheLoginForm
      @login="onLogin"
    />
  </LayoutLogin>
</template>

<script>
import LayoutLogin from '@/layout/LayoutLogin.vue';
import TheLoginForm from '@/components/login/TheLoginForm.vue';

export default {
  name: 'PageLogin',
  components: {
    LayoutLogin,
    TheLoginForm,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async onLogin(form) {
      await this.$store.dispatch('auth/login', form);
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
