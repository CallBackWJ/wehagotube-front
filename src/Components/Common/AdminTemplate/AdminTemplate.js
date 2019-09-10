import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Root = styled.div`
  display: flex;
  height:93%;
  flex-direction: column;
  align-items:center;
  justify-content: center
  background-color:#eeeeee;
  
`;
const Contorller = styled.div`
  display: flex;
`;
const List = styled.div`
  background-color: white;
  width: 76.4rem;
`;
const AdminTemplate = props => {
  return (
    <Root>
      <Contorller>{props.children[0]}</Contorller>
      <List>{props.children[1]}</List>
    </Root>
  );
};

AdminTemplate.propTypes = {};

export default AdminTemplate;
