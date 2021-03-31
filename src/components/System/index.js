import React, { useEffect } from "react";
import Parallax from "react-springy-parallax";

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}build/assets/${name}.svg${wrap ? ")" : ""}`;

const jpegUrl = (name, wrap = false) =>
  `${wrap ? "url(" : ""}build/assets/${name}.jpeg${wrap ? ")" : ""}`;

export default class System extends React.Component {
  render() {
    return (
      <div>
        <Parallax
          ref={(ref) => (this.parallax = ref)}
          pages={4}
          //scrolling={false}
        >
          <Parallax.Layer
            offset={0}
            speed={0}
            factor={4}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />

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
              src={url("clients-main")}
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
              src={url("bash")}
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
              src={url("server")}
              style={{ width: "50%", marginLeft: "30%" }}
            ></img>
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}
