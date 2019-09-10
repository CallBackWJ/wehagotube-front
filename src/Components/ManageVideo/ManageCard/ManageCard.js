import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {useYoutubeContext} from "../../../Contexts/YoutubeContext"
const Root = styled.div`
  min-width: 8rem;
  min-height: 10rem;
  margin: 0.5rem 0.6rem 0.5rem 0;
  perspective: 20rem;
  &:hover {
    .front {
      transform: rotateY(180deg);
    }
    .back {
      transform: rotateY(360deg);
    }
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  
  border-radius:0.3rem;
  position: absolute;
  transition: transform 1s;
  backface-visibility: hidden;
  background-color:white;
  ${props =>
    props.option
      ? `border: 1px solid lightgray; 
transform: rotateY(180deg);`
      : `border: 1px solid lightgray; `};
`;
const Img = styled.img`
  width: 7rem;
  height: 4rem;
  background-size: cover;
`;
const Title = styled.label`
  width: 7rem;
  height: 1rem;
  margin-bottom:0.3rem;
  margin-top:0.3rem;
  font-size: 0.8rem;
  font-weight: 700;
  overflow: hidden;
`;
const Desc = styled.div`
  margin-top: 0.5rem;
  width:7rem;
  height: 2rem;
  font-size: 0.4rem;
  overflow: hidden;
  line-height: 1.1em;
  color:gray;
`;

const ManageCard = props => {

  const {setVideoId}=useYoutubeContext();
  const handleClick=()=>{
    setVideoId(props.videoId);
  }
  return (
    <Root onClick={handleClick}>
      <Card className="front" option={false}>
        <Img src={props.img} />
        <Title>{props.title}</Title>
        <Desc>
        {props.desc}
        </Desc>
      </Card>
      <Card className="back" option={true}>
        체크포인트
      </Card>
    </Root>
  );
};

ManageCard.propTypes = {};

export default ManageCard;
