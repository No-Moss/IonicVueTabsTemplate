<template>
  <ion-page>
    <HeaderContainer title="Explore" />
    <ion-content :fullscreen="true">
      <div class="content-container" id="explore-main-content" tabindex="0">
        <ExploreContainer name="Explore page" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import ExploreContainer from "@/components/Explore/ExploreContainer.vue";
import HeaderContainer from "@/components/Header/HeaderContainer.vue";
</script>
