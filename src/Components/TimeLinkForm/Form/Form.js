import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useInput from "../../../Hooks/useInput";
import { MdEdit } from "react-icons/md";
const Root = styled.div`
  display: flex;
  align-items: center;
  margin: auto 0.5rem 0.5rem 0.5rem;
  height: 2rem;

  background-color: rgb(150, 150, 150);
`;
const Time = styled.label` 
padding-top:0.2rem;
color:white
margin:0.5rem;
font-size:0.8rem;
`;
const Desc = styled.input`
  height: 1.5rem;
  flex: 1;
  margin-right: 0.5rem;
`;
const InsertBtn = styled.div`
  color: white;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin: 0 0.5rem 0 auto;
`;

const Form = props => {
  const data = useInput("");
  const handleClick = () => {
    props.onClick(data.value);
    data.setValue("");
  };
  return (
    <Root>
      <Time>{props.time}</Time>{" "}
      <Desc value={data.value} onChange={data.onChange} />
      <InsertBtn>
        <MdEdit onClick={handleClick} />
      </InsertBtn>
    </Root>
  );
};

Form.propTypes = {};

export default Form;
