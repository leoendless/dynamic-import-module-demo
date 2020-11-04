import { isEmpty } from "lodash";

function loadConfig() {
  const { packages } = globals.context;
  return loadPackages(packages);
}

function loadPackages(packages) {
  const files = [];
  if (!isEmpty(packages)) {
    Object.keys(packages).forEach((key) => {
      const { prefix, main } = packages[key];
      files.push(`${prefix}/${main}`);
    });
  }

  return Promise.all(
    files.map((file) => System.import(`${location.origin}${file}`))
  );
}

export default {
  load: loadConfig,
};
