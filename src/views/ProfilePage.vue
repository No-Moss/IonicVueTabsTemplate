<template>
  <ion-page>
    <HeaderContainer title="Profile" />
    <ion-content :fullscreen="true">
      <ExploreContainer name="Profile page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import HeaderContainer from "@/components/HeaderContainer.vue";
</script>
