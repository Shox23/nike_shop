<template>
  <Teleport to="body">
    <Transition name="search-form">
      <div class="search-form">
        <div class="search-form__header">
          <img
            class="search-form__logo"
            src="/icons/nike_bigger.svg"
            alt="logo"
          />
          <form class="search-form__form" @submit.prevent>
            <NikeSearchInput v-model="inputValue" placeholder="Search" />
          </form>
          <button class="search-form__btn">Cancel</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import NikeSearchInput from "~/ui/NikeSearchInput/NikeSearchInput.vue";

const inputValue = defineModel();
</script>

<style lang="scss"></style>
