<template>
  <div class="container" data-test="skip-menu-container">
    <label class="label">Skip To</label>
    <button
      class="skip-menu-button"
      data-test="main-content-button"
      id="main-content-button"
      @click="focusMainContent()"
    >
      Main content
    </button>
    <button
      class="skip-menu-button"
      data-test="global-nav-button"
      id="global-nav-button"
      @click="focusGlobalNav()"
    >
      Global Navigation
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const focusMainContent = () => {
  document.getElementById(router.currentRoute.value.meta.mainContentId).focus();
};
const focusGlobalNav = () => {
  document.getElementById("global-navigation").focus();
};
</script>

<style lang="scss" scoped>
@import "@/theme/breakpoints.scss";
.label {
  padding-left: 15px;
}
.container {
  transition: all 100ms ease-in-out;
  transform: translateY(-1000px);
  color: var(--ion-color-dark);
  font-size: 22px;
  position: absolute;
  top: 0.3rem;
  padding: 20px 6px 5px 6px;
  z-index: 1000;
  background-color: var(--ion-color-light);
  border: solid var(--ion-color-dark) 3px;
  box-shadow: var(--shadow-2);
  border-radius: 12px;
  font-weight: 800;
  text-decoration: none;
  text-align: left;
  min-width: 200px;
  margin: 10px 0px 0px 40px;
  &:focus-within {
    transform: translateY(0px);
  }
}
.skip-menu-button {
  color: var(--ion-color-dark);
  font-size: 16px;
  background-color: var(--ion-color-light);
  outline-color: var(--ion-color-primary-shade);
  font-weight: 400;
  margin-top: 3px;
  display: flex;
  width: 100%;
  padding: 13px 30px 13px 15px;
  border-radius: 6px;
  text-decoration: underline;
}
.skip-menu-button:focus {
  background-color: var(--lighter-grey);
}
@include breakpoint(medium) {
  .container {
    top: 0.5rem;
    left: 0.5rem;
  }
}
</style>
