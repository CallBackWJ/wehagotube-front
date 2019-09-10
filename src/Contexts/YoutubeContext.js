import React,{ createContext, useContext ,useState} from "react";

const YoutubeContext = createContext();
export default YoutubeContext;

export const useYoutubeContext = () => useContext(YoutubeContext);

export const YoutubeProvider = ({ children }) => {
  const [seek, setSeek] = useState(0);
  const [youtube, setYoutube] = useState({});
  const [videoId, setVideoId] = useState("");
  const [chatId, setChatId] = useState("");
  const [chatTime,setChatTime]=useState(1);

  return (
    <YoutubeContext.Provider
      value={{
        seek,
        setSeek,
        youtube,
        setYoutube,
        videoId,
        setVideoId,
        chatId,
        setChatId,
        chatTime,
        setChatTime
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
