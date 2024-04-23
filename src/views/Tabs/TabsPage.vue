<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar data-test="global-nav-bar">
        <nav>
          <ion-icon
            :icon="logoVue"
            class="site-logo"
            @click="$router.push({ name: 'Home' })"
            tabindex="0"
            @keyup.enter="$router.push({ name: 'Home' })"
          />
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
import { ellipse, square, triangle, logoVue } from "ionicons/icons";
</script>
<style lang="scss" scoped>
@import "@/theme/breakpoints.scss";
//logo is not displayed in the mobile mode navigation bar
.site-logo {
  display: none;
}
//nav element assigns accessibility landmark for global navigation
nav {
  display: contents;
}
//navigation bar styling for all screen sizes.
//contrast colours shown on hover/click (this is overridden for site logo background on breakpoint below).
ion-tab-bar {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--ion-color-dark);
  :hover {
    background: var(--ion-color-light);
    color: var(--ion-color-dark);
  }
}
//navigation bar button and hover styling for all screen sizes
ion-tab-button {
  background-color: var(--ion-color-dark);
  color: var(--ion-color-light);
  :hover {
    background: var(--ion-color-light);
  }
}
//allocates colour to navigation bar button text, which is in a shadow element; part="native".
ion-tab-button::part(native):hover {
  color: var(--ion-color-dark);
}
//sets size and margins for navigation bar button icons.
//the measurements are the same on all screen sizes.
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
  //displays and sets styling for site logo located in the global navigation bar
  .site-logo {
    display: flex;
    color: var(--ion-color-light);
    transform: scale(1.25);
    height: 69px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      color: var(--ion-color-primary-shade);
    }
    &:focus-visible {
      outline: none;
      border: solid var(--ion-color-primary-shade) 3px;
    }
  }

  //changes navigation bar format to be displayed vertically on the left side of the screen
  ion-tab-bar {
    position: fixed;
    left: 0;
    width: 200px;
    height: 100vh;
    flex-direction: column;
    place-content: flex-start;
    display: flex;
    gap: 5px;
    //sets navigation bar background colour behind the site logo to remain consistent upon hover (rather than changing to white)
    .site-logo:hover {
      background: var(--ion-color-dark);
    }
  }
  //sets the size, padding and margin parameters for ion-tab-button and the elements within it
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
  //configures the alignment of and spacing between elements in the navigation bar button
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
