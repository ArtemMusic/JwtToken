import './bootstrap';
import { createApp } from "vue";
import index from "./components/App.vue";
import router from "./router.js";

const app = createApp(index);
app.use(router);
app.mount('#app');



