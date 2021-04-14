import React, { Fragment, useEffect, useState, useCallback } from "react";

const url = (name, format, wrap = false) =>
  `${wrap ? "url(" : ""}build/assets/${name}.${format}${wrap ? ")" : ""}`;

const Events = (props) => {
  let [posY1, setPosY1] = useState(0);
  let [posY2, setPosY2] = useState(0);
  let [posY3, setPosY3] = useState(0);

  const onScroll = useCallback(() => {
    console.log("gg");
  });
  useEffect(() => {
    const interval = setInterval(() => {
      if (posY1 <= -900) setPosY1(0);
      if (posY2 <= -900) setPosY2(0);
      if (posY3 <= -1200) setPosY3(0);

      setPosY1(posY1 - 1);
      setPosY2(posY2 - 2);
      setPosY3(posY3 - 3);
    }, 1000);

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="events-wrapper">
      <div id="worldCrystals">
        <div
          className="crystal_01"
          style={{ backgroundPosition: "0" + posY1 + "px" }}
        ></div>
        <div
          className="crystal_02"
          style={{ backgroundPosition: "0" + posY2 + "px" }}
        ></div>
        <div
          className="crystal_03"
          style={{ backgroundPosition: "0" + posY3 + "px" }}
        ></div>
      </div>
      <div id="crystals">
        <div
          className="crystal_01"
          style={{ backgroundPosition: "0" + posY1 + "px" }}
        ></div>
        <div
          className="crystal_02"
          style={{ backgroundPosition: "0" + posY2 + "px" }}
        ></div>
        <div
          className="crystal_03"
          style={{ backgroundPosition: "0" + posY3 + "px" }}
        ></div>
      </div>
      <div className="page">
        <div className="container">
          <div className="card">
            <div className="card-layer card-layer-1"></div>
            <div className="card-layer card-layer-2"></div>
            <div className="card-layer card-layer-3"></div>
            <div className="chip"></div>
            <div className="bank">
              <p>誠摯地邀請您來參與我們的婚禮</p>
            </div>
            <div className="number">
              <svg className="card_img_box">
                <defs>
                  <filter id="filter">
                    <feGaussianBlur stdDeviation="8" />
                  </filter>
                  <mask id="mask">
                    <ellipse
                      cx="50%"
                      cy="50%"
                      rx="37%"
                      ry="37%"
                      fill="white"
                      filter="url(#filter) "
                    ></ellipse>
                  </mask>
                </defs>

                <image
                  className="card_img"
                  xlinkHref={url("card_pic", "jpeg")}
                  mask="url(#mask)"
                ></image>
              </svg>
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  left: "25%",
                  bottom: "-10%",
                  alignItems: "center",
                }}
              >
                <div className="font_box">
                  <span className="font">黃</span>
                  <span className="font">振</span>
                  <span className="font">倫</span>
                </div>
                <span style={{ fontFamily: '"Roboto", cursive' }}>x</span>
                <div className="font_box">
                  <span className="font">徐</span>
                  <span className="font">子</span>
                  <span className="font">茜</span>
                </div>
              </div>
            </div>

            <div className="cvv">
              <p>
                2022.03.19 <span>星期六</span> 12:00 pm
              </p>
              <p>
                <span>北投麗禧溫泉酒店</span>
              </p>
              <p>(02)2898 - 8888</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
