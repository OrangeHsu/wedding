import { hot } from "react-hot-loader/root";
import React, { Suspense, lazy } from "react";
import { browserHistory } from "react-router";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ConfigProvider, Layout, Skeleton } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import styled from "styled-components";

const StyledLayout = styled(Layout)``;

const Login = lazy(() => import("src/page/login"));
const System = lazy(() => import("src/components/System"));
const Fullpage = lazy(() => import("src/components/Fullpage"));

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <StyledLayout>
          <Suspense fallback={<Skeleton loading={true} active />}>
            <Switch>
              <Route exact path="/page/" component={Fullpage} />
              <Route exact path="/login/" component={Login} />
              <Route path="/" component={Login} />
            </Switch>
          </Suspense>
        </StyledLayout>
      </Router>
    </ConfigProvider>
  );
};

export default hot(App);
