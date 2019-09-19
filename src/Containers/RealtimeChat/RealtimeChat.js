import React from "react";
import PropTypes from "prop-types";

import { useQuery, useMutation } from "react-apollo-hooks";
import { CHAT_LIST, INSERT_CHAT } from "../../Graphql/queries";
import { useYoutubeContext } from "../../Contexts/YoutubeContext";

import Layout from "../../Components/RealtimeChat/Layout";
import Form from "../../Components/RealtimeChat/Form";
import List from "../../Components/RealtimeChat/List";
import Item from "../../Components/RealtimeChat/Item";

const RealtimeChat = props => {
  let { chatId } = useYoutubeContext();
  const [insertChat] = useMutation(INSERT_CHAT);
  const insertChatBinder = (chatId, message) =>
    insertChat({
      variables: {
        chatId:chatId,
        message:message
      }
    });

  const { data, error, loading, refetch } = useQuery(CHAT_LIST, {
    variables: { chatId },
    pollInterval: 1000
  });

  const sendMessage = async message =>{
   await insertChatBinder(chatId, message)
   await refetch();
   };


  if (loading) return "loading";
  if (error) return "";

  let chatData;
  if (data.chatList)
    chatData = data.chatList.map((chat, idx) => (
      <Item
        key={idx}
        avatar={chat.avatar}
        name={chat.name}
        comment={chat.message}
        me={chat.author}
      />
    ));

  return (
    <Layout>
      <List>{chatData}</List>
      <Form  onClick={sendMessage}/>
    </Layout>
  );
};

RealtimeChat.propTypes = {};

export default RealtimeChat;
