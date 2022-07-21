import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import router from "./route";

import BaseContainer from "./ui/BaseContainer.vue";
import BaseCreateButton from "./ui/BaseCreateButton.vue";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);

app.component("base-container", BaseContainer);
app.component("base-create-button", BaseCreateButton);

app.mount("#app");
