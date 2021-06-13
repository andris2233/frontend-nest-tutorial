<template>
  <VFormWrapper
    @success="onSuccess"
  >
    <template #header>
      {{ headerText }}
    </template>

    <template #content>
      <VInput
        v-model="email"
        placeholder="Введите email"
        required
      />

      <VInput
        v-model="password"
        placeholder="Введите пароль"
        required
        input-type="password"
      />
    </template>

    <template #buttons>
      <div class="buttons">
        <VButton
          type-component="link"
          class="buttons__registry"
          @click="isRegistry = !isRegistry"
        >
          {{ linkText }}
        </VButton>
        <VButton
          type-component="fill"
          :disabled="!email || !password"
        >
          {{ buttonText }}
        </VButton>
      </div>
    </template>
  </VFormWrapper>
</template>

<script>
import VInput from '@/components/common/VInput.vue';
import VFormWrapper from '@/components/common/wrapper/VFormWrapper.vue';
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'TheLoginForm',
  components: {
    VInput,
    VFormWrapper,
    VButton,
  },
  data() {
    return {
      email: '',
      password: '',
      isRegistry: false,
    };
  },
  computed: {
    headerText() {
      return this.isRegistry ? 'Регистрация' : 'Авторизация';
    },
    linkText() {
      return this.isRegistry ? 'Авторизация' : 'Регистрация';
    },
    buttonText() {
      return this.isRegistry ? 'Зарегистрироваться' : 'Войти';
    },
  },
  methods: {
    onSuccess() {
      const { email, password } = this;
      this.$emit('login', { email, password });
      this.email = '';
      this.password = '';
    },
  },
  created() {
    const { type } = this.$route.query;
    this.isRegistry = type && type === 'registration';
  },
};
</script>

<style lang="scss" scoped>
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__registry {
      margin-bottom: 20px;
    }
  }
</style>
