<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
        <div id="container">
          <ion-button @click="toggleOnOff()" color="danger">{{$store.state.buttonText}}</ion-button>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import axios from 'axios'
export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  methods: {
    toggleOnOff(){
      if(this.$store.state.buttonText == "hidupkan"){
        axios.get("http://"+this.$store.state.hostIP+"/lampu?mode=hidup")
      }else{
        axios.get("http://"+this.$store.state.hostIP+"/lampu?mode=mati")
      }
    }
  }
}
</script>