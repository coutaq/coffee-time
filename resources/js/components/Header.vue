<template>
  <ion-toolbar color="dark">
    <ion-header>
      <ion-title>{{pageTitle}}</ion-title>
    </ion-header>
  </ion-toolbar>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

import { defineComponent } from 'vue';

export default{
props: [
    'pageTitle'
    ],
  components: {
    IonHeader,
    IonTitle,
    IonToolbar
  },
  created(){
  },
  
};
</script>
<style scoped>
</style>