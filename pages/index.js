import React from 'react';
import ClassItemList from '../component/ClassItemList';
import MainCategory from '../component/MainCategory';
import TitList from '../component/TitList';

function index() {
    const data = [
        {
            imgUrl: '/images/lip.png',
            tit: '인문스테디-만반',
            txt: '나를 알고 세상을 배우는 인문학 클럽',
            sticker: '마감임박',
            meetInfo: '강남|첫 모임일9/12(일)10:00~13:00',
        },
        {
            imgUrl: '/images/cup.png',
            tit: '체험독서-차차',
            txt: '변해버린일상,맞춤형 체험독서',
            sticker: '',
            meetInfo: '강남|첫 모임일9/18(일)15:00~18:00',
        },
        {
            imgUrl: '/images/book.png',
            tit: '투자하는마음-파도:기분업석',
            txt: '어차피 해야 할 투자,마냥 운에맡기고 싶지않다면?',
            sticker: '마감임박',
            meetInfo: '안국|첫 모임일9/3(금)20:00~23:00',
        },
        {
            imgUrl: '/images/wings.png',
            tit: '스타텁-날개',
            txt: '다양한 도전을해보는 클럽,사업에 관심 있다면 여기로!',
            sticker: 'NEW',
            meetInfo: '강남|첫 모임일9/12(일)15:00~18:00',
        },
    ];
    return (
        <>
            <MainCategory title={'오늘의 TOP10'} gg={data} />
            <MainCategory title={'오늘의 TOP10'} gg={data} />;
        </>
    );
}

export default index;
