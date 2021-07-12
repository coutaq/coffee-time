<template>
  <ion-page>
    <ion-content>
    <div id="container">
        <div v-if="me.hasOwnProperty('id')">
        <profile-component :userId="me.id"/>
        <ion-fab  vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button color="secondary" translucent="true">
          <ion-icon :icon="pencilOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      </div>
      <login-component v-else></login-component>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { pencilOutline } from 'ionicons/icons';
import { 
  IonContent,
  IonPage,
  IonFab, 
  IonIcon,
  IonFabButton
  } from '@ionic/vue';
import ProfileComponent from '../views/Profile'
import LoginComponent from '../components/Login'

import { defineComponent } from 'vue';

export default defineComponent({
  data() {
      return {
          me:{}
      }
  },
  name: 'Home',
  components: {
    IonContent,
    IonPage,
    IonFab,
    IonFabButton,
    IonIcon,
    ProfileComponent,
    LoginComponent
  },
  setup() {
    return {
      pencilOutline,
    }
  },
  methods: {
  },
  mounted(){
    let user;
    this.axios.get('http://localhost:8000/me').then(u =>{
      user = {name:"хуй"}
    })
    console.log(user)
  }
});
</script>
<style scoped>
#container{
  display:flex;
  flex-direction:column;
  align-items:center
}
.avatar{
  width:50vw;
  height:50vw;
}
.bio{
  font-weight: 400;
  font-size:1.25rem;

}
.info{
    font-size:2rem;
    display:flex;
    flex-direction:column;
    text-align:center;
    margin-left:1vw;
    margin-right:1vw;
    
}
.name-wrapper{
  text-align:center;
  font-weight: 700;
  margin-top:0.5rem;
  margin-bottom:0.5rem;
}
.name{
  margin:auto;
}
</style>