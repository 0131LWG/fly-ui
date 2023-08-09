import { App } from "vue";
import FlyButton from "@fly-ui-v/components/button";
// import component end
import "uno.css";
import "./styles/index.scss";

const components = [FlyButton]; // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install
};

export { FlyButton };
