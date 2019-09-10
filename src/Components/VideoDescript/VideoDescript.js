import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {useYoutubeContext} from "../../Contexts/YoutubeContext"
const Descript = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
`;

const StateBar = styled.div`
  width: 10rem;
  height: 2rem;
  border-radius: 0.2rem;
  border: solid 1px
    ${props =>
      props.state === "upcoming"
        ? "rgb(65, 116, 251)"
        : props.state === "live"
        ? "rgb(238, 90, 83)"
        : "rgb(76, 76, 76)"};
  background: white;
  display: flex;
  justify-content: center;
  color: ${props =>
    props.state === "upcoming"
      ? "rgb(65, 116, 251)"
      : props.state === "live"
      ? "rgb(238, 90, 83)"
      : "rgb(76, 76, 76)"};
  align-items: center;
  padding: 0.5rem;
  padding-top: 0.7rem;
  font-size: 1rem;
`;
const MainTitle = styled.div`
  margin-top: 1rem;
  font-weight: 700;
`;
const SubTitle = styled.div`
  font-weight: 300;
  margin-bottom: 1rem;
`;
const Viewers = styled.div`
  color: gray;
  margin-top: auto;
`;
const VideoDescript = props => {

  
  const {seek}=useYoutubeContext();
  console.log("seek:",seek);


  return (
    <Descript>
      <StateBar state={props.liveBroadcastContent}>
        {props.liveBroadcastContent === "live"
          ? "실시간 스트리밍중"
          : props.liveBroadcastContent === "upcoming"
          ? "방송 준비중"
          : "방송 종료"}
      </StateBar>
      <MainTitle>{props.title}</MainTitle>
      <SubTitle>{props.description}</SubTitle>
      <Viewers>{props.concurrentViewers}명 시청중</Viewers>
    </Descript>
  );
};

VideoDescript.propTypes = {};

export default VideoDescript;
