import React from "react";
import PropTypes from "prop-types";
import PageTemplate from "../Components/Common/PageTemplate";
import ContainerTemplate from "../Components/Common/ContainerTemplate";
import ScheduleContainer from "../Components/Schedule/ScheduleContainer";
import PastVideoContainer from "../Components/PastVideo/PastVideoContainer";
import CurrentVideoPanel from "../Components/CurrentVideo/CurrentVideoPanel";
const MainPage = props => {
  return (
    <div>
      <PageTemplate>
        <CurrentVideoPanel />
        <ContainerTemplate title="방송 스케줄">
          <ScheduleContainer />
        </ContainerTemplate>
        <hr />
        <ContainerTemplate title="지난 방송 다시보기">
          <PastVideoContainer />
        </ContainerTemplate>
      </PageTemplate>
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
