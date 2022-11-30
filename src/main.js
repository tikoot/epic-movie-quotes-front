import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/styles.css/index.css";
import "./config/vee-validate/rules";
import "./config/vee-validate/messages";
import i18n from "@/i18n/index.js";
import BaseDialog from "@/components/authComponents/BaseDialog.vue";
import PageBaseComponent from "@/components/newsFeedComponents/PageBaseComponent.vue";
import PageBaseDialog from "@/components/newsFeedComponents/PageBaseDialog.vue";
import LanguageSelect from "@/components/shared/LanguageSelect.vue";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.component("BaseDialog", BaseDialog);
app.component("PageBaseComponent", PageBaseComponent);
app.component("PageBaseDialog", PageBaseDialog);
app.component("LanguageSelect", LanguageSelect);

app.use(pinia);
app.use(router);
app.use(i18n);

app.mount("#app");
