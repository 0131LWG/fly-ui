import { App, Plugin } from "vue";
import FlyButton from "./src/index.vue";

const ButtonInstall: Plugin = {
  install(app: App) {
    app.component("fly-button", FlyButton);
  }
};

export default ButtonInstall;
export { FlyButton };
