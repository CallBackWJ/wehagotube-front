import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
const Descript=styled.div`
flex:6;
display:flex;
flex-direction:column;
`

const StateBar=styled.div`
width: 10rem;
   height: 2rem;
   border-radius:0.2rem;
   border:solid 1px rgb(238,90,83);
   background:white;
   display:flex;
   justify-content: center;
   color:rgb(238,90,83);
   align-items: center;
   padding:0.5rem;
`
const MainTitle=styled.div`
margin-top:1rem;
font-weight:700;
`
const SubTitle=styled.div`
font-weight:300;
margin-bottom:1rem;
`
const Viewers=styled.div`
color:gray;
margin-top:auto;
`
const VideoDescript = props => {
    return (
        <Descript>
        <StateBar>실시간 스트리밍중</StateBar>
        <MainTitle>[WEHAGO 로드쇼] 1. 세무회계사무소용 ERP - WEHAGO T 알아보기</MainTitle>
        <SubTitle>세무회계사무소용 ERP의 개념을 이해하고 WEHAGO T와 T edge의 주요기능을 알아봅니다.</SubTitle>
        <Viewers>66명 시청중</Viewers>
    </Descript>
    );
};

VideoDescript.propTypes = {
    
};

export default VideoDescript;