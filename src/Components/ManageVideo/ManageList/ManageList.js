
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`

  display: flex;
  flex-direction: row;
  overflow:auto;
  background-color:#eeeeee;
`;

const ManageList = props => {
  return <Root>
        {props.children}
  </Root>;
};

ManageList.propTypes = {};

export default ManageList;
