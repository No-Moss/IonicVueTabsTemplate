<template>
  <ion-header>
    <ion-toolbar>
      <div class="toolbar-container">
        <img src="../assets/logos/logo-vue.svg" alt="Vue Icon" />
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
img {
  content: url("../assets/logos/logo-vue.svg");
  max-height: 30px;
  margin: 10px;
}
ion-title {
  padding: 0px;
}
@include breakpoint(medium) {
  img {
    display: none;
  }
  ion-toolbar {
    --background: var(--ion-color-dark);
    left: 150px;
    color: var(--ion-color-light);
  }
  ion-title {
    padding-left: 10px;
  }
}
</style>
