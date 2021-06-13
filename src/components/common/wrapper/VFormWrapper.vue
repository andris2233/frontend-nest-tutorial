<template>
  <form
    class="form"
    @submit.prevent="$emit('success')"
  >
    <h3 v-if="$slots.header" class="form__header">
      <slot name="header" />
    </h3>

    <div
      class="form__content"
      :class="{ 'form__content-default': isDefault }"
    >
      <slot name="content" />
    </div>

    <div
      v-if="$slots.buttons"
      class="form__buttons-section"
    >
      <slot name="buttons" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'VFormWrapper',
  props: {
    isDefault: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .form {
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: rgba($color: $color_white, $alpha: 0.5);
    border-radius: 5px;
    min-width: 450px;
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.1);

    &__header {
      margin-bottom: 35px;
      color: $color_dark_text;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
    }

    &__content {

      &-default {
        display: flex;
        flex-direction: column;

        & > *:nth-child(n):not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }

    &__buttons-section {
      margin-top: 25px;
    }
  }
</style>
