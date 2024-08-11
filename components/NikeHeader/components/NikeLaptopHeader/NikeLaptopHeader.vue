<template>
  <header class="header__header">
    <div class="header__container container">
      <div class="header__logo">
        <NuxtLink to="/">
          <img src="/icons/nike.svg" alt="logo" />
        </NuxtLink>
      </div>
      <div class="header__controls">
        <NikeRadialButton
          @on-click="item.method"
          v-for="item in headerItems"
          :key="item.icon"
        >
          <NuxtLink :title="item.title" v-if="item.link" :to="item.link">
            <img :src="`/icons/${item.icon}.svg`" :alt="item.icon" />
          </NuxtLink>
          <img
            v-else
            :title="item.title"
            :src="`/icons/${item.icon}.svg`"
            :alt="item.icon"
          />
        </NikeRadialButton>
      </div>
    </div>
    <NikeLaptopMenu @close="isMenuOpen = false" :is-open="isMenuOpen" />
  </header>
</template>

<script lang="ts" setup>
import NikeRadialButton from "~/ui/NikeRadialButton/NikeRadialButton.vue";
import NikeLaptopMenu from "../NikeLaptopMenu/NikeLaptopMenu.vue";

const isMenuOpen = ref<boolean>(false);
const isFormOpen = ref<boolean>(false);
const headerItems = [
  {
    icon: "search",
    link: "",
    title: "Search",
    method: openForm,
  },
  {
    icon: "profile",
    link: "/",
    title: "Profile",
  },
  {
    icon: "bag",
    link: "/",
    title: "Cart",
  },
  {
    icon: "burger",
    link: "",
    title: "Menu",
    method: openMenu,
  },
];

function openMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function openForm() {
  isFormOpen.value = !isFormOpen.value;
}
</script>
<style lang="scss" scoped>
.header {
  &__header {
    padding: 12px 0;
  }

  &__controls {
    gap: 4px;
    align-items: center;
  }
}
</style>
