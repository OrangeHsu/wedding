import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Typography, Card, Form, Input, Button } from "antd";

function Login({ history }) {
  const [loginLoading, setLoginLoading] = useState(true);
  return (
    <div>
      <Parallax
        ref={(ref) => (this.parallax = ref)}
        pages={4}
        //scrolling={false}
      >
        <Parallax.Layer
          offset={0}
          speed={0.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => this.parallax.scrollTo(1)}
        >
          <img
            src={jpegUrl("victoria-miro-hero-Home")}
            style={{ width: "50%", marginLeft: "30%" }}
          ></img>
        </Parallax.Layer>

        <Parallax.Layer
          offset={1}
          speed={0}
          onClick={() => this.parallax.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={jpegUrl("vim-and-vigour-hero-2")}
            style={{ width: "50%", marginLeft: "30%" }}
          ></img>
        </Parallax.Layer>

        <Parallax.Layer
          offset={2}
          speed={0}
          onClick={() => this.parallax.scrollTo(3)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={jpegUrl("npro-hero-1")}
            style={{ width: "50%", marginLeft: "30%" }}
          ></img>
        </Parallax.Layer>

        <Parallax.Layer
          offset={3}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => this.parallax.scrollTo(0)}
        >
          <img
            src={jpegUrl("mc-saatchi-hero-home")}
            style={{ width: "50%", marginLeft: "30%" }}
          ></img>
        </Parallax.Layer>
      </Parallax>
    </div>
  );
}

export default Login;

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
