<template>
  <button class="filled-btn" @click="$emit('onClick')">
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import type {
  NikeFilledButtonEmits,
  NikeFilledButtonProps,
} from "./interfaces";

defineProps<NikeFilledButtonProps>();
defineEmits<NikeFilledButtonEmits>();
</script>

<style lang="scss">
.filled-btn {
  border-radius: 30px;
  font-weight: 500;
  padding: 8px 16px;
  font-size: 16px;
  background: var(--text-color);
  border: 1px solid var(--text-color);
  color: #fff;
  font-family: var(--main-font);
}
</style>
