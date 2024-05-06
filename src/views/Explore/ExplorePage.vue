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
<style lang="scss" scoped>
ion-content {
  --background: var(--ion-color-dark);
}
</style>
<style lang="scss" scoped>
@import "@/theme/breakpoints.scss";
@include breakpoint(medium) {
  .content-container {
    width: calc(100% - 200px);
    left: 200px;
  }
}
.content-container {
  position: relative;
  height: 100%;
  &:focus-visible {
    border: solid var(--ion-color-primary-shade) 5px;
    outline: none;
  }
}
</style>
