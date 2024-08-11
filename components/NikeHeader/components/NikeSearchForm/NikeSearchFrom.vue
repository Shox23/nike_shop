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
          <form class="search-form__form" @submit.prevent></form>
          <button class="search-form__btn">Cancel</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
