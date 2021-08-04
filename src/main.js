import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

library.add(fas)
dom.watch();

createApp(App).use(router).mount('#app')