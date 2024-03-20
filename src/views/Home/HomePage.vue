<template>
  <ion-page>
    <HeaderContainer title="Home" />
    <ion-content :fullscreen="true">
      <ExploreContainer name="Home page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import ExploreContainer from "@/components/Explore/ExploreContainer.vue";
import HeaderContainer from "@/components/Header/HeaderContainer.vue";
</script>
