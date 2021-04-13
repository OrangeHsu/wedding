import React, { lazy, useRef, useCallback, useState, useMemo } from "react";
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

const PaginationLines = styled.ul`
  display: none;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  opacity: 1;
  position: fixed;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: opacity 0.5s ease-out;
  transition: opacity 0.5s ease-out;
  z-index: 7;
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  a {
    width: 3px;
    height: 100%;
    min-height: 20px;
    display: block;
    margin-left: auto;
    position: relative;
    -webkit-transition: 0.3s ease background;
    transition: 0.3s ease background;
    &.active,
    &:active,
    &:hover {
      background: #fff;
    }
  }
`;
const Fullpage = (props) => {
  const videoRef = useRef(null);
  const [pageSection, setPageSection] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const fullPageAfterLoad = useCallback((origin, destination, direction) => {
    if (destination.index == 0) {
      videoRef.current.pause();
    }
    if (destination.index == 1) {
      videoRef.current.play();
    }
  });
  const fullPageOnLeave = useCallback((origin, destination, direction) => {
    setPageSection(destination.index);
  });

  const getSectionCount = useCallback((state, fullpageApi) => {
    setTotalPage(state.sectionCount);
  });

  const projectContent = useMemo(() => {
    const contentArr = {
      2: { url: "", title: "HI AAA", text: "AAA", color: "rgb(194, 216, 199)" },
      3: { url: "", title: "HI BBB", text: "BBB", color: "rgb(99, 0, 26)" },
    };
    return contentArr[pageSection]
      ? contentArr[pageSection]
      : { url: "", title: "", text: "", color: "" };
  }, [pageSection]);
  return (
    <div>
      <ReactFullpage
        //fullpage options
        scrollingSpeed={1000} /* Options here */
        afterLoad={fullPageAfterLoad}
        onLeave={fullPageOnLeave}
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        render={({ state, fullpageApi }) => {
          getSectionCount(state, fullpageApi);
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
                style={{ marginTop: "-110px" }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className={"video"} id="intro-vid-wrap">
                    <video
                      id="intro-vid"
                      muted={true}
                      loop={true}
                      playsInline={true}
                      autoPlay={false}
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

              <div className={`section projects`}>
                <div
                  className={`project_item`}
                  id="section4"
                  style={{
                    color: "#fff",
                    height: "658px",
                    backgroundColor: projectContent.color,
                  }}
                >
                  <span className={`right_border`}></span>
                  <div
                    className={`project_img view_project`}
                    style={{
                      backgroundImage: `${url(
                        "mc-saatchi-hero-home",
                        "jpeg",
                        true
                      )}`,
                    }}
                    href="https://longstoryshortdesign.co.uk/projects/mc-saatchi"
                  ></div>
                </div>
              </div>

              <div className={`section projects`}>
                <div
                  className={`project_item`}
                  id="section4"
                  style={{
                    color: "#fff",
                    height: "658px",
                    backgroundColor: projectContent.color,
                  }}
                >
                  <div
                    className={`project_img view_project`}
                    style={{
                      backgroundImage: `${url("npro-hero-1", "jpeg", true)}`,
                    }}
                    href="https://longstoryshortdesign.co.uk/projects/mc-saatchi"
                  ></div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <PaginationLines>
        {totalPage &&
          [...Array(totalPage)].map((x, i) => (
            <li key={i}>
              <a
                href={`#home-${i}`}
                className={`
              ${pageSection === i ? "active" : ""}
              `}
              ></a>
            </li>
          ))}
      </PaginationLines>
      <div
        className="projectBar"
        style={{ backgroundColor: projectContent.color }}
      ></div>
      <span
        className={`projectBorder`}
        style={{ backgroundColor: projectContent.color }}
      ></span>
      <div
        className={`projectBorderLeft ${
          projectContent.color !== "" ? "active" : ""
        }`}
        style={{ backgroundColor: projectContent.color, color: "#fff" }}
      >
        <div className={`project_info`}>
          <div className={`project_info_wrap`}>
            <h2>
              <a href={projectContent.url} className="view-project">
                {projectContent.title}
              </a>
            </h2>
            <p>{projectContent.text}</p>
            <a
              className={`view_project view_project_button new_button`}
              href={projectContent.url}
            >
              View Project
              <span>
                <svg viewBox="0 0 49.5 10.06">
                  <line
                    className="a"
                    y1="5.03"
                    x2="48.3"
                    y2="5.03"
                    stroke="#fff"
                  ></line>
                  <path
                    className="b"
                    d="M41.46,9.83a.49.49,0,0,1,.16-.69L48.07,5,41.62.92a.49.49,0,0,1-.16-.69.5.5,0,0,1,.69-.15l7.12,4.53a.5.5,0,0,1,0,.84L42.15,10a.42.42,0,0,1-.26.08A.51.51,0,0,1,41.46,9.83Z"
                  ></path>
                </svg>
                <svg className="second_arrow" viewBox="0 0 49.5 10.06">
                  <line
                    className="a"
                    y1="5.03"
                    x2="48.3"
                    y2="5.03"
                    stroke="#fff"
                  ></line>
                  <path
                    className="b"
                    d="M41.46,9.83a.49.49,0,0,1,.16-.69L48.07,5,41.62.92a.49.49,0,0,1-.16-.69.5.5,0,0,1,.69-.15l7.12,4.53a.5.5,0,0,1,0,.84L42.15,10a.42.42,0,0,1-.26.08A.51.51,0,0,1,41.46,9.83Z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Fullpage;
