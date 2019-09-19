import React from "react";
import PropTypes from "prop-types";
import ScheduleForm from "../../Components/ScheduleForm";
import ControlBox from "../../Components/ControlBox";
import TimeLinkForm from "../TimeLinkForm";

const VideoController = props => {
  return (
    <ControlBox>
      <ScheduleForm />
      <TimeLinkForm />
    </ControlBox>
  );
};

VideoController.propTypes = {};

export default VideoController;
