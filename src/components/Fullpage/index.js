import React, { lazy, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";

const Title = lazy(() => import("../../page/title"));
const url = (name, format, wrap = false) =>
  `${wrap ? "url(" : ""}build/assets/${name}.${format}${wrap ? ")" : ""}`;

const UnicornAfter = styled.div`
  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-image: ${url("wedding", "jpeg", true)};
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }
`;

const HomeSectionVideo = styled.div`
  &:after {
    right: 0;
  }
  &:before {
    left: 0;
  }
  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 20%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 100%;
    background: #111;
    -webkit-transition: width 1s ease;
    transition: width 1s ease;
  }
  .replay {
    color: #fff;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 60px;
    &:a:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 0%;
      height: 1px;
      background: #fff;
      opacity: 0;
      -webkit-transition: width 0.3s;
      transition: width 0.3s;
    }
  }
  .video {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  #intro-vid-wrap {
    padding: 0 110px;
    z-index: -1;
    -webkit-transition: width 1s ease, opacity 0.5s ease;
    transition: width 1s ease, opacity 0.5s ease;
    opacity: 1;
    width: 100%;
    max-width: 80%;
    height: 100%;
    max-height: 700px;
    @media (min-width: 1024px) {
      padding: 0 !important;
    }
  }
  &.active {
    #intro-vid-wrap {
      width: 100%;
      max-width: 80%;
      height: 100%;
      max-height: 700px;
    }

    &:before,
    &:after {
      width: 10%;
      -webkit-transition: width 1s ease;
      transition: width 1s ease;
    }
  }
  #intro-vid {
    width: 100%;
    height: 100%;
  }
  .previous-section {
    #intro-vid-wrap {
      padding: 0 110px;
      position: fixed;
      width: 100%;
      max-width: 80%;
      height: 100%;
      max-height: 700px;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      margin: 0;
      opacity: 0.02;
      -webkit-transition: opacity 0.5s ease, top 0.5s ease;
      transition: opacity 0.5s ease, top 0.5s ease;
    }
  }
`;
function Fullpage({ history }) {
  const videoRef = useRef(null);
  //   const playVideo = useCallback(() => {
  //     videoRef.current.pause();
  //     videoRef.current.currentTime = "0";
  //     videoRef.current.play();
  //   });

  const fullPageAfterLoad = useCallback((origin, destination, direction) => {
    if (destination.index == 0) {
      videoRef.current.pause();
    }
    if (destination.index == 1) {
      console.log(videoRef.current.currentTime);
      videoRef.current.play();
    }
  });
  return (
    <ReactFullpage
      //fullpage options
      scrollingSpeed={1000} /* Options here */
      afterLoad={fullPageAfterLoad}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div
              className="section"
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
                zIndex: -1,
              }}
            >
              <UnicornAfter>
                <Title></Title>
              </UnicornAfter>
            </div>

            <HomeSectionVideo
              className={`section`}
              style={{ marginTop: "-160px" }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={"video"} id="intro-vid-wrap">
                  <video
                    id="intro-vid"
                    muted="true"
                    loop="true"
                    playsinline="true"
                    autoplay="false"
                    autostart="false"
                    ref={videoRef}
                  >
                    <source
                      src="https://player.vimeo.com/external/312121146.hd.mp4?s=22133b7a86815fef2c891affe590435232390636&amp;profile_id=174"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </HomeSectionVideo>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
export default Fullpage;
