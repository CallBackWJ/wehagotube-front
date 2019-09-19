import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Layout = props => {
    return (
        <Root>
        {props.children[0]}
        {props.children[1]}
      </Root>
    );
};

Layout.propTypes = {
    
};

export default Layout;