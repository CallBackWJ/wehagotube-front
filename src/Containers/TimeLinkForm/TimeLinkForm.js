import React from "react";
import PropTypes from "prop-types";
import Form from "../../Components/TimeLinkForm/Form";
import List from "../../Components/TimeLinkForm/List";
import Item from "../../Components/TimeLinkForm/Item";
import Layout from "../../Components/TimeLinkForm/Layout";
import {
  SEARCH_TIMELINK,
  CREATE_TIMELINK,
  DELETE_TIMELINK
} from "../../Graphql/queries";
import { useQuery, useMutation } from "react-apollo-hooks";
import { useYoutubeContext } from "../../Contexts/YoutubeContext";

const TimeLinkForm = props => {
  const timeFormat = time =>
    `${
      time / 3600 >= 10 ? Math.floor(time / 3600) : `0${Math.floor(time / 3600)}`
    }:${(time % 3600) / 60 >= 10 ? Math.floor((time % 3600) / 60) : `0${Math.floor((time % 3600)  / 60)}`}:${
      time % 60 >= 10 ? Math.floor(time % 60) : `0${Math.floor(time % 60)}`
    }`;

  const { seek, videoId } = useYoutubeContext();

  const [deleteTimeLink] = useMutation(DELETE_TIMELINK);
  const deleteTimeLinkeBinder = (id, videoId) =>
    deleteTimeLink({
      variables: {
        id: id,
        videoId: videoId
      }
    });

  const [createTimeLink] = useMutation(CREATE_TIMELINK);
  const createTimeLinkeBinder = (videoId, time, desc) =>
    createTimeLink({
      variables: {
        videoId: videoId,
        time: time,
        desc: desc
      }
    });

  const { data, error, loading, refetch } = useQuery(SEARCH_TIMELINK, {
    variables: { videoId: videoId }
  });

  const handledelete = async id => {
    await deleteTimeLinkeBinder(id, videoId);
    refetch();
  };

  const handleCreate = async desc => {
    await createTimeLinkeBinder(videoId, parseInt(seek), desc);
    refetch();
  };

  if (loading) return "loading";
  if (error) return "error";

  const items = data.timeLinks.map(item => (
    <Item
      key={item.id}
      id={item.id}
      videoId={item.videoId}
      time={timeFormat(item.time)}
      desc={item.desc}
      onClick={handledelete}
    />
  ));

  return (
    <Layout>
      <List>{items}</List>
      <Form time={timeFormat(seek)} onClick={handleCreate} />
    </Layout>
  );
};

TimeLinkForm.propTypes = {};

export default TimeLinkForm;
