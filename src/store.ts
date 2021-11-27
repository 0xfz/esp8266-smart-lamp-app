import { createStore } from "vuex"
export default createStore({
    state() {
      return {
        relayState: "",
        hostIP: "192.168.14.22",
        buttonText: "hidupkan",
        tempLog: []
      }
    }
  })