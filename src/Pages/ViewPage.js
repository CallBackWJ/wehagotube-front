import React from "react";
import PropTypes from "prop-types";
import PageTemplate from "../Components/Common/PageTemplate";
import Youtube from "../Components/Youtube";
import ViewTemplate from "../Components/Common/ViewTemplate";
import ChatContainer from "../Components/RealtimeChat/ChatContainer";
import VideoDescript from "../Components/VideoDescript";
const ViewPage =props=> {
  return (
    <PageTemplate>
      <ViewTemplate>
        <Youtube />
        <VideoDescript />
        <ChatContainer />
      </ViewTemplate>
    </PageTemplate>
  );
};

ViewPage.propTypes = {};

export default ViewPage;
