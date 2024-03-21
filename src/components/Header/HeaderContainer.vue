<template>
  <ion-header>
    <ion-toolbar data-test="header-bar">
      <div class="toolbar-container">
        <ion-title>{{ props.title }}</ion-title>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle } from "@ionic/vue";
const props = defineProps({
  title: { type: String, required: false },
});
</script>
<style lang="scss" scoped>
@import "@/theme/breakpoints.scss";
.toolbar-container {
  display: flex;
}
ion-title {
  padding: 0px;
  margin-left: 20px;
}
ion-title.ios.title-default {
  margin-left: 0px;
}

ion-toolbar {
  --background: var(--ion-color-dark);
  color: var(--ion-color-light);
}
@include breakpoint(medium) {
  ion-toolbar {
    left: 200px;
    --background: var(--ion-color-dark);
  }
  ion-title {
    padding-left: 10px;
    margin-left: 0px;
  }
}
</style>
