<template>
  <ion-card>
  <img class="avatar" :src="user.avatar" :alt="user.name"/>
    <ion-card-header>
        <ion-card-subtitle>
            <ion-icon color="primary" id="icon" :icon="navigateOutline"></ion-icon>
            <ion-label id="distance-text">{{user.distance}}</ion-label>
        </ion-card-subtitle>
        <ion-card-title>{{user.name}}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
    {{user.bio}}
     <div class="btn-wrapper">
        <ion-button id="btn" fill="outline" @:click="inviteForCoffee">Пригласить на кофе</ion-button>
    </div>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel,IonCardHeader, IonButton } from '@ionic/vue';
import { navigateOutline} from 'ionicons/icons';
import { defineComponent } from 'vue';

export default{
    props:['user'],
  components: { IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader,IonLabel, IonIcon, IonButton},
  setup() {
    return { navigateOutline };
  },
  methods: {
    inviteForCoffee(){

    }
  },
};
</script>

<style scoped>
.avatar{
    width:100%;
    height:auto;
    max-height:15rem;
}
#btn{
    width:auto;
    margin-right:auto;
    margin-left:auto;
    margin-top:1rem;
}
.btn-wrapper{
    display:flex;
    flex-direction:column;
}
#icon {
 display: inline-block;
 font-size: 1.125rem;
 vertical-align: middle;
 margin-right:0.25rem;
}

#distance-text{
  display: inline-block;
  vertical-align: middle;
}
</style>