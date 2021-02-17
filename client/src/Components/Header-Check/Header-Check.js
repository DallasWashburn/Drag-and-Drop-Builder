import React from 'react';
import Header1 from "../Headers/Header1/Header1"
import Header2 from "../Headers/Header2/Header2"


const HeaderCheck = props => {
    var header = -1
    var allData = props.items2
    allData.map((element) => {
      console.log(element.data);
      if(element.data === "Header-0"){
        header = 0
        return element.data
      }
  })
      
    if (header === 0) {
      return <Header1 editText={props.editText}/>;
    }
    return <Header2 />;
  }
   

export default HeaderCheck