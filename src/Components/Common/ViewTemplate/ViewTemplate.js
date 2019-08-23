import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Template=styled.div`
margin-left:auto;
margin-right:auto;
margin-top:2rem;
max-width:80rem;
display:flex;
`
const Video=styled.div`
flex:1;
`
const Chat=styled.div`
max-width:25rem;
height:85vh;

`

const ViewTemplate = props => {
    return (
        <Template>
            <Video>
            {props.children[0]}
            {props.children[1]}
            </Video>
            <Chat>
            {props.children[2]}
            </Chat>
        </Template>
    );
};

ViewTemplate.propTypes = {
    
};

export default ViewTemplate;