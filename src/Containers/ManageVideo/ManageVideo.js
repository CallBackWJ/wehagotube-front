import React from "react";
import PropTypes from "prop-types";
import { SEARCH_VIDEO } from "../../Graphql/queries";
import { useQuery } from "react-apollo-hooks";
import List from "../../Components/ManageVideo/ManageList";
import Card from "../../Components/ManageVideo/ManageCard";
import {useAdminContext} from "../../Contexts/AdminContext"
const ManageVideo = props=> {

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
    <List>
      {cards}
    </List>
  );
};

ManageVideo.propTypes = {};

export default ManageVideo;
