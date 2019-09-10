import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Form from "../../Components/TimeLink/Form";
import List from "../../Components/TimeLink/List";
import Item from "../../Components/TimeLink/Item";
import { SEARCH_TIMELINK, CREATE_TIMELINK,DELETE_TIMELINK } from "../../Graphql/queries";
import { useQuery, useMutation } from "react-apollo-hooks";
import { useYoutubeContext } from "../../Contexts/YoutubeContext";
import useInput from "../../Hooks/useInput";
const TimeLink = props => {
  const descInput = useInput("");
  const { seek, setSeek, videoId } = useYoutubeContext();
  const [state, changeState] = useState({
    timeLinks: []
  });

  const [deleteTimeLink] = useMutation(DELETE_TIMELINK);
  const deleteTimeLinkeBinder = (id,videoId) =>
  deleteTimeLink({
    variables: {
        id:id,
      videoId: videoId
    }
  });
const handledelete = async (id) => {
  const { data } = await deleteTimeLinkeBinder(
      id,
    videoId
  );
  changeState({...state, timeLinks:data.deleteTimeLink});
};




  const [createTimeLink] = useMutation(CREATE_TIMELINK);
  const createTimeLinkeBinder = (videoId, time, desc) =>
    createTimeLink({
      variables: {
        videoId: videoId,
        time: time,
        desc: desc
      }
    });
  const handleCreate = async () => {
    const { data } = await createTimeLinkeBinder(
      videoId,
      parseInt(seek),
      descInput.value
    );
    changeState({...state, timeLinks:data.createTimeLink});
    setSeek(0);
    descInput.setValue("");
  };

  const { data, error, loading } = useQuery(SEARCH_TIMELINK, {
    variables: { videoId: videoId }
  });

  useEffect(() => {
    const onCompleted = data => {
      changeState({
        ...state,
        timeLinks: data
      });
    };
    const onError = error => {
      return <div>{error}</div>;
    };
    if (onCompleted || onError) {
      if (onCompleted && !loading && !error) {
        onCompleted(data.timeLinks);
      } else if (onError && !loading && error) {
        onError(error);
      }
    }
  }, [loading, data, error]);

  if (loading) return "loading";

  const items = state.timeLinks.map(item => (
    <Item
      key={item.id}
      id={item.id}
      videoId={item.videoId}
      time={item.time}
      desc={item.desc}
      onClick={handledelete}
    />
  ));

  return (
    <Form
      time={seek}
      input={descInput.value}
      setInput={descInput.onChange}
      onClick={handleCreate}
    >
      <List>{items}</List>
    </Form>
  );
};

TimeLink.propTypes = {};

export default TimeLink;
