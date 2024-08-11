<template>
  <button class="outlined-btn" @click="$emit('onClick')">
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import type {
  NikeOutlinedButtonEmits,
  NikeOutlinedButtonProps,
} from "./interfaces";
defineProps<NikeOutlinedButtonProps>();
defineEmits<NikeOutlinedButtonEmits>();
</script>

<style lang="scss">
.outlined-btn {
  border-radius: 30px;
  font-weight: 500;
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid #cacacb;
  font-family: var(--main-font);
}
</style>
