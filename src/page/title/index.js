import React, { useState, useCallback, useMemo, useEffect, lazy } from "react";
import { Typography, Card, Form, Input, Button } from "antd";
import styles from "./index.module.scss";

const url = (name, format, wrap = false) =>
  `${wrap ? "url(" : ""}build/assets/${name}.${format}${wrap ? ")" : ""}`;

function Login({ history }) {
  const [slow, setSlow] = useState("");
  const [speed, setSpeed] = useState("");
  useEffect(() => {
    function handleMouseMove(e) {
      let width = window.innerWidth;

      let normalizedPosition = e.pageX / (width / 2) - 1;
      let speedSlow = 100 * normalizedPosition;
      let speedFast = 200 * normalizedPosition;

      setSlow(`translate(${speedSlow}px)`);
      setSpeed(`translate(${speedFast}px)`);
    }
    //we need to recalculate width when the window is resized
    function handleWindowResize() {
      let width = window.innerWidth;
      width = window.innerWidth;
    }
    // 注意：這個實作是相當簡化的
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.line}>
          <div className={styles.left}>
            <div className={styles.content}>
              <span className={styles.spanSlow} style={{ transform: slow }}>
                Alan{`&`}Jane's
              </span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <span className={styles.spanSlow} style={{ transform: speed }}>
                Alan{`&`}Jane's
              </span>
            </div>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.left}>
            <div className={styles.content}>
              <span className={styles.spanFast} style={{ transform: speed }}>
                wedding
              </span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <span className={styles.spanSlow} style={{ transform: slow }}>
                wedding
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
