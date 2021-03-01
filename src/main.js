import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import Tabs from 'vue3-tabs';
import { FontAwesomeIcon } from '@/plugins/font-awesome'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
app.use(router).use(Tabs).component('fa', FontAwesomeIcon)
router.isReady().then(() => app.mount('#app'))

