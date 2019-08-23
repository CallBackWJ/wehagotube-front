import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ScheduleCard from "../ScheduleCard";
const Container = styled.div`
flex:1;
 margin:1.5rem 0 1.5rem 0;
 display:flex;
flex-direction:row;
justify-content:space-between;


`;

const ScheduleContainer = props => {
  return (
    <Container>
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
    </Container>
  );
};

ScheduleContainer.propTypes = {};

export default ScheduleContainer;
