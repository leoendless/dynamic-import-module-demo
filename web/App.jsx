import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "mobx-react";
import styled from "styled-components";

import Nav from "./Nav";
import NotFound from "./NotFound";

import '@kube-design/components/esm/styles/index.css'
import "./index.css";

function App({ app }) {
  return (
    <Provider rootStore={app}>
      <Router>
        <Side>
          <Nav data={app.navs.global} />
        </Side>
        <Main>
          <Switch>
            {app.routes.map((route) => {
              const Component = route.component;
              return (
                <Route key={route.path} path={route.path} exact>
                  <Component />
                </Route>
              );
            })}
            <Redirect from="/" to="/dashboard" exact />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Main>
      </Router>
    </Provider>
  );
}

const Side = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 100vh;
  background-color: #242e42;
`;

const Main = styled.div`
  margin-left: 320px;
  min-height: 100vh;
`;

export default App;
