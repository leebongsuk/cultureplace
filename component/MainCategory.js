import React from 'react';
import TitList from './TitList';
import ClassItemList from './ClassItemList';

function MainCategory({ title, gg }) {
    return (
        <>
            <TitList title={title} />
            <ClassItemList gg={gg} />
        </>
    );
}

export default MainCategory;
