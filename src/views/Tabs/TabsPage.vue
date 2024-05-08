<template>
  <ion-page>
    <SkipMenu />

    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar
        data-test="global-nav-bar"
        id="global-navigation"
        tabindex="0"
      >
        <nav>
          <SiteLogo class="site-logo" />
          <ion-tab-button class="home" tab="Home" href="/tabs/Home">
            <div class="tab-button-content" data-test="home-button">
              <ion-icon aria-hidden="true" :icon="triangle" />
              <ion-label>Home</ion-label>
            </div>
          </ion-tab-button>

          <ion-tab-button tab="Explore" href="/tabs/Explore">
            <div class="tab-button-content" data-test="explore-button">
              <ion-icon aria-hidden="true" :icon="ellipse" />
              <ion-label>Explore</ion-label>
            </div>
          </ion-tab-button>

          <ion-tab-button tab="Profile" href="/tabs/Profile">
            <div class="tab-button-content" data-test="profile-button">
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
import { ellipse, square, triangle } from "ionicons/icons";
import SkipMenu from "@/components/SkipMenu/SkipMenu.vue";
import SiteLogo from "@/components/SiteLogo/SiteLogo.vue";
</script>
<style lang="scss" scoped>
@import "@/theme/breakpoints.scss";
@import "@/theme/desktop-nav-layout.scss";
nav {
  display: contents;
}

.site-logo {
  display: none;
}

ion-tab-bar {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--ion-color-dark);
  :hover {
    background: var(--ion-color-light);
    color: var(--ion-color-dark);
  }
  &:focus-visible {
    border: solid var(--ion-color-primary-shade) 3px;
    outline: none;
  }
}

ion-tab-button {
  background-color: var(--ion-color-dark);
  color: var(--ion-color-light);
  :hover {
    background: var(--ion-color-light);
  }
}

ion-tab-button::part(native):hover {
  color: var(--ion-color-dark);
}

ion-icon {
  transform: scale(2);
  margin-left: 5px;
  margin-right: 10px;
}

.ion-focused {
  --background-focused: var(--ion-color-dark);
  border: solid var(--ion-color-primary-shade) 3px;
}
@include breakpoint(medium) {
  .site-logo {
    display: block;
  }
}
</style>
