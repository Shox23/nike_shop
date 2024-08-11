<template>
  <div class="header">
    <!-- <NikeDesktopHeader /> -->
    <NikeLaptopHeader />
  </div>
</template>

<script setup lang="ts">
import NikeDesktopHeader from "./components/NikeDesktopHeader/NikeDesktopHeader.vue";
import NikeLaptopHeader from "./components/NikeLaptopHeader/NikeLaptopHeader.vue";
</script>

<style lang="scss">
.header {
  position: relative;
}
</style>
