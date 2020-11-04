import React from "react";
import { inject } from "mobx-react";
import styled from "styled-components";
import { Button } from "@kube-design/components";

@inject("rootStore")
class Dashboard extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>Dashboard</div>
        <br />
        <Button
          onClick={() => this.props.rootStore.triggerAction("plugin.alert")}
        >
          Trigger Plugin Action
        </Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

export default Dashboard;
