import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

library.add(fas)
dom.watch();

const app = createApp(App)
app.use(router, VueSweetalert2)
app.mount('#app');