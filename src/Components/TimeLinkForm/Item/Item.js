import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
const Root = styled.div`
  display: flex;
  margin: 0.3rem;
  background-color: rgb(240, 240, 240);
  align-items: center;
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
`;
const Del = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  margin-left: auto;
  &:hover {
    color: red;
  }
`;
const Time = styled.label`
  display: flex;
  align-items: center;
  color: #0090f5;
  margin-right: 1rem;
  width: 4.5rem;
  font-size: 0.8rem;
`;
const Desc = styled.label`
display: flex;
  align-items: center;
  font-size: 0.8rem;
`;

const Item = props => {
  return (
    <Root>
      <Time>{props.time}</Time>
      <Desc>{props.desc}</Desc>
      <Del>
        <MdClose onClick={() => props.onClick(props.id)} />
      </Del>
    </Root>
  );
};

Item.propTypes = {};

export default Item;
