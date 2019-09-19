import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import img from "../../Images/search.png";
import useInput from "../../Hooks/useInput";
import { withRouter } from "react-router-dom";
import {useAdminContext} from "../../Contexts/AdminContext"
const Root = styled.div`
  width: 19.5rem;
  height: 31.25rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-left:0.5rem;
  border: 1px solid #dddddd;
`;
const Controller = styled.div`
  display: flex;
  flex-direction: column;
  
`;
const Search = styled.div`
  height: 2rem;
  display: flex;

`;
const Select = styled.select`
  width: 3rem;
  height: 2rem;
  border:none;
  background-color:white;

`;
const Option = styled.option``;
const Input = styled.input`
  height: 2rem;
  width: 14.5rem;
  font-size: 0.8rem;
  outline: none;
  border:none;
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

const Menu = styled.div`
  height: 2rem;
  background-color: darkgray;
  display: flex;
`;

const MenuItem = styled.div`
flex:1;
color:white;
background-color: ${props => (props.select ? "#0090f5" : "darkgray")};
text-align: center;
padding:0.35rem;
font-size:0.8rem;
`;

const Context = styled.div`
  flex: 1;
`;

const ControlBox = props => {
  const [value, setValue] = React.useState(true);
  const keyword=useInput("");
  const videoState=useInput("completed");
  const {setVideoType,setKeyword}=useAdminContext();
  
  const handleSearch = e => {
    if (e.key === "Enter") {
      setVideoType(videoState.value);
      setKeyword(keyword.value);
      props.history.push("/admin");
    }
  };
  return (
    <Root>
      <Controller>
        <Search>
          <Select onChange={videoState.onChange}>
            <Option value="completed">완료 </Option>
            <Option value="upcoming">예약</Option>
          </Select>
          <Input type="text" value={keyword.value} onChange={keyword.onChange} onKeyPress={handleSearch}/>
          <Button/>
        </Search>
        <Menu>
          <MenuItem onClick={() => setValue(true)} select={value}>
            비디오
          </MenuItem>
          <MenuItem onClick={() => setValue(false)} select={!value}>
            체크포인트
          </MenuItem>
        </Menu>
      </Controller>
      <Context>{value ? props.children[0] : props.children[1]}</Context>
    </Root>
  );
};

ControlBox.propTypes = {};

export default withRouter(ControlBox);
