import React from "react";
import PropTypes from "prop-types";
import Panel from "../../Components/CurrentVideo/CurrentVideoPanel";
import { CURRENT_VIDEO } from "../../Graphql/queries";
import { useQuery } from "react-apollo-hooks";
const CurrentVideo = props => {
  const { data, error, loading } = useQuery(CURRENT_VIDEO);
  if (loading) return "loading";
  if (error) return "error";
  console.log(data);
  const currentVideo = data.getLiveVideo;
  return (
    <>
      {currentVideo ? (
        <Panel
          videoId={currentVideo.id}
          title={currentVideo.title}
          description={currentVideo.description}
          concurrentViewers={currentVideo.concurrentViewers}
          thumbnailStandard={currentVideo.thumbnailStandard}
          liveBroadcastContent={currentVideo.liveBroadcastContent}
          activeLiveChatId={currentVideo.activeLiveChatId}
        />
      ) : null}
    </>
  );
};

CurrentVideo.propTypes = {};

export default CurrentVideo;
