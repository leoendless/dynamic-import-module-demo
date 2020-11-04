import Clusters from "./src/containers/Clusters.jsx";
import actions from "./src/actions";

export default {
  load(app) {
    if (!app) {
      return;
    }

    app.routes.push(...[{ path: "/clusters", component: Clusters }]);
    app.registerActions(actions);
  },
};
