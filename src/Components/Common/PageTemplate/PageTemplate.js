import React from 'react';
import SearchBar from '../SearchBar'
import PropTypes from 'prop-types';
import styled from "styled-components";

const Template=styled.div`
    height: 100vh;
`

const PageTemplate = props => {
    return (
        <Template>
            <SearchBar/>
            {props.children}
        </Template>
    );
};

PageTemplate.propTypes = {
    
};

export default PageTemplate;