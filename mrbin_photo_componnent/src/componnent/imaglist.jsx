import React  from 'react'
import ImgBox from "./imgbox"


const ImageList= ({list})=>{
    return( 
    list.map((item,index) => {
     return  <ImgBox key={index+1} src={item.src}  name={item.name}  />
    
    })
    )
}
export default ImageList