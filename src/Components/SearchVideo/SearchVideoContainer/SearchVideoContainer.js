import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Card from '../SearchVideoCard'

const Container=styled.div`
display:flex;
flex-flow: row wrap;

justify-content:flex-start;
`

const SearchVideoContainer = props => {
    return (
        <Container>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Container>
    );
};

SearchVideoContainer.propTypes = {
    
};

export default SearchVideoContainer;