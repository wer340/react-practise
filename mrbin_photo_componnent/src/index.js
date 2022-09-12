import React from "react";
import ReactDom from "react-dom";
import ImgBox from "./componnent/imgbox";
import Actress from "./componnent/list"
function retrive(item){
  return <ImgBox name={item.name} src={item.src}/>
}
function App() {
  return (
    
      
     Actress.map(retrive)
    
  );
}
const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);