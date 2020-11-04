const { getOptions } = require("loader-utils");
const validateOptions = require("schema-utils");

const schema = {
  type: "object",
  properties: {
    importsMap: {
      type: "object",
    },
  },
};

module.exports = function (source) {
  const options = getOptions(this);
  validateOptions(schema, options, "Example Loader");

  const importsStr = Object.entries(options.importsMap).map(
    ([key, value]) => `System.set("${value}", require("${key}"))`
  );

  const callback = this.async();
  callback(null, source + "\n\n" + importsStr + "\n\n");
};
