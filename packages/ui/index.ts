import { FlyButton } from "@v-fly-ui/components/button";
import Components from "./components";
import { App } from "vue";
import "uno.css";
import "./styles/index.scss";

const Installer = {
  install(app: App) {
    Components.forEach((c) => {
      app.use(c);
    });
  }
};

export default Installer;
export { FlyButton };
