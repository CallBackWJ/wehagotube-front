import React from 'react';
import Header from '../../../Containers/Header'
import PropTypes from 'prop-types';
import styled from "styled-components";

const Template=styled.div`
    height: 100vh;
`

const PageTemplate = props => {
    return (
        <Template>
            <Header/>
            {props.children}
        </Template>
    );
};

PageTemplate.propTypes = {
    
};

export default PageTemplate;