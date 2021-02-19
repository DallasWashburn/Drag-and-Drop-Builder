import React, { Component } from 'react';
import { render } from 'react-dom';
import Header1 from "../Headers/Header0/Header0"
import Header2 from "../Headers/Header1/Header1"


class HeaderCheck extends Component {
  // constructor(props){
  //   super(props);
  //   // this.state={
  //   //   headerType:""
  //   // }
  // }

  // setHeader(){
  //   var allData = this.props.items2;
  //   if (allData) {
  //     allData.map((element) =>{
  //       if(element.data === "Header-0"){
  //         this.setState({
  //           headerType:"Header-0"
  //         })
  //         return
  //       } else if(element.data === "Header-1"){
  //         this.setState({
  //           headerType:"Header-1"
  //         })
  //       } else {
  //         this.setState({
  //           headerType:"test"
  //         })

  //       }
  //     })
  //     console.log(this.state.headerType);
  //   }
  // }




  render(){
 

    if (this.props.headerType === 'Header-0'){
      console.log("workkk");
    return(
      <Header1 />
    )
    }
    else if (this.props.headerType === 'Header-1'){
      return(
        <p>head 1</p>
      )
    }else {
      return null
    }
  } 
      

}
   

export default HeaderCheck