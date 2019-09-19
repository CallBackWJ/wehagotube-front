import React,{ createContext, useContext ,useState} from "react";

const YoutubeContext = createContext();
export default YoutubeContext;

export const useYoutubeContext = () => useContext(YoutubeContext);

export const YoutubeProvider = ({ children }) => {
  const [seek, setSeek] = useState(0);
  const [youtube, setYoutube] = useState({});
  const [videoId, setVideoId] = useState("");
  const [chatId, setChatId] = useState("");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [time, setTime] = useState("");
  const [state, setState] = useState("");
  const [viewCount, setViewCount] = useState("");
  

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

        thumbnail,
        setThumbnail,
        title,
        setTitle,
        desc,
        setDesc, 
        time,
        setTime,
        state,
        setState,
        viewCount, 
        setViewCount,

      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
