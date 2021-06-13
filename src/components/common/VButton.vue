<template>
  <button
    v-if="!to"
    :type="typeButton"
    :disabled="disabled"
    :class="classes"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
  <router-link
    v-else
    :to="to"
    :class="classes"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    to: {
      type: [Object, String],
      default: '',
    },
    typeButton: {
      type: String,
      default: 'submit',
      validator: (val) => ['submit', 'button', 'reset'].includes(val),
    },
    typeComponent: {
      type: String,
      default: 'fill',
      validator: (val) => ['fill', 'outline', 'link'].includes(val),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const classes = ['button', `button_${this.typeComponent}`];
      if (this.typeComponent === 'link' && this.isActive) {
        classes.push('button_link-active');
      }
      return classes;
    },
  },
};
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    outline: none;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    &:disabled {
      opacity: 0.8;
    }

    &_link {
      color: $color_blue;
      padding: 0 0 10px 0;
      position: relative;
      overflow: hidden;
      transition: color 0.3s ease;

      &:hover {
        color: $color_blue_light;
        &::before {
          // transform: translateX(0);
          background-color: $color_blue_light;
        }
      }

      &::before {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        background-color: $color_blue;
        height: 2px;
      }

      &-active::before {
        transform: translateX(0);
      }
    }

    &_fill, &_outline {
      border-radius: 18px;
      box-shadow: 0 0 3px $color_blue;
      padding: 10px 40px;
      transition: all 0.3s ease;

      &:active {
        transform: scale(0.9);
      }
    }

    &_outline {
      color: $color_blue;
      background-color: $color_white;

      &:hover:not(:disabled) {
        color: $color_blue_light;
        box-shadow: 0 0 5px $color_blue_light;
      }
    }

    &_fill {
      color: $color_white;
      background-color: $color_blue;

      &:hover:not(:disabled) {
        background-color: $color_blue_light;
      }
    }
  }
</style>
