import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Adder = styled.div`
  margin-top: auto;
`;
const Time = styled.label``;
const Desc = styled.input``;
const InsertBtn = styled.button``;

const Form = props => {
  return (
    <Root>
      {props.children}
      <Adder>
        <Time>{parseInt(props.time)}</Time> <Desc value={props.input} onChange={props.setInput}/>
        <InsertBtn onClick={props.onClick}>기록</InsertBtn>
      </Adder>
    </Root>
  );
};

Form.propTypes = {};

export default Form;
