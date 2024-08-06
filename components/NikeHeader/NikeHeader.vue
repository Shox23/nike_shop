<template>
  <div class="header">
    <NikeDesktopHeader @open="openMenu" @close="closeMenu" />
    <NikeLaptopHeader />
    <Transition
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
      name="expand"
    >
      <NikeHeaderMenu v-if="isHeaderMenuOpen" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { afterEnter, leave, enter } from "~/utils/animations";
import NikeDesktopHeader from "./components/NikeDesktopHeader/NikeDesktopHeader.vue";
import NikeHeaderMenu from "./components/NikeDesktopMenu/NikeDesktopMenu.vue";
import NikeLaptopHeader from "./components/NikeLaptopHeader/NikeLaptopHeader.vue";

const isHeaderMenuOpen = ref<boolean>(false);

const openMenu = () => {
  isHeaderMenuOpen.value = true;
};

const closeMenu = () => {
  isHeaderMenuOpen.value = false;
};
</script>

<style lang="scss">
.header {
  position: relative;
}
</style>
