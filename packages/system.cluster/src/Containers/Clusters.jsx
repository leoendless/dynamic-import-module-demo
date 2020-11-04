import React from "react";
import { inject } from "mobx-react";
import { Button } from "@kube-design/components";

import styles from "./index.css";

@inject("rootStore")
export default class Clusters extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div>Clusters Plugin</div>
        <br />
        <Button
          onClick={() => this.props.rootStore.triggerAction("dashboard.alert")}
        >
          Trigger Core Action
        </Button>
      </div>
    );
  }
}
