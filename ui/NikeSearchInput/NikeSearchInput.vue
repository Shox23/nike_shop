<template>
  <div class="search-input">
    <div class="search-input__wrapper">
      <NikeRadialButton color="#f5f5f5">
        <img src="/icons/search.svg" alt="icon" />
      </NikeRadialButton>
      <input type="text" class="search-input__field" />
    </div>
    <NikeRadialButton>
      <img src="/icons/close.svg" alt="icon" />
    </NikeRadialButton>
  </div>
</template>

<script lang="ts" setup>
import NikeRadialButton from "../NikeRadialButton/NikeRadialButton.vue";
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
    border: none;
    outline: none;
    background: none
  }
}
</style>
