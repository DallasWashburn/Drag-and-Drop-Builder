import React from "react";
import "./Edit-Menu.css"

const EditMenu = (props) => {
    console.log(props.dataContent);
    if(props.dataContent !== ""){

        var contentBlock = document.querySelectorAll(`[data-element=${props.dataContent}]`);
        var childElements = contentBlock[0].childNodes;
        //console.log(childElements);
       //childElements.forEach((item)=> {
          // console.log(item);
      // })
        //console.log(contentBlock);
    
        var textBlock = contentBlock[0].getElementsByTagName("p")
        var mainHeading = contentBlock[0].getElementsByTagName("h1")
        var subHeading = contentBlock[0].getElementsByTagName("h2")
        var imageBlock = contentBlock[0].getElementsByTagName("img")
        console.log(textBlock);
    return (
        <div id="mySidebar" class="sidebar">
            <button class="closebtn" onClick={props.closeEdit}></button>
            <div class="form-group">
                <div className="label-wrap">
                    <label className="">Update Text</label>
                </div>
                <div className="textarea-wrap">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                 {props.children}
                <div className="label-wrap">
                    <label>Enter Hex Code For Primary Color</label>
                </div>
                <div className="color-wrap">
                    <div class="input-group mb-3">
                        <input className="color-input" type="text" placeholder="#3c3c3c"/>
                        <div class="input-group-append">
                            <button class="btn color-btn" type="button">Button</button>
                        </div>
                    </div>
                </div>
                <div className="label-wrap">
                    <label>Enter Hex Code For Secondary Color</label>
                </div>
                <div className="color-wrap">
                    <div class="input-group mb-3">
                        <input className="color-input" type="text" placeholder="#FFFFFF"/>
                        <div class="input-group-append">
                            <button class="btn color-btn" type="button">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    } else {
        return (
            <div id="mySidebar"></div>
        )
    }
};

export default EditMenu;