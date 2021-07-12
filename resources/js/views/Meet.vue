<template>
  <ion-page>
    <ion-content fullscreen="true">
      <div id="container">
       <user-card v-for="user in Users" :key="user.id" :user="user"></user-card>
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
import UserCard from '../components/UserCard.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Meet',
  components: {
    IonContent,
    IonPage,
    UserCard
  },
  setup() {
    return {
      addOutline,
      chevronUpOutline
    }
  },
  data() {
      return {
          Users:[
              {
                id:0,
                name:"Дуэйн Скала Джонсон",
                bio:"В сороковые годы, чтобы покорить девушку, нужно было быть солдатом; в пятидесятые годы — евреем; в шестидесятые — чернокожим. В наше время, чтобы покорить девушку, нужно быть мной.",
                avatar:"https://media.gq-magazine.co.uk/photos/5d13ad12976fa30cf6f3b2a2/16:9/w_2560%2Cc_limit/HP.jpg",
                distance:"3 километра"
              },
              {
                id:1,
                name:"Стив Бушеми",
                bio:"Кто в юности не любил женщин — у того нет сердца. Кто в зрелости не перешёл на мужчин — у того нет ума",
                avatar:"https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/10/18/1382111625223/Steve-Buscemi-Making-mone-010.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=0601acef9d56d28b945740a0c1968b18",
                distance:"1 километр"
              },
              {
                id:2,
                name:"Ченнинг Татум",
                bio:"Счастье не в деньгах, а в их количестве.",
                avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfmFoNzOmJ1O--B_OIaq0KUDdV5be_tBT0g&usqp=CAU",
                distance:"2 километра"
              }
          ]
      }
  },
});
</script>
