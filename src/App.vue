<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import {v4} from 'uuid';
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  created(){
    console.log(1234)
    axios.get('http://'+this.$store.state.hostIP+'/lampu').then((data) => {
      if(data.data.mode == "hidup"){
        this.$store.state.buttonText = "matikan"
      }else{
        this.$store.state.buttonText = "hidupkan"
      }
    });
    this.$store.state.client = new WebSocket('ws://'+this.$store.state.hostIP+':8100')
    this.$store.state.client.onmessage = (res: any) => {
      const data = JSON.parse(res.data)
      this.$store.state.tempLog.push({
        id: v4(),
        device: data.device,
        mode: data.mode
      })
        console.table(this.$store.state.buttonText)
      if(data.mode == "hidup"){
        this.$store.state.buttonText = "matikan"
      }else{
        this.$store.state.buttonText = "hidupkan"
      }
      
    }
    
  }
});
</script>