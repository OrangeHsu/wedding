import React, { Fragment, useEffect, useState, useCallback } from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const ContentStyle = styled.div`
  height: 80vh;
  text-align: "center";
  color: #fff;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const carousel = (props) => {
  return (
    <Carousel autoplay dots={false}>
      <ContentStyle>
        <Content>1</Content>
      </ContentStyle>
      <ContentStyle>
        <Content>2</Content>
      </ContentStyle>
      <ContentStyle>
        <Content>3</Content>
      </ContentStyle>
      <ContentStyle>
        <Content>4</Content>
      </ContentStyle>
    </Carousel>
  );
};

export default carousel;
