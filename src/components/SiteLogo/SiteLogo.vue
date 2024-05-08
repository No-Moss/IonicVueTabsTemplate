<template>
  <router-link to="Home" class="icon-router-link">
    <ion-icon :icon="logoVue" class="site-logo" />
  </router-link>
</template>

<script setup lang="ts">
import { IonIcon } from "@ionic/vue";
import { logoVue } from "ionicons/icons";
</script>
<style lang="scss" scoped>
.site-logo {
  display: inline;
  color: var(--ion-color-light);
  transform: scale(1.25);
  height: 69px;
  max-width: 100%;
  margin: 20px auto 10px auto;
  cursor: pointer;
  &:hover {
    color: var(--ion-color-primary-shade);
    background: transparent;
  }
}

.icon-router-link {
  display: block;
  max-width: 100%;
  &:focus-visible {
    outline: none;
    border: solid var(--ion-color-primary-shade) 3px;
  }
  &:hover {
    background: transparent;
  }
}
</style>
