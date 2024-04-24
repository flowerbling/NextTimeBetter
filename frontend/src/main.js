import { createApp } from 'vue';
import App from './App.vue'; // 你的根组件
import Vant from 'vant';
import 'vant/lib/index.css'; // 引入 Vant CSS

const app = createApp(App);

app.use(Vant); // 使用 Vant

app.mount('#app'); // 挂载到 DOM
