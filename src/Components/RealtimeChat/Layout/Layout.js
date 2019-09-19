import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Root = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 1rem 0 1rem;
  background: rgb(240, 240, 250);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;


const Layout = props => {
  return (
    <Root>
      실시간 채팅
      {props.children[0]}
      {props.children[1]}
    </Root>
  );
};

Layout.propTypes = {};

export default Layout;
