import { hot } from "react-hot-loader/root";
import React, { Suspense, lazy } from "react";
import { browserHistory } from "react-router";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ConfigProvider, Layout, Skeleton } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 0.8rem;
  font-family: "Roboto";
`;

const PageLayout = lazy(() => import("src/components/Layout"));
const System = lazy(() => import("src/components/System"));
const Fullpage = lazy(() => import("src/components/Fullpage"));

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <StyledLayout>
          <Suspense fallback={<Skeleton loading={true} active />}>
            <PageLayout>
              <Switch>
                <Route exact path="/page/" component={System} />
                <Route path="/" component={Fullpage} />
              </Switch>
            </PageLayout>
          </Suspense>
        </StyledLayout>
      </Router>
    </ConfigProvider>
  );
};

export default hot(App);
