<template>
  <div class="search-input">
    <div class="search-input__wrapper">
      <NikeRadialButton color="#f5f5f5">
        <img src="/icons/search.svg" alt="icon" />
      </NikeRadialButton>
      <input
        type="text"
        class="search-input__field"
        v-model="model"
        :placeholder="placeholder"
      />
    </div>
    <NikeRadialButton v-if="model" @on-click="clearInput" color="#f5f5f5">
      <img src="/icons/close.svg" alt="icon" />
    </NikeRadialButton>
  </div>
</template>

<script lang="ts" setup>
import NikeRadialButton from "../NikeRadialButton/NikeRadialButton.vue";
import type { NikeSearchInputEmits, NikeSearchInputProps } from "./interfaces";

defineEmits<NikeSearchInputEmits>();
defineProps<NikeSearchInputProps>();
const model = defineModel();

const clearInput = () => {
  model.value = "";
};
</script>

<style lang="scss">
.search-input {
  display: flex;
  align-items: center;
  background: #e5e5e5;
  justify-content: space-between;
  border-radius: 30px;

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__field {
    font-weight: 500;
    padding-left: 4px;
    border: none;
    outline: none;
    background: none;
  }
}
</style>
