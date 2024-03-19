<template>
  <ion-header>
    <ion-toolbar>
      <div class="toolbar-container">
        <ion-icon
          :icon="logoVue"
          class="site-logo"
          @click="$router.push({ name: 'Home' })"
        />
        <ion-title>{{ props.title }}</ion-title>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonIcon } from "@ionic/vue";
import { logoVue } from "ionicons/icons";
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
}
ion-toolbar {
  --background: var(--ion-color-dark);
  color: var(--ion-color-light);
}
.site-logo {
  transform: scale(2);
  margin: 5px 20px 0px 20px;
  cursor: pointer;
}
@include breakpoint(medium) {
  .site-logo {
    display: none;
  }
  ion-toolbar {
    left: 200px;
    --background: var(--ion-color-dark);
  }
  ion-title {
    padding-left: 10px;
  }
}
</style>
