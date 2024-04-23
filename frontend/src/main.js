import 'vant/lib/index.css';

import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';



createApp(App).mount('#app')

const app = createApp();
app.use(Vant);
