import React, { lazy } from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import styles from "./index.module.scss";

const Title = lazy(() => import("../../page/title"));
const url = (name, format, wrap = false) =>
  `${wrap ? "url(" : ""}build/assets/${name}.${format}${wrap ? ")" : ""}`;

const UnicornAfter = styled.div`
  &:after {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-image: ${url("wedding", "jpg", true)};
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }
`;

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Title></Title>
          </div>
          <div
            className="section"
            style={{
              marginTop: "-400px",
              display: "flex",
              justifyContent: "center",
              height: "100%",
              zIndex: -1,
            }}
          >
            <UnicornAfter></UnicornAfter>
          </div>
          <div className={`section ${styles.home_section_video}`}>
            <h4 className={styles.replay}>
              <a href="#">Replay video</a>
            </h4>
            <div className={styles.video} id="intro-vid-wrap">
              <video
                id="intro-vid"
                muted="true"
                loop=""
                playsinline=""
                autoplay="false"
                autostart="false"
              >
                <source
                  src="https://player.vimeo.com/external/312121146.hd.mp4?s=22133b7a86815fef2c891affe590435232390636&amp;profile_id=174"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default Fullpage;
