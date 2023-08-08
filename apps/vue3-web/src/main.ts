import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import FlyUi from "v-fly-ui";
import "v-fly-ui/dist/index.css";

createApp(App).use(FlyUi).mount("#app");
