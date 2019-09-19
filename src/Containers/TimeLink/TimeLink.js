import React from "react";
import PropTypes from "prop-types";
import List from "../../Components/TimeLink/List";
import Item from "../../Components/TimeLink/Item";
import { SEARCH_TIMELINK } from "../../Graphql/queries";
import { useQuery} from "react-apollo-hooks";
import { useYoutubeContext } from "../../Contexts/YoutubeContext";
const TimeLink = props => {

  const { youtube,videoId } = useYoutubeContext();


  const { data, error, loading } = useQuery(SEARCH_TIMELINK, {
    variables: { videoId: videoId }
  });
  if (loading) return "loading";
  if (error) return "error";

  
  const handleClick=(time)=>{
    youtube.seekTo(time)
  }


  const items = data.timeLinks.map((item,idx) => (
    <Item
      key={item.id}
      index={idx+1}
      time={item.time}
      desc={item.desc}
      onClick={handleClick}
    />
  ));

  return (
      <List>{items}</List>
  );
};

TimeLink.propTypes = {};

export default TimeLink;
