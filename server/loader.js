const set = require("lodash/set");
const mount = require("koa-mount");
const serve = require("koa-static");

class Loader {
  constructor(app) {
    this.app = app;
  }

  load() {
    this.loadConfig();
    this.loadPackages();
  }

  loadConfig() {
    this.config = require("./config");
  }

  loadPackages() {
    const { packages } = this.config;
    Object.keys(packages).forEach(key => {
      const servicePath = global.APP_ROOT + `/packages/${key}`;
      const pack = require(`${servicePath}/package.json`);
      if (pack) {
        if (pack.pluginEntry) {
          const entry = require(`${servicePath}/${pack.pluginEntry}`);
          entry.load(this.app.uiContext);
        }
        set(this.app.uiContext, `packages["${key}"]`, pack);
        pack.prefix = `/${key.replace(".", "/")}`;
        this.app.use(mount(pack.prefix, serve(servicePath)));
      }
    });
  }
}

module.exports = Loader;
