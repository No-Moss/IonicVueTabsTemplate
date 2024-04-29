<template>
  <ion-page>
    <HeaderContainer title="Profile" />
    <ion-content :fullscreen="true" id="mainContentId">
      <ExploreContainer name="Profile page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import ExploreContainer from "@/components/Explore/ExploreContainer.vue";
import HeaderContainer from "@/components/Header/HeaderContainer.vue";
</script>
