import React from 'react';

function ClassItem({ gg }) {
    return (
        <ul>
            {gg.map((item, i) => (
                <li>
                    <div className="jsx">
                        <div className="thumb">
                            <img src={item.imgUrl} />
                            {item.sticker && (
                                <div className="sticker">
                                    <span className={item.sticker === 'NEW' ? 'new' : 'endtime'}>{item.sticker}</span>
                                </div>
                            )}
                        </div>
                        <div className="nav">
                            <h3>{item.tit}</h3>
                            <p>{item.txt}</p>
                            <div className="meet_info">
                                <span>{item.meetInfo}</span>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ClassItem;
