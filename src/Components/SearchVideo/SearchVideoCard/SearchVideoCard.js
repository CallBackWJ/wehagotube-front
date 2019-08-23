import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CheckPoint from '../CheckPoint'
const Card = styled.div`
  width: 16.5rem;
  height: 18rem;
  background: rgb(240, 240, 250);
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 1rem;
`;

const VideoImg = styled.img`
  background-size: cover;
  width: 100%;
`;

const Title = styled.div`
  font-weight: 600;
`;

const CheckPointContainer=styled.div`
height:3.8rem;
overflow: auto;
display:flex;
flex-direction:column;
`


const SearchVideoCard = props => {
  return (
    <Card>
      <VideoImg src="https://s3.dexerto.com/thumbnails/_thumbnailLarge/youtube-logo-thumbnail-change-experiment.jpg" />
      <Title>
        [WEHAGO 로드쇼] 1. 세무회계사무소 용 ERP - WEHAGO T 알아보기
      </Title>
      <hr />
      <CheckPointContainer>
          <CheckPoint/>
          <CheckPoint/>
          <CheckPoint/>
          <CheckPoint/>
          <CheckPoint/>
          <CheckPoint/>
      </CheckPointContainer>
    </Card>
  );
};

SearchVideoCard.propTypes = {};

export default SearchVideoCard;
