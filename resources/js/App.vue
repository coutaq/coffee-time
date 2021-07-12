<template>
  <ion-app>
    <ion-router-outlet ionViewDidLeave animated="true"/>
    <header-component :pageTitle=' $route.name '></header-component>
    <footer-component style="z-index:0"></footer-component>
  </ion-app>
</template>

<script>
import { 
  IonApp, 
  IonRouterOutlet,
  IonTabBar, 
  IonTabButton, 
  IonTabs 
  } from '@ionic/vue';
import { newspaperOutline, personCircle } from 'ionicons/icons';
import { defineComponent } from 'vue';
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    HeaderComponent,
    FooterComponent
  },
  setup() {
    return {
      newspaperOutline,
      personCircle,
    }
  }
});
</script>
<style>
#container {
  margin-top:15%;
}
</style>