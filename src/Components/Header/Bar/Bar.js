import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
const Root = styled.div`
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  align-items: center;
  background: rgb(0, 144, 245);
`;
const Bar = props => {
    return (
        <Root>
             {props.children}
        </Root>
    );
};

Bar.propTypes = {
    
};

export default Bar;