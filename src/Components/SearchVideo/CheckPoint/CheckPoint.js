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
    const timeFormat = time =>
    `${
      time / 3600 > 9 ? Math.floor(time / 3600) : `0${Math.floor(time / 3600)}`
    }:${time / 60 > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`}:${
      time % 60 > 9 ? Math.floor(time % 60) : `0${Math.floor(time % 60)}`
    }`;
    return (
        <Root>
            <Time>{timeFormat(props.time).substring(3)}</Time>
            <Context>{props.desc}</Context>
        </Root>
    );
};

CheckPoint.propTypes = {
    
};

export default CheckPoint;