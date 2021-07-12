<template>
  <ion-page>
    <ion-content>
      <div id="container">
       <ion-text color="primary">
        <h2 class="ion-text-center">Вход</h2>
       </ion-text>
        <ion-item>
            <ion-label position="floating">Имя пользователя</ion-label>
            <ion-input></ion-input>
        </ion-item>
        <ion-item>
            <ion-label position="floating">Пароль</ion-label>
            <ion-input></ion-input>
        </ion-item>
        <ion-button>Войти</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  addOutline,
  chevronUpOutline
  } from 'ionicons/icons';
import { 
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar, 
  IonFab, 
  IonIcon,
  IonFabButton
  } from '@ionic/vue';
import PostCard from '../components/UserPost'
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
    }
  },
  name: 'Login',
  components: {
    IonContent,
    IonPage,
    IonFab,
    IonIcon,
    IonFabButton,
    PostCard
  },
  setup() {
    return {
      addOutline,
      chevronUpOutline
    }
  },
  methods: {
    login(){
    this.axios.post('http://localhost:8000/login')
    }
  },
});
</script>
<style scoped>
.end{
  display:flex;
  flex-direction:column;
  height:5rem;
  align-items:center;
  justify-content: center;
  margin-bottom:3rem;
}
#container{
  margin-top:4rem;
}
</style>