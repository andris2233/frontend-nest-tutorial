<template>
  <label
    class="input"
    :style="{ 'max-width': maxWidth }"
  >
    <span
      v-if="$slots.title"
      class="input__title"
      :class="{ 'input__title_error': false }"
    >
      <span class="input__title-required">*</span>
      <slot name="title" />
    </span>
    <div
      :class="{
        'input__inner-required': required && !$slots.title,
        'input__inner-focused': focus,
        'input__inner-error': false,
      }"
      class="input__inner"
    >
      <input
        :value="value"
        :type="inputType"
        :disabled="disabled"
        :required="required"
        :placeholder="placeholder"
        class="input__inner-item"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
      >
      <transition name="close">
        <button
          v-if="isClear && value"
          class="input__inner-close material-icons"
          @click="onClear"
        >
          close
        </button>
      </transition>
    </div>
  </label>
</template>

<script>
export default {
  name: 'VInput',
  model: {
    prop: 'value',
    event: 'input',
  },
  data() {
    return {
      focus: false,
    };
  },
  props: {
    value: {
      required: true,
    },
    inputType: {
      type: String,
      default: 'text',
      validator: (type) => ['text', 'number'].includes(type),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isClear: {
      type: Boolean,
      default: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    maxWidth: {
      type: String,
      default: '100%',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  methods: {
    setValue(value) {
      this.$emit('input', value);
    },
    onInput($event) {
      this.setValue($event.target.value);
    },
    onFocus($event) {
      this.focus = true;
      this.$emit('focus', $event);
    },
    onBlur($event) {
      this.focus = false;
      this.$emit('blur', $event);
    },
    onClear() {
      this.setValue('');
    },
  },
};
</script>

<style lang="scss" scoped>
  .input {
    display: flex;
    flex-direction: column;

    &__title {
      font-size: 1.2rem;
      margin-bottom: 2px;

      &-required {
        color: $color_error;
      }

      &_error {
        color: $color_error;
      }
    }

    &__inner {
      position: relative;
      display: flex;
      align-items: center;
      border-radius: 5px;
      background-color: $color_light_gray;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;

      &-required {
        &:before {
          content: '*';
          font-size: 1.2rem;
          color: $color_error;
          position: absolute;
          left: -12px;
          top: -3px;
        }
      }

      &-focused {
        background-color: $color_white;
        box-shadow: inset 0 0 5px $color_light_gray;
      }

      &-item {
        border: 0;
        outline: none;
        font-size: 1.2rem;
        background-color: transparent;
        padding: 10px 7px;
      }

      &-close {
        position: absolute;
        top: 50%;
        right: 3px;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        opacity: 1;
        border: 0;
        outline: none;
        background-color: transparent;
        color: $color_lighter_dark;
        transition: color 0.2s ease, opacity 0.2s ease;

        &_hidden {
          opacity: 0;
          cursor: auto;
        }

        &:hover {
          color: $color_black;
        }
      }
    }
  }

  .close-enter-active, .close-leave-active {
    transition: opacity 0.2s;
  }
  .close-enter, .close-leave-to {
    opacity: 0;
}
</style>
