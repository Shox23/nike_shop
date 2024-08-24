<template>
  <button
    class="radial-btn"
    :class="classes"
    @mousedown="isPressed = true"
    @mouseup="isPressed = false"
    @click="$emit('onClick')"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import type {
  NikeRadialButtonEmits,
  NikeRadialButtonProps,
} from "./interfaces";

const props = defineProps<NikeRadialButtonProps>();
defineEmits<NikeRadialButtonEmits>();
const isPressed = ref<boolean>(false);
const classes = computed(() => ({
  pressed: isPressed.value,
  colored: props.color,
}));
</script>

<style lang="scss">
.radial-btn {
  border: none;
  cursor: pointer;
  outline: none;
  height: 36px;
  width: 36px;
  background: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in;

  &:hover {
    background: var(--gray-color);

    @media (max-width: 768px) {
      background: none;
    }
  }

  &.colored {
    background: v-bind(color);
  }

  &.pressed {
    background: var(--gray-color);
  }
}
</style>
