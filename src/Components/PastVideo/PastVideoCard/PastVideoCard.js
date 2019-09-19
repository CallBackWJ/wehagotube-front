import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { useYoutubeContext } from "../../../Contexts/YoutubeContext";
const Card = styled.div`
  width: 100%;
  height: 9rem;
  background: rgb(248, 249, 254);
  margin-bottom: 1rem;
  display: flex;
  padding: 1rem;
`;

//동영상 이미지 부분
const Video = styled.div`
  flex: 2;
`;
const Image = styled.img`
  width: 12rem;
  height: 7rem;
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

//설명 부분
const Descript = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
`;
const MainTitle = styled.div`
  font-size: 1.2rem;
`;
const SubTitle = styled.div`
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.3em;
  height: 3.6em;
`;
const LookupCounter = styled.div`
  color: rgb(170, 170, 170);
  margin-top: auto;
`;

const PastVideoCard = props => {
  const { setVideoId,setChatId,setTitle,setDesc,setState,setViewCount} = useYoutubeContext();
  const handleClick = () => {
    setVideoId(props.videoId);
    setChatId("");
    setTitle(props.title);
    setDesc(props.description);
    setState("completed");
    setViewCount(props.viewCount);
    props.history.push("/view");
  };
  return (
    <Card>
      <Video onClick={handleClick}>
        <Image src={props.thumbnail} />
        <Badge></Badge>
      </Video>
      <Descript>
        <MainTitle>{props.title}</MainTitle>
        <SubTitle>{props.description}</SubTitle>
        <LookupCounter>
          조회수 {props.viewCount} | {props.publishedAt} 전
        </LookupCounter>
      </Descript>
    </Card>
  );
};

PastVideoCard.propTypes = {};

export default withRouter(PastVideoCard);
