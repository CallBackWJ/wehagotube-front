import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  width: 7rem;
  height: 1.5rem;
  margin: 0.2rem 0 0.2rem 0;
  background-color: rgb(240, 240, 240);
  align-items: center;
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
`;
const Number = styled.label`
  flex: 1;
  display: flex;
  align-items: center;
  color: #0090f5;
  margin: 0 0.2rem 0 0.2rem;
  width: 1rem;
  font-size: 0.4rem;
`;
const Desc = styled.label`
  flex: 9;
  display: flex;
  align-items: center;
  font-size: 0.4rem;
`;

const MiniTimeLink = props => {
  return (
    <Root>
      <Number>{props.num}</Number>
      <Desc>{props.desc}</Desc>
    </Root>
  );
};

MiniTimeLink.propTypes = {};

export default MiniTimeLink;
