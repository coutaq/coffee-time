<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
      <post-card v-for="post in Posts" :key="post.id" :post="post"/>
      <div class="end">Вы дошли до конца...</div>
      </div>
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button href="/create-post" color="secondary" translucent="true">
          <ion-icon :icon="addOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
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
      Posts: [
        {
        user:{
                id:0,
                name:"Дуэйн Скала Джонсон",
                bio:"В сороковые годы, чтобы покорить девушку, нужно было быть солдатом; в пятидесятые годы — евреем; в шестидесятые — чернокожим. В наше время, чтобы покорить девушку, нужно быть мной.",
                avatar:"https://media.gq-magazine.co.uk/photos/5d13ad12976fa30cf6f3b2a2/16:9/w_2560%2Cc_limit/HP.jpg",
                distance:"3 километра"
              },
        image: "https://www.meme-arsenal.com/memes/d014965ed7d47f00f3c8997474a8ed31.jpg",
        text:"привет чо как я пожилой казак",
        likes: 0,
          interests:[{
            name:"Аниме",
            color:"warning"
          },{
          name:"Фильмы",
            color:"danger"
          },{
          name:"Рок",
            color:"success"
          }]
      },
      {
        user:{
                id:1,
                name:"Стив Бушеми",
                bio:"В сороковые годы, чтобы покорить девушку, нужно было быть солдатом; в пятидесятые годы — евреем; в шестидесятые — чернокожим. В наше время, чтобы покорить девушку, нужно быть мной.",
                avatar:"https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/10/18/1382111625223/Steve-Buscemi-Making-mone-010.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=0601acef9d56d28b945740a0c1968b18",
                distance:"3 километра"
              },
        image: "https://image.mel.fm/i/p/pRYMjRYjFs/590.jpg",
        text:"я ем зеленку",
        likes: 0
      }
      ]
    }
  },
  name: 'Home',
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
    scrollToTop(){
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
  margin-top:0;
}
</style>