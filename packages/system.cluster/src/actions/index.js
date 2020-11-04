import { Notify } from "@kube-design/components";

export default {
  "plugin.alert": {
    on() {
      Notify.success({ content: `Plugin Alert` });
    },
  },
};
