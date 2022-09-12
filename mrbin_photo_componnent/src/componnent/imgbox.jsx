import React from 'react';

function ImgBox(props){
    return (
        <div>
        <h2>{props.name}</h2>
        <img src={props.src} />
       </div>
    )
}
export default ImgBox;