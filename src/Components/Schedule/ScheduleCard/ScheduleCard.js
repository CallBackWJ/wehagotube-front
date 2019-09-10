import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  width: 12rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
`;

const ScheduleDate = styled.div`
  flex: 0.25;
  height: 2rem;
  background: rgb(211, 210, 211);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Descript = styled.div`
  flex: 0.75;
  background: rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const MainTitle = styled.div`

`;
const SubTitle = styled.div`
font-size:0.8rem;
text-align : center
  color: gray;
`;
const ScheduleTime = styled.div`
  margin-top: auto;
  color: rgb(47, 133, 246);
`;

const dateFormat=(UTC)=>{
  const schedule=new Date(UTC);
  const days="일월화수목금토";
  const year=schedule.getFullYear();
  const month=Number(schedule.getMonth())+1;
  const date=schedule.getDate();
  const day=days[schedule.getDay()];
  const hours=(Number(schedule.getHours())>=12)?"PM "+(Number(schedule.getHours())-12):"AM "+schedule.getHours();
  const minutes=schedule.getMinutes();

  return {
    printDate:()=>year+"."+month+"."+date+" ("+day+")",
    printTime:()=>hours+":"+minutes
  }
}


const ScheduleCard = props => {

  const schedule=dateFormat(props.scheduledStartTime);
  return (
    <Card>
      <ScheduleDate>{schedule.printDate()}</ScheduleDate>
      <Descript>
        <MainTitle>{props.title}</MainTitle>
        <SubTitle>
        {props.description}
        </SubTitle>
        <ScheduleTime>{schedule.printTime()}</ScheduleTime>
      </Descript>
    </Card>
  );
};

ScheduleCard.propTypes = {};

export default ScheduleCard;
