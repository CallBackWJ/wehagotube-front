import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Root =styled.div`

`
const List = props => {
    return (
        <Root>
           {props.children}
        </Root>
    );
};

List.propTypes = {
    
};

export default List;