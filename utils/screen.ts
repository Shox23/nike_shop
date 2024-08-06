const screenWidth = ref(window.innerWidth);

const isMobile = computed<boolean>(() => {
  return screenWidth.value <= 760;
});

const isTablet = computed<boolean>(() => {
  return screenWidth.value <= 960;
});

const isLaptop = computed<boolean>(() => {
  return screenWidth.value > 960 && screenWidth.value < 1024;
});

const isDesktop = computed<boolean>(() => {
  return screenWidth.value > 1200;
});

watch(screenWidth, () => {
  screenWidth.value = window.innerWidth;
});

window.addEventListener("resize", () => {
  screenWidth.value = window.innerWidth;
});

export const useScreen = () => {
  return {
    isMobile,
    isDesktop,
    isTablet,
    isLaptop,
  };
};
