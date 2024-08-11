<template>
  <div class="header">
    <div class="header__upper">
      <div class="header__container container">
        <div class="header__links">
          <a href="https://www.nike.com/jordan"
            ><img src="/icons/jordan.svg" alt="logo"
          /></a>
          <a href="https://www.nike.com/w/converse-akmjx"
            ><img src="/icons/converse.svg" alt="logo"
          /></a>
        </div>
        <ul class="header__list">
          <li
            class="header__list__item"
            :class="idx < listOfLinks.length - 1 ? 'bordered' : ''"
            v-for="(item, idx) in listOfLinks"
            :key="item.text"
          >
            <a class="header__link" :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </div>

    <header class="header__header">
      <div class="header__grid container">
        <div class="header__logo">
          <NuxtLink to="/">
            <img src="/icons/nike.svg" alt="logo" />
          </NuxtLink>
        </div>

        <nav>
          <ul class="header__nav">
            <li
              class="header__nav__item"
              v-for="item in navItems"
              :key="item.text"
            >
              <NuxtLink class="header__nav__link" to="/">
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="header__controls">
          <div>
            <NikeRadialButton>
              <img src="/icons/search.svg" alt="search" />
            </NikeRadialButton>
          </div>
          <NikeRadialButton>
            <RouterLink class="header__controls__link" title="Favorites" to="/">
              <img src="/icons/favorites.svg" alt="favorites" />
            </RouterLink>
          </NikeRadialButton>
          <NikeRadialButton>
            <RouterLink class="header__controls__link" title="Cart" to="/">
              <img src="/icons/bag.svg" alt="bag" />
            </RouterLink>
          </NikeRadialButton>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import NikeRadialButton from "~/ui/NikeRadialButton/NikeRadialButton.vue";

const listOfLinks = [
  {
    text: "Find a store",
    link: "/",
  },
  {
    text: "Help",
    link: "/",
  },
  {
    text: "Join us",
    link: "/",
  },
  {
    text: "Sign In",
    link: "/",
  },
];

const navItems = [
  {
    text: "New & Featured",
    link: "",
  },
  {
    text: "Men",
    link: "",
  },
  {
    text: "Women",
    link: "",
  },
  {
    text: "Kids",
    link: "",
  },
  {
    text: "Jordan",
    link: "",
  },
  {
    text: "Sale",
    link: "",
  },
];
</script>

<style lang="scss">
.header {
  &__upper {
    background: var(--gray-color);
    padding: 4px 0;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__link {
    font-family: "Helvetica-medium";
    transition: 0.3s ease-in;
    // font-weight: 500;
    font-size: 12px;
    line-height: 150%;

    &:hover {
      opacity: 0.7;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 12px;

    &__item {
      &.bordered {
        border-right: 1px solid var(--text-color);
        padding-right: 12px;
      }
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 24px;

    &__item {
      transition: 0.3s ease-in;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid var(--text-color);
      }
    }

    &__link {
      font-weight: 500;
    }
  }

  &__grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__controls {
    display: flex;
    border: none;
    outline: none;
    cursor: pointer;
    align-items: center;
    gap: 12px;

    &__link {
      height: 24px;
      width: 24px;
    }
  }
}
</style>
