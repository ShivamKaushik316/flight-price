import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'


Vue.use(VueMaterial)

import VueMoJS from 'vue-mo-js'
Vue.use(VueMoJS)

import VueRouter from 'vue-router'

// import socketio from 'socket.io';
// import VueSocketIO from 'vue-socket.io';

import VueSweetalert2 from 'vue-sweetalert2';
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VueSweetalert2);

import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
Vue.component('BadgerAccordion', BadgerAccordion)
Vue.component('BadgerAccordionItem', BadgerAccordionItem)

import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

Vue.use(Autocomplete)

import vmodal from 'vue-js-modal'
import VModal from 'vue-js-modal'
Vue.use(vmodal)
Vue.use(VModal, { dialog: true })

Vue.use(VueRouter)

import router from './router.js'


import Vuex from 'vuex'

Vue.use(Vuex)
import { store } from './store.js';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.mixin({
  data: function(){
    return {
     
    }
  },
  computed: {
  },
  methods: {
    showLoader: bool => {
      document.getElementById("loading").style.display = bool ? "block" : "none";
    },
    getTime(input) {
    
      var getTImeHour = input.split("T")
      
      return getTImeHour[1]
    }, getduration(input) {
      
      var getdurationtime = input.split("PT")
      
      return getdurationtime[0]
    }

    
   }
});
new Vue({
  store,
  render: h => h(App),
  router:router
}).$mount('#app')
