import React from "react";
import PropTypes from "prop-types";
import PageTemplate from "../Components/Common/PageTemplate";
import Youtube from "../Components/Youtube";
import ViewTemplate from "../Components/Common/ViewTemplate";
import VideoDescript from "../Components/VideoDescript";
import RealtimeChat from "../Containers/RealtimeChat"
import TimeLink from "../Containers/TimeLink"
import {useYoutubeContext} from "../Contexts/YoutubeContext"
const ViewPage =props=> {
  const {state} =useYoutubeContext();
  return (
    <PageTemplate>
      <ViewTemplate>
        <Youtube />
        <VideoDescript />
        {state==="completed"?<TimeLink />:<RealtimeChat/>}
      </ViewTemplate>
    </PageTemplate>
  );
};

ViewPage.propTypes = {};

export default ViewPage;
