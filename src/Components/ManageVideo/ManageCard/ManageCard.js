import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useYoutubeContext } from "../../../Contexts/YoutubeContext";
import { SEARCH_TIMELINK } from "../../../Graphql/queries";
import { useQuery } from "react-apollo-hooks";
import TimeLink from "./MiniTimeLink";
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
  overflow: hidden;
  border-radius: 0.3rem;
  position: absolute;
  transition: transform 1s;
  backface-visibility: hidden;

  background-color: white;
  border:${props => (props.selected ? "1px solid #0090f5" : "1px solid lightgray")};
  ${props =>
    props.option
      ? `transform: rotateY(180deg);`
      : null};
`;
const Img = styled.img`
  width: 7rem;
  height: 4rem;
  background-size: cover;
`;
const Title = styled.label`
  width: 7rem;
  height: 1rem;
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
  font-size: 0.8rem;
  font-weight: 700;
  overflow: hidden;
`;
const Desc = styled.div`
  margin-top: 0.5rem;
  width: 7rem;
  height: 2rem;
  font-size: 0.4rem;
  overflow: hidden;
  line-height: 1.1em;
  color: gray;
`;

const LinkList = styled.div`
  height: 100%;
  overflow: auto;
  
`;
const EmptyLink=styled.div`
height: 100%;
width: 7rem;
background-color: rgb(240, 240, 240);
display:flex;
align-items: center;
justify-content:center;
color:#0090f5;
`

const ManageCard = props => {
  const { setVideoId,videoId } = useYoutubeContext();
  const handleClick = () => {
    setVideoId(props.videoId);
  };

  const { data, error, loading } = useQuery(SEARCH_TIMELINK, {
    variables: { videoId: props.videoId }
  });

  if (loading) return "";
  if (error) return "";

  let links = data.timeLinks.map((link, index) => (
    <TimeLink key={index} num={index + 1} desc={link.desc} />
  ));

  if(!links.length){
    links =(<EmptyLink>Empty</EmptyLink>)

  }

  return (
    <Root onClick={handleClick} >
      <Card className="front" option={false} selected={props.videoId===videoId}>
        <Img src={props.img} />
        <Title>{props.title}</Title>
        <Desc>{props.desc}</Desc>
      </Card>
      <Card className="back" option={true} selected={props.videoId===videoId}>
        <LinkList>{links}</LinkList>
      </Card>
    </Root>
  );
};

ManageCard.propTypes = {};

export default ManageCard;
