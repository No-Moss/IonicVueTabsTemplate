<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar data-test="global-nav-bar">
        <nav>
          <router-link to="Home" class="icon-router-link">
            <ion-icon :icon="logoVue" class="site-logo"
          /></router-link>
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
  IonButton,
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
    background: var(--ion-color-light);
    color: var(--ion-color-dark);
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
    display: flex;
    color: var(--ion-color-light);
    transform: scale(1.25);
    height: 69px;
    width: 100%;
    margin: 20px auto 10px auto;
    cursor: pointer;
    &:hover {
      color: var(--ion-color-primary-shade);
      background: transparent;
    }
  }

  .icon-router-link {
    width: 100%;
    &:focus-visible {
      outline: none;
      border: solid var(--ion-color-primary-shade) 3px;
    }
    &:hover {
      background: transparent;
    }
  }

  ion-tab-bar {
    position: fixed;
    left: 0;
    width: 200px;
    height: 100vh;
    flex-direction: column;
    place-content: flex-start;
    display: flex;
    gap: 5px;
  }

  ion-tab-button {
    max-height: 60px;
    width: 100%;
    padding: 0px;
    ion-icon {
      margin-left: 0px;
      margin-right: 20px;
    }
    ion-label {
      font-size: 20px;
    }
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
