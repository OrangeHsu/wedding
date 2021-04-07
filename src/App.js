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
const Fullpage = lazy(() => import("src/components/Fullpage"));
const Story = lazy(() => import("src/components/Story"));
const Events = lazy(() => import("src/components/Events"));
const Photo = lazy(() => import("src/components/Photo"));
const Contact = lazy(() => import("src/components/Contact"));

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <StyledLayout>
          <Suspense fallback={<Skeleton loading={true} active />}>
            <PageLayout>
              <Switch>
                <Route exact path="/contact/" component={Contact} />
                <Route exact path="/photo/" component={Photo} />
                <Route exact path="/events/" component={Events} />
                <Route exact path="/story/" component={Story} />
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
