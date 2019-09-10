import React from "react";
import PropTypes from "prop-types";
import Card from "../../Components/PastVideo/PastVideoCard";
import List from '../../Components/PastVideo/PastVideoList'
import { PAST_VIDEO } from "../../Graphql/queries";
import { useQuery } from "react-apollo-hooks";

const dateformat = data => {
  const sec = 60;
  const mins = 60;
  const hours = 24;
  const days = 30;
  const month = 12;
  const tday = new Date();
  const cday = new Date(data);
  let difftime = Math.floor((tday - cday) / 1000);
  let msg = "";

  if (difftime < sec) {
    msg = "방금";
  } else if ((difftime /= sec) < mins) {
    msg = Math.floor(difftime) + "분";
  } else if ((difftime /= mins) < hours) {
    msg = Math.floor(difftime) + "시간";
  } else if ((difftime /= hours) < days) {
    msg = Math.floor(difftime) + "일";
  } else if ((difftime /= days) < month) {
    msg = Math.floor(difftime) + "달";
  } else {
    msg = Math.floor(difftime) + "년";
  }
  return msg;
};

const PastVideo = props => {
  const { data, error, loading } = useQuery(PAST_VIDEO);
  if (loading) return "loading";
  if (error) return "error";
  console.log("data", data.getVideoList);
  const cards = data.getVideoList.map(card => (
    <Card 
    key={card.id}
    videoId={card.id}
    title={card.title}
    description={card.description}
    viewCount={card.viewCount}
    thumbnail={card.thumbnailStandard}
    publishedAt={dateformat(card.publishedAt)}
    />
  ));
  return (
    <List>
      {cards}
    </List>
  );
};

PastVideo.propTypes = {};

export default PastVideo;
