import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Template=styled.div`
    
    margin-left:auto;
    margin-right:auto;
    max-width:70rem;
    display:flex;
    flex-direction:column;
`
const Title=styled.div`
    margin-top:1.5rem;

`


const ContainerTemplate = props => {
    return (
        <Template>
            <Title >{props.title}</Title>
             {props.children}
        </Template>
    );
};

ContainerTemplate.propTypes = {
    
};

export default ContainerTemplate;