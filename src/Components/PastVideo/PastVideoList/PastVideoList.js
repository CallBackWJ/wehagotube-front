import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Root = styled.div`
  flex: 1;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;
const PastVideoList = props => {
    return (
        <Root>
            {props.children}
        </Root>
    );
};

PastVideoList.propTypes = {
    
};

export default PastVideoList;