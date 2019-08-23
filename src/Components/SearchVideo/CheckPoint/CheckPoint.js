import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Root=styled.div`

font-size:0.8rem;
font-weight:500;
line-height:1.2em;
`

const Time=styled.span`
color:#61a5ff;
margin-right:0.2rem;

`
const Context=styled.span`

color:gray;
`
const CheckPoint = props => {
    return (
        <Root>
            <Time>00:00</Time>
            <Context>민원증명 발급 신청하기</Context>
        </Root>
    );
};

CheckPoint.propTypes = {
    
};

export default CheckPoint;