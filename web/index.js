import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import Core from "./core";
import App from "./App";

(async function init() {
  const app = new Core();
  await app.load();
  await render(app);
})();

function render(app) {
  return ReactDOM.render(
    <Suspense fallback={<span>Loading</span>}>
      <App app={app} />
    </Suspense>,
    document.getElementById("root")
  );
}
