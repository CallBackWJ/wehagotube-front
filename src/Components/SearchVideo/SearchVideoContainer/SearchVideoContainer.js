import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Card from '../SearchVideoCard'
import { SEARCH_VIDEO } from "../../../Graphql/queries";
import {useAdminContext} from "../../../Contexts/AdminContext"
import { useQuery } from "react-apollo-hooks";

const Container=styled.div`
display:flex;
flex-flow: row wrap;
justify-content:flex-start;
`

const SearchVideoContainer = props => {

    let {videoType,keyword}=useAdminContext();
    const { data, error, loading } = useQuery(SEARCH_VIDEO,{
        variables: { type: videoType||"completed",keyword:keyword}
      });
      if (loading) return "";
      if (error) return "";
      console.log("data", data);
      const cards = data.getVideoList.map(card => (
        <Card 
        key={card.id}
        videoId={card.id}
        title={card.title}
        desc={card.description}
        img={card.thumbnailStandard}
        />
      ));
    return (
        <Container>
           {cards}
        </Container>
    );
};

SearchVideoContainer.propTypes = {
    
};

export default SearchVideoContainer;