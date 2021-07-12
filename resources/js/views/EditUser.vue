<template>
  <ion-page>
    <ion-content>
    <div id="container">
        <ion-avatar class="avatar">
         <ion-img v-if="photos.length===0" :src="me.avatar"/>
         <ion-img v-else :src="photos[0].webviewPath"/>
        </ion-avatar>
        <ion-button color="primary" size='small' @click="takePhoto()">Сменить фото</ion-button>
        <div class="info">
          <ion-item class="name-wrapper">
            <ion-input id="name" :value="me.name"/>
          </ion-item>
            <ion-textarea autogrow="true" rows="6" color="medium" id="bio" :value="me.bio"/>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  pencilOutline,
  chevronUpOutline
  } from 'ionicons/icons';
import { 
  IonContent,
  IonHeader,
  IonPage,
  IonAvatar,
  IonImg, 
  IonFab, 
  IonIcon,
  IonFabButton,
  IonInput,
  IonTextarea
  } from '@ionic/vue';
import PostCard from '../components/UserPost'
import { defineComponent } from 'vue';
import { usePhotoGallery } from '../composables/usePhotoGallery';

export default defineComponent({
  data() {
      return {
        // user:{},
           me:{
            id:0,
            name:"Дуэйн Скала Джонсон",
            bio:"В сороковые годы, чтобы покорить девушку, нужно было быть солдатом; в пятидесятые годы — евреем; в шестидесятые — чернокожим. В наше время, чтобы покорить девушку, нужно быть мной.",
            avatar:"https://media.gq-magazine.co.uk/photos/5d13ad12976fa30cf6f3b2a2/16:9/w_2560%2Cc_limit/HP.jpg",
            distance:"3 километра"
        },
      }
  },
  name: 'Home',
  components: {
    IonContent,
    IonPage,
    IonAvatar,
    IonImg,
    IonInput,
    IonTextarea
    // IonFab,
    // IonIcon,
    // IonFabButton,
    // PostCard
  },
  setup() {
      const { photos, takePhoto } = usePhotoGallery();
    return {
        takePhoto,photos,
      pencilOutline,
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
#container{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}

.avatar{
  width:50vw;
  height:50vw;
}
#bio{
  font-weight: 400;
  font-size:1rem;

}
.info{
    font-size:2rem;
    display:flex;
    flex-direction:column;
    text-align:center;
    margin-left:1vw;
    margin-right:1vw;
    width:100%;
    height:auto%;
    
}
.name-wrapper{
  text-align:center;
  font-weight: 700;
  margin-top:0.5rem;
  margin-bottom:0.5rem;
}
#name{
  margin:auto;
}
</style>

<style>
.center-text{
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
}
</style>