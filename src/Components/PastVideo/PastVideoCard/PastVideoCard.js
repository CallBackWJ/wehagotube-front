import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Card=styled.div`
width:100%;
height:9rem;
background:rgb(248,249,254);
margin-bottom:1rem;
display:flex;
padding:1rem;
`

//동영상 이미지 부분
const Video=styled.div`
flex:2;
`
const Image=styled.img`
width:12rem;
height:7rem;
position: relative;
background-size: cover;
`
const Badge=styled.div`
position: absolute;
   top: 200px;
   left: 0;
   width: 100%;
   margin: 0 auto;
   width: 300px;
   height: 50px;
`

//설명 부분
const Descript=styled.div`
flex:8;
display:flex;
flex-direction:column;
`
const MainTitle=styled.div`
font-size:1.2rem;

`
const SubTitle=styled.div`
color:gray;
`
const LookupCounter=styled.div`
color:rgb(170,170,170);
margin-top:auto;
`


const PastVideoCard = props => {
    return (
        <Card>
            <Video>
                <Image src="https://s3.dexerto.com/thumbnails/_thumbnailLarge/youtube-logo-thumbnail-change-experiment.jpg"/>
                <Badge></Badge>
            </Video>
            <Descript>
                <MainTitle>[WEHAGO 로드쇼] 1. 세무회계사무소용 ERP - WEHAGO T 알아보기</MainTitle>
                <SubTitle>세무회계사무소용 ERP의 개념을 이해하고 WEHAGO T와 T edge의 주요기능을 알아봅니다. 세무회계사무소용 ERP의 개념을 이해하고 WEHAGO T와 T edge의 주요기능을 알아봅니다.</SubTitle>
                <LookupCounter>조회수 5.5만회 | 1일 전</LookupCounter>
            </Descript>
        </Card>
    );
};

PastVideoCard.propTypes = {
    
};

export default PastVideoCard;