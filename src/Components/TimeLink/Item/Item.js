import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
const Root = styled.div`
  display: flex;
  margin: 0.3rem;
`;
const Del = styled.div`
  color: gray;
  margin-left: auto;

  &:hover{
    color: red;
  }
`;
const Time = styled.label`
color:blue;
margin-right:1rem;
`;
const Desc = styled.label``;

const Item = props => {
  const format = time =>
    `${
      time / 3600 > 9 ? Math.floor(time / 3600) : `0${Math.floor(time / 3600)}`
    }:${time / 60 > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`}:${
      time % 60 > 9 ? Math.floor(time % 60) : `0${Math.floor(time % 60)}`
    }`;

  return (
    <Root>
      <Time>{format(props.time)}</Time><Desc>{props.desc}</Desc>
      <Del>
        <MdClose onClick={() => props.onClick(props.id)} />
      </Del>
    </Root>
  );
};

Item.propTypes = {};

export default Item;
