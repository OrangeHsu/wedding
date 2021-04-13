import React, { Fragment, useEffect, useState, useCallback } from "react";

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
    return () => window.removeEventListener("scroll", onScroll);
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
            <div className="bank">誠摯地邀請您來參與我們的婚禮</div>
            <div className="number">
              <p>Alan & Jane</p>
            </div>
            <div className="expiry"></div>
            <div className="cvv">
              <p>2022.03.19 星期六 12:00 pm</p>
              <p>北投麗禧飯店</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
