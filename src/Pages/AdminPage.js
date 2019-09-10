import React from "react";
import PropTypes from "prop-types";
import PageTemplate from "../Components/Common/PageTemplate";
import ManageVideo from "../Containers/ManageVideo";
import AdminTemplate from "../Components/Common/AdminTemplate";
import VideoController from "../Containers/VideoController"
const AdminPage = props => {
  return (
    <PageTemplate>
      <AdminTemplate>
        <VideoController/>
        <ManageVideo/>
      </AdminTemplate>
    </PageTemplate>
  );
};

AdminPage.propTypes = {};

export default AdminPage;
