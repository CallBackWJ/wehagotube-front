import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CheckPoint from '../CheckPoint'
import { withRouter } from "react-router-dom";
import { useYoutubeContext } from "../../../Contexts/YoutubeContext";
import { SEARCH_TIMELINK } from "../../../Graphql/queries";
import { useQuery } from "react-apollo-hooks";
const Card = styled.div`
  width: 16.5rem;
  height: 18rem;
  background: rgb(250, 250, 255);
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 1rem;
`;

const VideoImg = styled.img`
  background-size: cover;
  width: 100%;
  height:8rem;

`;

const Title = styled.div`
  font-weight: 500;
  height:3rem;

`;

const CheckPointContainer=styled.div`
height:3.8rem;
overflow: auto;
display:flex;
flex-direction:column;
`

const SearchVideoCard = props => {
  const { setVideoId } = useYoutubeContext();
  const handleClick = () => {
    setVideoId(props.videoId);
    props.history.push("/view");
  };

  const { data, error, loading } = useQuery(SEARCH_TIMELINK, {
    variables: { videoId: props.videoId }
  });

  if (loading) return "";
  if (error) return "";

  const links = data.timeLinks.map((link, index) => (
    <CheckPoint key={index} time={link.time}  desc={link.desc} />
  ));


  return (
    <Card>
      <VideoImg src={props.img} onClick={handleClick}/>
      <Title>
      {props.title}
      </Title>
      <hr />
      <CheckPointContainer>
         {links}
      </CheckPointContainer>
    </Card>
  );
};

SearchVideoCard.propTypes = {};

export default withRouter(SearchVideoCard);
