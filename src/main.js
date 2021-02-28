import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@/plugins/font-awesome'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
app.use(router).component('fa', FontAwesomeIcon)
router.isReady().then(() => app.mount('#app'))

