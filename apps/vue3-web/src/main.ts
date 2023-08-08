import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import FlyUi from "fly-ui-v";
import "fly-ui-v/dist/index.css";

createApp(App).use(FlyUi).mount("#app");
