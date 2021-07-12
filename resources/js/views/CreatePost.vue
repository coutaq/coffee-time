<template>
  <ion-page>
    <ion-content  fullscreen="true">
      <div id="container">
        <div class="image" v-if="photos.length>0">
          <ion-img :src="photos[0].webviewPath"/>
          <ion-button @click="clearPhoto()" size="small">Удалить изображение</ion-button>
          <ion-textarea placeholder="Описание"></ion-textarea>
           <ion-button @click="post()" size="small">Запостить</ion-button>
        </div>
      </div>
      <ion-fab vertical="bottom" horizontal="center" slot="fixed" color="secondary">
            <ion-fab-button @click="takePhoto()">
                <ion-icon :icon="camera"></ion-icon>
            </ion-fab-button>
        </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import { usePhotoGallery } from '../composables/usePhotoGallery';
import { 
  addOutline,
  chevronUpOutline,
  camera,
  trash,
  close
  } from 'ionicons/icons';
import { 
  IonContent,
  IonPage,
  IonFab,
  IonIcon,
  IonFabButton,
  IonButton,
  IonTextarea,
  IonImg
  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
    }
  },
  name: 'Home',
  components: {
    IonContent,
    IonPage,
    IonFab,
    IonIcon,
    IonFabButton,
    IonButton,
    IonTextarea,
    IonImg
  },
  computed:{
     firstPhoto() {
    return this.photos;
  },
  },
  setup() {
    const { photos, takePhoto } = usePhotoGallery();
     const slideOpts = {
      initialSlide: 1,
      speed: 400
    };

    return {
      takePhoto,photos,
      camera, trash, close,
    }
  },
  methods: {
    clearPhoto(){
     this.photos = []
    },
    post(){
     console.log("тут крч бд")
    }
  },
});
</script>
<style scoped>
.image{
  display:flex;
  flex-direction:column;
}
.image>*{
  margin:auto;
}
.image>ion-button{
  margin-top:1rem;
}
#container{
    margin-bottom:-10rem;
}
#slides{
  padding-top:3rem;
}
</style>