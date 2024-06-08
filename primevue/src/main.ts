import Button from "primevue/button";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import "primevue/resources/themes/lara-light-teal/theme.css";
import { createApp } from "vue";

import App from "./App.vue";
import "./style.css";

const app = createApp(App);
app.use(PrimeVue);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Dialog", Dialog);
app.mount("#app");
