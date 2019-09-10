import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import VideoDescript from "../../VideoDescript";
import { withRouter } from "react-router-dom";
import { useYoutubeContext } from "../../../Contexts/YoutubeContext";
const Panel = styled.div`
  width: 100%;
  height: 12rem;
  background: rgb(238, 238, 238);
  padding: 1.5rem;
`;
const Tamplate = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 70rem;
  display: flex;
`;
const Video = styled.div`
  flex: 2.5;
`;
const Image = styled.img`
  width: 15rem;
  height: 9rem;
  position: relative;
  background-size: cover;
`;
const Badge = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  width: 100%;
  margin: 0 auto;
  width: 300px;
  height: 50px;
`;

const Play = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: -1.5rem;
`;
const ButtonImg = styled.div`
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
  background: url(https://image.flaticon.com/icons/png/512/26/26025.png);
  background-size: cover;
`;
const CurrentVideoPanel = props => {
  const { setVideoId,setChatId } = useYoutubeContext();
  const handleClick = () => {
    setVideoId(props.videoId);
    setChatId(props.activeLiveChatId);

    props.history.push("/view" );
  };
  return (
    <Panel>
      <Tamplate>
        <Video>
          <Image src={props.thumbnailStandard} />
          <Badge />
        </Video>
        <VideoDescript
          title={props.title}
          description={props.description}
          concurrentViewers={props.concurrentViewers}
          liveBroadcastContent={props.liveBroadcastContent}
        />
        <Play onClick={handleClick}>
          바로가기
          <ButtonImg />
        </Play>
      </Tamplate>
    </Panel>
  );
};

CurrentVideoPanel.propTypes = {};

export default withRouter(CurrentVideoPanel);
