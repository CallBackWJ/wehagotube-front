import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import img from "../../../Images/search.png";
const Root = styled.div`
  display: inline;
  margin-right: 1rem;
  background: white;
`;
const Button = styled.button`
  background-image: url(${img});
  background-size: cover;
  width: 1rem;
  height: 1rem;
  border: none;
  margin: 0.6rem;
  outline: none;
`;

const Input = styled.input`
  width: 12rem;
  height: 2rem;
  font-size: 1rem;
  border: none;
  padding: 0.5rem;
  font-size: 0.8rem;
  outline: none;
`;

const Search = props => {
    const handleSearch = e => {
        if (e.key === "Enter") {
          props.history.push("/search");
        }
      };
    return (
        <Root>
            <Input placeholder="검색어를 입력해주세요" onKeyPress={handleSearch} />
            <Button/>
        </Root>
    );
};

Search.propTypes = {
    
};

export default withRouter(Search);