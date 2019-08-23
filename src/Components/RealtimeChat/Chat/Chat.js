import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//채팅 스타일 시작
const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const User = styled.div`
  display: flex;
  width: 100%;
  height: 2rem;
  align-items: center;
  flex-direction: ${props => (props.me ? "row-reverse" : "row")};
`;
const Avatar = styled.img`
  background-size: cover;
  width: 2rem;
  height: 2rem;
  margin: ${props => (props.me ? "0 0 0 0.5rem" : "0 0.5rem 0 0")};
`;
const Name = styled.label`
  flex: 1;
  text-align: ${props => (props.me ? "right" : "left")};
`;
const Comment = styled.div`
  flex: 1;
  display: flex;
  margin: ${props => (props.me ? " 0 2.5rem 1rem 1rem " : "0 1rem 1rem 2.5rem")}
  flex-direction:${props => (props.me ? "row-reverse" : "row")}
`;
const Bubble = styled.div`
  z-indx: 10px;
  position: relative;
  left:${props => (props.me ? "-2px" : "2px")} 
  width: 12px;
  height: 13px;
  background:${props =>
    props.me
      ? "url(https://static.wehago.com/imgs/co/sp_co.png) no-repeat -250px 0"
      : "url(https://static.wehago.com/imgs/co/sp_co.png) no-repeat -208px 0"}
`;
const Message = styled.div`
  max-width: 18rem;
  background: ${props => (props.me ? "#499afe" : "white")}
  color:${props => (props.me ? `white` : "black")}
  overflow: auto;
  padding: 0.5rem;
  border-radius: 0.3rem;
  box-shadow: 0 2px 2px 0 rgb(230, 230, 230);
`;
const Chat = props => {
  return (
    <Root>
      <User me={props.me}>
        <Avatar
          me={props.me}
          src={props.avatar}
        />
        <Name me={props.me}>{props.name}</Name>
      </User>
      <Comment me={props.me}>
        <Bubble me={props.me} />
        <Message me={props.me}>{props.comment}</Message>
      </Comment>
    </Root>
  );
};

Chat.propTypes = {};

export default Chat;
