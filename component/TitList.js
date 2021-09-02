import React from 'react'

function TitList({title}) {
    return (
        <div className="wrap_category">
            <div className="top">
                <div className="top_nav">
                    <h2 className="tit_category">{title}</h2>
                    <span>전체보기</span>
                </div>
            </div>
        </div>
    );
}

export default TitList
