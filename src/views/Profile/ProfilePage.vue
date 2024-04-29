<template>
  <ion-page>
    <HeaderContainer title="Profile" />
    <ion-content :fullscreen="true">
      <div class="content-container" id="profile-main-content" tabindex="0">
        <ExploreContainer name="Profile page" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import ExploreContainer from "@/components/Explore/ExploreContainer.vue";
import HeaderContainer from "@/components/Header/HeaderContainer.vue";
</script>
<style lang="scss" scoped>
.content-container {
  position: relative;
  left: 200px;
  height: 100%;
  width: calc(100% - 200px);
  &:focus-visible {
    border: solid var(--ion-color-primary-shade) 5px;
  }
}
</style>
