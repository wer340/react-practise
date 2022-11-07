import React from 'react';

function ImgBox({name,src}){
    return (
        <div className='gridy'>
        <h2>{ name}</h2>
        <img src={ src} />
       </div>
    )
}
export default ImgBox;