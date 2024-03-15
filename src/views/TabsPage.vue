<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar
        ><nav>
          <ion-tab-button class="tab1" tab="tab1" href="/tabs/tab1">
            <div class="tab-button-content">
              <ion-icon aria-hidden="true" :icon="triangle" />
              <ion-label>Tab 1</ion-label>
            </div>
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <div class="tab-button-content">
              <ion-icon aria-hidden="true" :icon="ellipse" />
              <ion-label>Tab 2</ion-label>
            </div>
          </ion-tab-button>

          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <div class="tab-button-content">
              <ion-icon aria-hidden="true" :icon="square" />
              <ion-label>Tab 3</ion-label>
            </div>
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
  ion-tab-bar::before {
    content: url("../assets/logos/logo-vue.svg");
    transform: scale(0.5, 0.5);
    height: 69px;
    width: 100%;
    padding-top: 10px;
    margin-bottom: 30px;
  }
  ion-tab-bar {
    position: fixed;
    left: 0;
    width: 150px;
    height: 100vh;
    flex-direction: column;
    place-content: flex-start;
    display: flex;
  }
  ion-tab-button {
    display: flex;
    background-color: white;
    color: black;
    border: red solid 2px;
    flex-direction: row;
    max-height: 60px;
    width: 100%;
  }
  .tab-button-content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
  }
}
</style>
