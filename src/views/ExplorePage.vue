<template>
  <ion-page>
    <HeaderContainer title="Explore" />
    <ion-content :fullscreen="true">
      <ExploreContainer name="Explore page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import HeaderContainer from "@/components/HeaderContainer.vue";
</script>
