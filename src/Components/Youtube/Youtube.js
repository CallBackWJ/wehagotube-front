import React from "react";
import YouTube from "react-youtube";
import PropTypes from "prop-types";
import { useYoutubeContext } from "../../Contexts/YoutubeContext";
const Youtube = props => {
  const opts = {
    height: "500",
    width: "900",
    playerVars: {
      autoplay: 1
    }
  };

  const { setSeek,videoId } = useYoutubeContext();

  const onReady = event => {};
  const onStateChange = e => {
    if (e.data === 2) {
      setSeek(e.target.getCurrentTime());
    }
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={onReady}
      onStateChange={onStateChange}
    />
  );
};

Youtube.propTypes = {};

export default Youtube;
