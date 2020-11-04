import { action, observable, extendObservable } from "mobx";

import loader from "./loader";

import routes from "../routes";
import actions from "../actions";

export default class Core {
  routes = routes;

  @observable
  actions = actions;

  plugins = [];

  @observable
  navs = globals.context.navs;

  async load() {
    const plugins = await loader.load();
    plugins.forEach((plugin) => {
      plugin.default.load(this);
    });
  }

  @action
  registerActions(actions) {
    extendObservable(this.actions, actions);
  }

  @action
  triggerAction(id, ...rest) {
    rest.triggerAction = this.triggerAction.bind(this);
    this.actions[id] && this.actions[id].on(...rest);
  }
}
