<template>
 <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="feed" href="/home">
          <ion-icon :icon="peopleCircleOutline"></ion-icon>
          <ion-label>Фид</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="news" href="/news">
          <ion-icon :icon="newspaperOutline"></ion-icon>
          <ion-label>Новости</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="speakers" href="/meet">
          <ion-icon :icon="peopleOutline"></ion-icon>
          <ion-label>Люди</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="me" href="/me">
          <ion-icon :icon="personCircleOutline"></ion-icon>
          <ion-label>Я</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
</template>

<script>
import {
    IonTabs, 
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    } from '@ionic/vue';
import { newspaperOutline, personCircleOutline,peopleOutline, peopleCircleOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default{
props: [
    'pageTitle'
    ],
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
  },
  setup() {
    return {
      newspaperOutline,
      personCircleOutline,
      peopleOutline,
      peopleCircleOutline
    }
  },
  methods: {
  },
};
</script>