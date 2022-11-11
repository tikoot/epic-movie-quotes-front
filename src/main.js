import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/styles.css/index.css";
import "./config/vee-validate/rules";
import "./config/vee-validate/messages";
import BaseDialog from "@/components/UI/BaseDialog.vue";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.component("BaseDialog", BaseDialog);

app.use(pinia);
app.use(router);

app.mount("#app");
