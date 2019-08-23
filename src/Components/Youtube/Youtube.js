import React from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

const Youtube = props => {
    const opts = {
        height: '500',
        width: '900',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };
      const onReady=(event)=> {
        // access to player in all event handlers via event.target
        //event.target.pauseVideo();
      }
    return (
        <YouTube
        videoId="vLqUX8CtCJc"
        opts={opts}
        onReady={onReady}
      />
    );
};

Youtube.propTypes = {
    
};

export default Youtube;