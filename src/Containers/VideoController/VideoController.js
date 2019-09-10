import React from "react";
import PropTypes from "prop-types";

import Youtube from "../../Components/Youtube";
import ScheduleForm from "../../Components/ScheduleForm";
import ControlBox from "../../Components/ControlBox";
import TimeLink from "../../Containers/TimeLink";

const VideoController = props => {
  return (
    <>
      <Youtube />
      <ControlBox>
        <ScheduleForm />
        <TimeLink />
      </ControlBox>
    </>
  );
};

VideoController.propTypes = {};

export default VideoController;
