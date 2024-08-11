<template>
  <Teleport to="body">
    <Transition name="laptop-menu" mode="out-in" :duration="400">
      <div @click="$emit('close')" class="laptop-menu__wrapper" v-if="isOpen">
        <div class="laptop-menu" @click.stop>
          <div class="laptop-menu__header">
            <button
              class="laptop-menu__header__btn"
              :class="menuStore.currentPage === '' ? '' : ' active'"
            >
              <img src="/icons/arrow.svg" alt="logo" />
              <p class="laptop-menu__header__title">
                {{ menuStore.currentPage }}
              </p>
            </button>

            <NikeRadialButton @on-click="$emit('close')">
              <img src="/icons/close.svg" alt="icon" />
            </NikeRadialButton>
          </div>
          <div class="laptop-menu__content">
            <ul class="laptop-menu__menu">
              <li
                class="laptop-menu__menu__item"
                v-for="item in menuStore.menuData"
                :key="item.title"
              >
                <button class="laptop-menu__menu__btn" v-if="item.children">
                  <h3 class="laptop-menu__menu__title">
                    {{ item.title }}
                  </h3>
                  <img
                    class="laptop-menu__menu__icon"
                    src="/icons/arrow.svg"
                    alt="icon"
                  />
                </button>

                <NuxtLink v-if="item.link" :to="item.link">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>

            <ul class="laptop-menu__menu">
              <li
                class="laptop-menu__menu__item"
                v-for="item in menuStore.brandMenuData"
                :key="item.title"
              >
                <NuxtLink
                  class="laptop-menu__menu__link"
                  v-if="item.link"
                  :to="item.link"
                >
                  <img :src="`/icons/${item.icon}`" alt="icon" />
                  <span>
                    {{ item.title }}
                  </span>
                </NuxtLink>
              </li>
            </ul>

            <div class="laptop-menu__login">
              <p class="laptop-menu__login__text">
                Become a Nike Member for the best products, inspiration and
                stories in sport.
                <span class="laptop-menu__login__span">Learn more</span>
              </p>
              <div class="laptop-menu__login__buttons">
                <NikeFilledButton text="Join Us" />
                <NikeOutlinedButton text="Sign In" />
              </div>
            </div>

            <ul class="laptop-menu__menu">
              <li
                class="laptop-menu__menu__item"
                v-for="item in menuStore.serviceMenuData"
                :key="item.title"
              >
                <NuxtLink
                  class="laptop-menu__menu__link"
                  v-if="item.link"
                  :to="item.link"
                >
                  <img :src="`/icons/${item.icon}`" alt="icon" />
                  <span>
                    {{ item.title }}
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import NikeRadialButton from "~/ui/NikeRadialButton/NikeRadialButton.vue";
import type { NikeLaptopMenuEmits, NikeLaptopMenuProps } from "./interfaces";
import useMenuStore from "~/store/menuStore";
import NikeOutlinedButton from "~/ui/NikeOutlinedButton/NikeOutlinedButton.vue";
import NikeFilledButton from "~/ui/NikeFilledButton/NikeFilledButton.vue";

defineProps<NikeLaptopMenuProps>();
defineEmits<NikeLaptopMenuEmits>();
const menuStore = useMenuStore();
</script>

<style lang="scss">
.laptop-menu {
  z-index: 99;
  background: #fff;
  width: 100%;
  max-width: 320px;
  position: absolute;
  padding-top: 12px;
  top: 0;
  right: 0;

  &__wrapper {
    position: absolute;
    overflow: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: var(--dim-color);
  }

  // &__content {
  //   overflow: auto;
  // }

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 6px 24px;

    &__btn {
      font-weight: 500;
      display: flex;
      opacity: 0;
      pointer-events: none;
      gap: 10px;
      align-items: center;

      .active {
        opacity: 1;
        pointer-events: all;
      }
    }
  }

  &__login {
    padding: 48px 36px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &__buttons {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &__text {
      font-weight: 500;
      color: #707072;
      font-size: 20px;
    }

    &__span {
      color: var(--text-color);
    }
  }

  &__menu {
    padding: 24px 0;

    &:last-child {
      padding: 24px 0 150px;
    }

    &__link {
      display: flex;
      align-items: center;
      font-weight: 500;
      gap: 12px;
    }

    &__item {
      padding: 8px 24px 8px 36px;
    }

    &__btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__icon {
      rotate: 180deg;
    }

    &__title {
      font-size: 24px;
      font-weight: 600;
    }
  }
}
</style>
