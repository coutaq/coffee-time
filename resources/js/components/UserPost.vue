<template>
  <div class="post">
  <ion-item lines="none"/>
    <ion-item lines="none" :href="'/profile/'+post.user.id" detail="false">
     <ion-avatar>
         <img :src="post.user.avatar">
        </ion-avatar>
      <ion-label style="margin-left:1rem">
       {{ post.user.name}}
      </ion-label>
      <ion-icon class="icon" :icon="personOutline"/>
    </ion-item>
    <ion-item id="chips" lines="none" detail="false">
      <ion-chip v-for="interest in post.interests" :key="interest.name" :color="interest.color">
        <ion-label >{{interest.name}}</ion-label>
      </ion-chip>
    </ion-item>
    <ion-img :src="post.image"/>
    <ion-item lines="none">
      {{ post.text}}
    </ion-item>
    <ion-item class="bottom-bar" lines="full">
       <ion-icon @click="like()" class="like-btn icon" :icon="isLiked?heart:heartOutline"/>
       {{likes}}
    </ion-item>
    </div>
</template>

<script>
import {  
  IonItem,
  IonAvatar,
  IonLabel,
  IonImg,
  IonIcon,
  IonChip
} from '@ionic/vue';
import {
  navigateOutline,
  personOutline,
  heartOutline,
  heart
} from 'ionicons/icons';
import { defineComponent } from 'vue';

export default{
    props:['post'],
    data() {
        return {
            isLiked:false,
            likes:0
        }
    },
  components: { 
    IonItem,
    IonAvatar,
    IonLabel,
    IonImg,
    IonIcon,
    IonChip
    },
  setup() {
    return {
      navigateOutline,
      personOutline,
      heartOutline,
      heart
    };
  },
  methods: {
    like(){
        this.isLiked=!this.isLiked;
        this.likes+=this.isLiked? 1: -1;
    } 
  },
  created(){
      this.likes = this.post.likes;
  }
};
</script>

<style>
#chips{
  margin-left:-1vh;
}
.icon{
    color:var(--ion-color-primary)

}
.bottom-bar{
    margin-top:-1rem;
    display:flex;
    font-size:1.25rem;
}
.like-btn{
    padding-right:0.25rem;
    font-size:1.5rem;

}
</style>