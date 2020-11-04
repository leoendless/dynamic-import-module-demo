const fs = require("fs");
const path = require("path");
const Koa = require("koa");
const render = require("koa-ejs");
const Loader = require("./loader");
const Context = require("./context");

const app = new Koa();
app.uiContext = new Context();

const loader = new Loader(app);

global.APP_ROOT = path.resolve(__dirname, "../");

render(app, {
  root: path.join(__dirname, "view"),
  layout: false,
  viewExt: "ejs",
  cache: false,
  debug: false,
});

const bootstrap = () => {
  loader.load();

  let importMaps = {};
  try {
    const buffer = fs.readFileSync(
      path.resolve(__dirname, "../systemjs-imports.json")
    );
    importMaps = buffer.toString();
  } catch (error) {}

  app.use(async function (ctx) {
    await ctx.render("index", {
      importMaps,
      hostname: ctx.hostname,
      context: JSON.stringify(app.uiContext),
      navs: app.uiContext.navs,
      isDevMode: process.env.NODE_ENV === "development",
    });
  });

  app.listen(3000, () => {
    console.log(`App running at port 3000`);
  });

  app.on("error", (err) => {
    console.error(err);
  });
};

process.on("uncaughtException", (err) => {
  console.error(err);
  /* eslint-disable no-console */
  console.log("NOT exit...");
});

bootstrap();
