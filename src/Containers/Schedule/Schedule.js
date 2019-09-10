import React from "react";
import PropTypes from "prop-types";
import Card from "../../Components/Schedule/ScheduleCard";
import List from "../../Components/Schedule/ScheduleList";
import { SCHEDULE_LIST } from "../../Graphql/queries";
import { useQuery } from "react-apollo-hooks";

const Schedule = props => {
  const { data, error, loading } = useQuery(SCHEDULE_LIST);
  if (loading) return "loading";
  if (error) return "error";
  const cards = data.getVideoList.map(card => (
    <Card
      key={card.id}
      videoId={card.id}
      title={card.title}
      description={card.description}
      scheduledStartTime={card.scheduledStartTime}
    />
  ));

  return <List>{cards}</List>;
};

Schedule.propTypes = {};

export default Schedule;
