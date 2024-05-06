<template>
  <ion-page>
    <HeaderContainer title="Home" />
    <ion-content :fullscreen="true">
      <div class="content-container" id="home-main-content" tabindex="0">
        <ExploreContainer name="Home page" tabIndex="-1" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import ExploreContainer from "@/components/Explore/ExploreContainer.vue";
import HeaderContainer from "@/components/Header/HeaderContainer.vue";
</script>
