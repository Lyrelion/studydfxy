import { createApp } from "vue";
import App from "./app.vue";
import studydfxy from "@studydfxy/components";

const app = createApp(App);

app.use(studydfxy);

app.mount("#app");
