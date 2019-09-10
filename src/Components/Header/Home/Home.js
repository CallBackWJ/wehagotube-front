import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
const Root = styled.label`
  margin-left: 1rem;
  font-size: 1.2rem;
  font-weight: 350;
  color: white;
`;
const Home = props => {
  return (
    <Root
      onClick={() => {
        props.history.push("/");
      }}
    >
      실시간 스트리밍
    </Root>
  );
};

Home.propTypes = {};

export default withRouter(Home);
