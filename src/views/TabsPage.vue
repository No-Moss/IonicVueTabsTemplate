<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar>
        <nav>
          <ion-icon
            :icon="logoVue"
            class="site-logo"
            @click="$router.push({ name: 'Home' })"
          />
          <ion-tab-button class="home" tab="Home" href="/tabs/Home">
            <div class="tab-button-content">
              <ion-icon aria-hidden="true" :icon="triangle" />
              <ion-label>Home</ion-label>
            </div>
          </ion-tab-button>

          <ion-tab-button tab="Explore" href="/tabs/Explore">
            <div class="tab-button-content">
              <ion-icon aria-hidden="true" :icon="ellipse" />
              <ion-label>Explore</ion-label>
            </div>
          </ion-tab-button>

          <ion-tab-button tab="Profile" href="/tabs/Profile">
            <div class="tab-button-content">
              <ion-icon aria-hidden="true" :icon="square" />
              <ion-label>Profile</ion-label>
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
import { ellipse, square, triangle, logoVue } from "ionicons/icons";
</script>
<style lang="scss" scoped>
@import "@/theme/breakpoints.scss";
.site-logo {
  display: none;
}
nav {
  display: contents;
}
ion-tab-bar {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--ion-color-dark);
  :hover {
    background: var(--ion-background-color);
    color: var(--ion-color-dark);
  }
}
ion-tab-button {
  background-color: var(--ion-color-dark);
  color: var(--ion-background-color);
}
ion-tab-button::part(native):hover {
  color: var(--ion-color-dark);
}
ion-icon {
  transform: scale(2);
  margin-left: 5px;
  margin-right: 10px;
}
.tab-button-content:hover {
  background: var(--ion-background-color);
  color: var(--ion-color-dark);
}
@include breakpoint(medium) {
  .site-logo {
    display: flex;
    color: var(--ion-background-color);
    transform: scale(1.25);
    height: 69px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .site-logo:hover {
    color: green;
  }

  ion-tab-bar {
    position: fixed;
    left: 0;
    width: 150px;
    height: 100vh;
    flex-direction: column;
    place-content: flex-start;
    display: flex;
    gap: 5px;
    .site-logo:hover {
      background: var(--ion-color-dark);
    }
  }
  ion-tab-button {
    display: flex;
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
