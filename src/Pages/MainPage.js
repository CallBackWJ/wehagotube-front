import React from "react";
import PropTypes from "prop-types";
import PageTemplate from "../Components/Common/PageTemplate";
import ContainerTemplate from "../Components/Common/ContainerTemplate";
import Schedule from "../Containers/Schedule";
import PastVideo from "../Containers/PastVideo";
import CurrentVideo from "../Containers/CurrentVideo";

const MainPage = props => {
  return (
    <PageTemplate>
      <CurrentVideo />
      <ContainerTemplate title="방송 스케줄">
        <Schedule />
      </ContainerTemplate>
      <hr />
      <ContainerTemplate title="지난 방송 다시보기">
        <PastVideo />
      </ContainerTemplate>
    </PageTemplate>
  );
};

MainPage.propTypes = {};

export default MainPage;
