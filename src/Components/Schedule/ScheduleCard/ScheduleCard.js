import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  width: 12rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
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
  color: gray;
`;
const Time = styled.div`
  margin-top: auto;
  color: rgb(47, 133, 246);
`;
const ScheduleCard = props => {
  return (
    <Card>
      <Date>2019.07.15(월)</Date>
      <Descript>
        <MainTitle>WEHAGO T 시작하기</MainTitle>
        <SubTitle>
          모바일을 통한 빠르고 간편한 증빙전표 처리 기능 알아보기
        </SubTitle>
        <Time>2:00 PM ~ 3:00PM</Time>
      </Descript>
    </Card>
  );
};

ScheduleCard.propTypes = {};

export default ScheduleCard;
