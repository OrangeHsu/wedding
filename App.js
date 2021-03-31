import { hot } from "react-hot-loader/root";
import React, { Suspense, lazy } from "react";
import Parallax from "react-springy-parallax";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ConfigProvider, Layout, Skeleton } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import styled from "styled-components";

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}build/assets/${name}.svg${wrap ? ")" : ""}`;

const jpegUrl = (name, wrap = false) =>
  `${wrap ? "url(" : ""}build/assets/${name}.jpeg${wrap ? ")" : ""}`;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const Login = lazy(() => import("./page/login"));
const System = lazy(() => import("./components/System"));

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <StyledLayout>
          <Suspense fallback={<Skeleton loading={true} active />}>
            <Switch>
              <Route exact path="/login/" component={Login} />
              <Route path="/" component={System} />
            </Switch>
          </Suspense>
        </StyledLayout>
      </Router>
    </ConfigProvider>
  );
};

export default hot(App);

// export default class extends React.Component {
//   render() {
//     return (
//       <div>
//         <Parallax
//           ref={(ref) => (this.parallax = ref)}
//           pages={4}
//           //scrolling={false}
//         >
//           <Parallax.Layer
//             offset={0}
//             speed={0.5}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             onClick={() => this.parallax.scrollTo(1)}
//           >
//             <img
//               src={jpegUrl("victoria-miro-hero-Home")}
//               style={{ width: "50%", marginLeft: "30%" }}
//             ></img>
//           </Parallax.Layer>

//           <Parallax.Layer
//             offset={1}
//             speed={0}
//             onClick={() => this.parallax.scrollTo(2)}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <img
//               src={jpegUrl("vim-and-vigour-hero-2")}
//               style={{ width: "50%", marginLeft: "30%" }}
//             ></img>
//           </Parallax.Layer>

//           <Parallax.Layer
//             offset={2}
//             speed={0}
//             onClick={() => this.parallax.scrollTo(3)}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <img
//               src={jpegUrl("npro-hero-1")}
//               style={{ width: "50%", marginLeft: "30%" }}
//             ></img>
//           </Parallax.Layer>

//           <Parallax.Layer
//             offset={3}
//             speed={-0}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             onClick={() => this.parallax.scrollTo(0)}
//           >
//             <img
//               src={jpegUrl("mc-saatchi-hero-home")}
//               style={{ width: "50%", marginLeft: "30%" }}
//             ></img>
//           </Parallax.Layer>
//         </Parallax>
//       </div>
//     );
//   }
// }
