<template>
  <ion-page>
    <HeaderContainer title="Explore" />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Explore</ion-title>
        </ion-toolbar>
      </ion-header>
      <ExploreContainer name="Explore page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import HeaderContainer from "@/components/HeaderContainer.vue";
</script>
<style scoped>
ion-content {
  --background: white;
}
</style>
