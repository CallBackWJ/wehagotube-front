import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  overflow:auto
`;
const List = props => {
  return <Root>{props.children}</Root>;
};

List.propTypes = {};

export default List;
