module.exports = {
  load(context) {
    if (context) {
      context.navs.global.splice(1, 0, {
        name: "clusters",
        title: "Clusters",
      });
    }
  },
};
