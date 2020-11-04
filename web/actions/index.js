import { Notify } from "@kube-design/components";

export default {
  "dashboard.alert": {
    on() {
      Notify.success({ content: `Dashboard Alert` });
    },
  },
};
