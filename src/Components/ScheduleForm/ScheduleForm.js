import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useInput from "../../Hooks/useInput";
import { CREATE_SCHEDULE,SINGLEUPLOAD } from "../../Graphql/queries";
import { useMutation } from "react-apollo-hooks";
const Root = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;
const Title = styled.input`
  height: 1.5rem;
  flex: 1;
`;
const Description = styled.textarea`
  height: 5rem;
  flex: 1;
`;
const Date = styled.input`
  height: 1.5rem;
  width: 8.3rem;
`;
const Time = styled.input`
  height: 1.5rem;
  width: 6.5rem;
`;
const PrivacyStatus = styled.select`
  width: 4.5rem;
`;
const Option = styled.option``;
const Label = styled.label`
  width: 3rem;
  font-size: 0.8rem;
  margin-left: 0.2rem;
`;
const Form = styled.div`
  display: flex;
  align-items: center;
  margin: 0.3rem;
`;
const Submit = styled.button`
  margin-top: auto;
  height: 2rem;
  background-color: #0090f5;
  font-size: 0.8rem;
  color: white;
`;

const VideoImg = styled.img`
  margin: 0.5rem auto 0 auto;
  width: 17.6rem;
  height: 9.9rem;
`;

const ImageUpload=styled.input`

`
const ScheduleForm = props => {
  const title = useInput("");
  const state = useInput("private");
  const desc = useInput("");
  const date = useInput("2018-07-22");
  const time = useInput("00:00");


  const fileRef=React.useRef();
  const [singleUpload]=useMutation(SINGLEUPLOAD);
  const singleUploadBinder = (file) =>
  singleUpload({
      variables: {
        file
      }
    });
  const handleFileChange= async (e)=>{
      const file=fileRef.current.files[0];
      console.log(file);
      const {
        data:{singleUpload}
      }=await singleUploadBinder(file);
      console.log("upload success",singleUpload.filename);
    

  }


  const [createSchedule] = useMutation(CREATE_SCHEDULE);


  const createScheduleBinder = (title, desc, start, status) =>
    createSchedule({
      variables: {
        title: title,
        desc: desc,
        start: start,
        status: status
      }
    });

 
  
  const handleSubmit = async () => {
    const val = await createScheduleBinder(
      title.value,
      desc.value,
      date.value + "T" + time.value + ":00.000Z",
      state.value
    );

    console.log("스케줄 추가 :", val);
  };

  
  return (
    <Root>
      <VideoImg src="http://cdnweb01.wikitree.co.kr/webdata/editor/201602/18/img_20160218193402_66ea466f.jpg" />
      <Form>
       <ImageUpload type="file" accept=".png, .jpg, .jpeg"  ref={fileRef} onChange={handleFileChange}/>
      </Form>
      <Form>
        <Label>제목 </Label>
        <Title onChange={title.onChange} />
      </Form>
      <Form>
        <Label>시간</Label>
        <Date type="date" value={date.value} onChange={date.onChange} />
        <Time type="time" value={time.value} onChange={time.onChange} />
      </Form>
      <Form>
        <Label>상태 </Label>
        <PrivacyStatus onChange={state.onChange}>
          <Option value="private">private</Option>
          <Option value="public">public</Option>
        </PrivacyStatus>
      </Form>
      <Form>
        <Label> 내용</Label> <Description onChange={desc.onChange} />
      </Form>
      <Submit onClick={handleSubmit}>수정</Submit>
    </Root>
  );
};

ScheduleForm.propTypes = {};

export default ScheduleForm;
