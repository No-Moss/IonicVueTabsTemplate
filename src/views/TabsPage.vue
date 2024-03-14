<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom"
        ><nav>
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon aria-hidden="true" :icon="triangle" />
            <ion-label>Tab 1</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon aria-hidden="true" :icon="ellipse" />
            <ion-label>Tab 2</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon aria-hidden="true" :icon="square" />
            <ion-label>Tab 3</ion-label>
          </ion-tab-button>
        </nav>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { ellipse, square, triangle } from "ionicons/icons";
</script>
<style lang="scss" scoped>
@import "@/theme/breakpoints.scss";
nav {
  display: contents;
}
@include breakpoint(medium) {
  ion-tab-bar {
    position: fixed;
    z-index: 0;
    left: 0;
    width: 150px;
    height: 100vh;
    flex-direction: column;
    place-content: flex-start;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
