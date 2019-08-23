import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PastVideoCard from "../PastVideoCard";

const Container = styled.div`
  flex: 1;
  margin-top:1.5rem;
  display: flex;
  flex-direction: column;
`;

const PastVideoContainer = props => {
  return (
    <Container>
      <PastVideoCard />
      <PastVideoCard />
      <PastVideoCard />
      <PastVideoCard />
    </Container>
  );
};

PastVideoContainer.propTypes = {};

export default PastVideoContainer;
