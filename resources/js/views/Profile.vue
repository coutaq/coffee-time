<template>
  <ion-page>
    <ion-content>
    <div class="center-text" v-if="!user.hasOwnProperty('id')">
    Данный пользователь не существует.
    </div>
    <div id="container" v-else>
        <ion-avatar class="avatar">
         <ion-img :src="user.avatar"/>
        </ion-avatar>
        <div class="info">
          <ion-item class="name-wrapper">
            <h2 class="name ion-text-capitalize">{{user.name}}</h2>
          </ion-item>
            <ion-text color="medium" class="bio">{{user.bio}}</ion-text>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonContent,
    IonPage,
    IonAvatar,
    IonItem,
    IonText,
    IonImg
  } from '@ionic/vue';
import PostCard from '../components/UserPost'
import { defineComponent } from 'vue';

export default defineComponent({
   data() {
      return {
        user:{}
      }
  },
  props:['userId'],
  name: 'Profile',
  components: {
    IonContent,
    IonPage,
    IonAvatar,
    IonItem,
    IonText,
    IonImg
  },
  created(){
    let id = this.$route.params.id?this.$route.params.id: this.userId;
  },
  methods: {
  },
});
</script>
<style scoped>
#container{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  heigth:100%;
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

<style>
.center-text{
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
</style>