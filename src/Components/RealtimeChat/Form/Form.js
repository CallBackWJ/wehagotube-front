import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useInput from "../../../Hooks/useInput";
const Root = styled.div`
margin-top:1rem;
height:2.5rem;
background:white;
display:flex;
justify-content: center;
align-items: center;
border solid 1px rgb(220,220,220);
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  flex: 1;
  margin-left: 0.5rem;
`;
const Send = styled.button`
  width: 3rem;
  height: 2rem;
  background: rgb(220, 220, 220);
  font-size: 1rem;
  margin: 0.2rem;
`;

const Form = props => {
  const data = useInput("");

  const handleClick = () => {
    props.onClick(data.value);
    data.setValue("");
    console.log("test")
  };
  return (
    <Root>
      <Input value={data.value} onChange={data.onChange} />
      <Send onClick={handleClick}>전송</Send>
    </Root>
  );
};

Form.propTypes = {};

export default Form;
