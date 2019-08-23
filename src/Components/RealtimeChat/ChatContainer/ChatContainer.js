import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Chat from "../Chat";

const Root = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 1rem 0 1rem;
  background: rgb(240, 240, 250);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const ChatList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const ChatInput = styled.div`
margin-top:1rem;
height:2.5rem;
background:white;
display:flex;
justify-content: center;
align-items: center;
border solid 1px rgb(220,220,220);
`;
const Emoticon = styled.button`
  width: 1rem;
  height: 1rem;
  margin: 0 0.5rem 0 0.5rem;
  background: url(https://cdn0.iconfinder.com/data/icons/faces-3/24/155-512.png)
    no-repeat;
  background-size: cover;
  color: gray;
  border: none;
  outline: none;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  flex: 8.5;
`;
const Send = styled.button`
  flex: 1.5;
  height: 2rem;
  background: rgb(220, 220, 220);
  font-size: 1rem;
  margin: 0.2rem;
`;

const ChatContainer = props => {
  const dummyList = [
    {
      avatar: "https://png.pngtree.com/svg/20170331/1ec867769d.svg",
      name: "[강촌세무사무소]김더존",
      comment: "안녕하세요, 방송 시작했네요",
      me: false
    },
    {
      avatar: "https://png.pngtree.com/svg/20170331/1ec867769d.svg",
      name: "[이더존 세무사무소]이더존",
      comment: "방금 말한 증빙전표 정말 획기적이네요.. 영수증 모을 필요가 없겠네요",
      me: false
    },
    {
      avatar: "https://png.pngtree.com/svg/20170331/1ec867769d.svg",
      name: "[강촌세무사무소]김더존",
      comment: "앞부분 못봤는데.. 모바일로 영수증을 촬영한다 는건가요?",
      me: false
    },
    {
      avatar: "https://png.pngtree.com/svg/20170331/1ec867769d.svg",
      name: "[좋은상사]박더존",
      comment: "네, 맞아요. 카메라로 영수증찍으면 증빙으로 인식돼요",
      me: true
    }
  ];

  const chatData = dummyList.map((data,index) => (
    <Chat key={index} avatar={data.avatar} name={data.name} comment={data.comment} me={data.me}/>
  ));

  return (
    <Root>
      실시간 채팅
      <ChatList>{chatData}</ChatList>
      <ChatInput>
        <Emoticon />
        <Input />
        <Send>전송</Send>
      </ChatInput>
    </Root>
  );
};

ChatContainer.propTypes = {};

export default ChatContainer;
