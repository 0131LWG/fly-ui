import { App } from "vue";
import FlyButton from "./index.vue";

FlyButton.install = (app: App) => {
  app.component(FlyButton.name, FlyButton);
};

export default FlyButton;
