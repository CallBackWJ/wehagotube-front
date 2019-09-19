import gql from "graphql-tag";

export const PAST_VIDEO = gql`
  {
    getVideoList(eventType: "completed", keyword: null) {
      id
      title
      description
      publishedAt
      viewCount
      thumbnailStandard
      activeLiveChatId
    }
  }
`;

export const SCHEDULE_LIST = gql`
  {
    getVideoList(eventType: "upcoming", keyword: null) {
      id
      title
      description
      scheduledStartTime
    }
  }
`;
export const CURRENT_VIDEO = gql`
  {
    getLiveVideo {
      id
      title
      description
      liveBroadcastContent
      concurrentViewers
      thumbnailStandard
      activeLiveChatId
    }
  }
`;

export const SIGN_UP = gql`
  mutation signUp(
    $name: String!
    $avatar: String!
    $email: String!
    $accessToken: String!
    $googleId: String!
  ) {
    signUp(
      name: $name
      avatar: $avatar
      email: $email
      accessToken: $accessToken
      googleId: $googleId
    )
  }
`;

export const ME = gql`
  {
    me {
      name
      email
      permission
      avatar
    }
  }
`;

export const CREATE_SCHEDULE = gql`
  mutation createSchedule(
    $title: String!
    $desc: String!
    $start: String!
    $status: String!
  ) {
    createSchedule(title: $title, desc: $desc, start: $start, status: $status)
  }
`;

export const SEARCH_VIDEO = gql`
  query searchVideo($type: String, $keyword: String) {
    getVideoList(eventType: $type, keyword: $keyword) {
      id
      title
      description
      thumbnailStandard
    }
  }
`;



export const CREATE_TIMELINK = gql`
  mutation createTimeLink($videoId: String!, $time: Int!, $desc: String!) {
    createTimeLink(videoId: $videoId, time: $time, desc: $desc) {
      id
      videoId
      time
      desc
    }
  }
`;
export const DELETE_TIMELINK = gql`
  mutation deleteTimeLink($id: String!, $videoId: String!) {
    deleteTimeLink(id: $id, videoId: $videoId) {
      id
      videoId
      time
      desc
    }
  }
`;

export const SEARCH_TIMELINK = gql`
  query searchTimeLink($videoId: String!) {
    timeLinks(videoId: $videoId) {
      id
      videoId
      time
      desc
    }
  }
`;



export const SINGLEUPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`;

export const CHAT_LIST = gql`
  query chatList($chatId: String) {
    chatList(chatId: $chatId) {
      googleId
      avatar
      name
      message
      author
    }
  }
`;
export const INSERT_CHAT = gql`
  mutation insertChat(
    $chatId: String!
    $message: String!
  ) {
    insertChat(chatId: $chatId, message: $message)
  }
`;