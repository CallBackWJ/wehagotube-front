import React from "react";
import PropTypes from "prop-types";
import Youtube from "../Components/Youtube";
import PageTemplate from "../Components/Common/PageTemplate";
import ManageVideo from "../Containers/ManageVideo";
import AdminTemplate from "../Components/Common/AdminTemplate";
import VideoController from "../Containers/VideoController"
const AdminPage = props => {
  return (
    <PageTemplate>
      <AdminTemplate>
        <Youtube />
        <VideoController/>
        <ManageVideo/>
      </AdminTemplate>
    </PageTemplate>
  );
};

AdminPage.propTypes = {};

export default AdminPage;
