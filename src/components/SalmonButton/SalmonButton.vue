<template>
  <button
    class="salmon-button"
    :disabled="isDisabled"
    :class="{
      'salmon-button--based': isBased,
      'salmon-button--loading': isLoading,
      'salmon-button--secondary': isSecondary,
      'salmon-button--red': isRed,
      'salmon-button--red_middle': isRedMiddle,
      'salmon-button--small': isSmall,
      'salmon-button--stretched': isStretched,
      'salmon-button--transperent': isTransperent,
      'salmon-button--inactive': isInactive,
      'salmon-button--borderless': isBorderless,
    }"
    @click="click"
    @touchstart="click"
  >
    <span v-if="$slots.icon" class="salmon-button__icon">
      <slot name="icon" />
    </span>
    <span class="salmon-button__title"><slot /></span>
    <transition>
      <div v-show="isLoading" class="salmon-button__loader">
        <div class="salmon-button__loader-dot"></div>
        <div class="salmon-button__loader-dot"></div>
        <div class="salmon-button__loader-dot"></div>
      </div>
    </transition>
  </button>
</template>

<script>
export default {
  name: 'SalmonButton',
  props: {
    route: {
      type: [Object, String],
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {},
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isTransperent: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isBased: {
      type: Boolean,
      default: false,
    },
    isSecondary: {
      type: Boolean,
      default: false,
    },
    isRed: {
      type: Boolean,
      default: false,
    },
    isRedMiddle: {
      type: Boolean,
      default: false,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    isStretched: {
      type: Boolean,
      default: false,
    },
    isInactive: {
      type: Boolean,
      default: false,
    },
    isBorderless: {
      type: Boolean,
      default: false,
    },
    isWindowLocation: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['click'],
  data() {
    return {}
  },
  methods: {
    click() {
      if (this.route) {
        if(this.isWindowLocation){
          window.location.pathname = this.route
        }
        else {
          this.$router.push(this.route)
        }
      }
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss">
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  90% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(0.5);
  }
}

.salmon-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: 40px;

  padding-left: 15px;
  padding-right: 20px;

  background-color: var(--ved-main-color, #4f99af);
  border: 1px solid transparent;
  cursor: pointer;
  text-align: center;
  position: relative;
  transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out;
  margin: 0;
  border-radius: 2px;
  outline: none;

  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
    border: 1px solid #b1aca9;
    & .salmon-button__title {
      color: #b1aca9;
    }
  }

  &:not(:disabled):hover {
    background-color: var(--ved-main-dark-color, color('green', 'dark'));
  }

  &:not(:disabled):active {
    background-color: #7fb9cc;
  }
}

.salmon-button--stretched {
  width: 100%;
}

.salmon-button--disabled {
  border: 1px solid black;
  background-color: #fff;
  color: color('gray', 'dark');
  cursor: not-allowed;
}

.salmon-button--secondary {
  background: transparent;
  border-color: #000;

  .salmon-button__title {
    color: #000;
  }

  .salmon-button__loader-dot {
    background-color: #000;
  }

  &:disabled {
    background-color: transparent;
    border-color: #e0e0e0;
    .salmon-button__title {
      color: #e0e0e0;
    }
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background-color: transparent;
    .salmon-button__title {
      color: #000;
      text-decoration: underline;
    }
  }
  &:not(:disabled):active {
    background-color: transparent;
    .salmon-button__title {
      color: #000;
      text-decoration: underline;
    }
  }
}

.salmon-button--red {
  background-color: #ff7a7a;
  &.salmon-button--secondary {
    border-color: #ff7a7a;
    background: transparent;
    .salmon-button__title {
      color: #ff7a7a;
    }
  }

  &:not(:disabled):hover {
    background-color: #ce4040;
    &.salmon-button--secondary {
      border-color: #ce4040;
      background: transparent;
      .salmon-button__title {
        color: #ce4040;
      }
    }
  }

  &:not(:disabled):active {
    background-color: #ce4040;
    &.salmon-button--secondary {
      border-color: #ce4040;
      background: transparent;
      .salmon-button__title {
        color: #ce4040;
      }
    }
  }
}

.salmon-button--red_middle {
  background-color: color('red', 'middle');
  &.salmon-button--secondary {
    border-color: color('red', 'middle');
    background: transparent;
    .salmon-button__title {
      color: color('red', 'middle');
    }
  }

  &:not(:disabled):hover {
    background-color: rgb(255, 87, 87, 0.5);
    &.salmon-button--secondary {
      border-color: rgba(255, 87, 87, 0.5);
      background: transparent;
      .salmon-button__title {
        color: rgba(255, 87, 87, 0.5);
        text-decoration: none;
      }
    }
  }
}

.salmon-button--small {
  height: 30px;

  padding-left: 10px;
  padding-right: 15px;
}

.salmon-button--transperent {
  background-color: transparent;
  border: 1px solid black;
  .salmon-button__title {
    color: black;
  }

  &:not(:disabled):active {
    &:hover,
    &:focus {
      background-color: transparent !important;

      .salmon-button__title {
        opacity: 0.5;
      }
    }
    &:active {
      opacity: 0.5;
    }
  }
}
.salmon-button--inactive {
  background-color: var(--ved-main-color, color('green'));
  .salmon-button__title {
    color: white;
  }
  &:disabled {
    background-color: transparent;
    border: 1px solid black;
    .salmon-button__title {
      color: black;
      opacity: 0.3;
    }
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    .salmon-button__title {
      opacity: 0.9;
    }
  }
}

.salmon-button--borderless {
  border-radius: 0;
}

.salmon-button > .salmon-button--based {
  background-color: var(--ved-main-color, color('green'));
  color: white;

  &:hover {
    background-color: color('green', 'normal');
  }
  &:active {
    opacity: 0.7;
  }
}

.salmon-button--loading {
  .salmon-button__title,
  .salmon-button__icon {
    opacity: 0;
  }
}

.salmon-button__loader {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #fff;
    animation: pulse 0.5s ease-in-out infinite alternate;
    margin: 0 1px;
    animation-delay: 0.2s;
    &:first-child {
      animation-delay: 0s;
    }
    &:last-child {
      animation-delay: 0.4s;
    }
  }
}

.salmon-button__title {
  display: inline-flex;

  font-size: 14px;
  line-height: 16px;

  color: #fff;
  transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out;

  padding-left: 5px;
}

.salmon-button__icon {
  display: inline-flex;
}
</style>
