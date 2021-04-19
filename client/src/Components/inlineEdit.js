import React, { useState, useEffect, useRef, useCallback } from "react";
import useKeypress from "../Components/Hooks/useKeypress"
import useOnClickOutside from "../Components/Hooks/useOnClickOutside";
import DOMPurify from "dompurify";
import Tooltip from "../Components/Tooltip/Tooltip"
import API from '../utils/API';


function InlineEdit(props) {
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState(props.text);

  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const inputRef = useRef(null);

  const enter = useKeypress("Enter");
  const esc = useKeypress("Escape");

  const { onSetText } = props;

  // check to see if the user clicked outside of this component
  useOnClickOutside(wrapperRef, () => {
    if (isInputActive) {
      onSetText(inputValue);
      setIsInputActive(false);
    }
  });

  const onEnter = useCallback(() => {
    if (enter) {
      onSetText(inputValue);
      setIsInputActive(false);
      console.log(inputValue);
    }
  }, [enter, inputValue, onSetText]);

  const onEsc = useCallback(() => {
    if (esc) {
      setInputValue(props.text);
      setIsInputActive(false);
    }
  }, [esc, props.text]);

  // focus the cursor in the input field on edit start
  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
  }, [isInputActive]);

  useEffect(() => {
    if (isInputActive) {
      // if Enter is pressed, save the text and close the editor
      onEnter();
      // if Escape is pressed, revert the text and close the editor
      onEsc();
    }
  }, [onEnter, onEsc, isInputActive]); // watch the Enter and Escape key presses

  const handleInputChange = useCallback(
    event => {
      // sanitize the input a little
      setInputValue(DOMPurify.sanitize(event.target.value));
    },
    [setInputValue]
  );

  const handleSpanClick = useCallback(() => setIsInputActive(true), [
    setIsInputActive
  ]);

  const checkFinal = () => {
    API.getUsers()
      .then(users => {
        var theUsers = users.data
        for (let i = 0; i < theUsers.length; i++) {
          const element = theUsers[i];
          if (element.userEmail === this.props.userEmail) {
            var Page1 = element.projects[1];
            console.log(element);
          }
        }
      })
  }

  var containerClass = document.getElementById("container2").classList[0]
  if (containerClass != undefined) {
    
    return (

        <span className="inline-text" ref={wrapperRef}>
          <span
            ref={textRef}
            
            className={`inline-text_copy inline-text_copy--${!isInputActive ? "active" : "hidden"
              }`}
          >
            {props.text}
          </span>
          <textarea
            rows="4"
            ref={inputRef}
            // set the width to the input length multiplied by the x height
            // it's not quite right but gets it close
            style={{ minWidth: "100%" }}
            value={inputValue}
            onChange={handleInputChange}
            className={`inline-text_input inline-text_input--${isInputActive ? "active" : "hidden"
              }`}
          />
        </span>

    )
  } else {

    return (
      <Tooltip content="Click to edit text" direction="top">
        <span className="inline-text" ref={wrapperRef}>
          <span
            ref={textRef}
            onClick={handleSpanClick}
            className={`inline-text_copy inline-text_copy--${!isInputActive ? "active" : "hidden"
              }`}
          >
            {props.text}
          </span>
          <textarea
            rows="4"
            ref={inputRef}
            // set the width to the input length multiplied by the x height
            // it's not quite right but gets it close
            style={{ minWidth: "100%" }}
            value={inputValue}
            onChange={handleInputChange}
            className={`inline-text_input inline-text_input--${isInputActive ? "active" : "hidden"
              }`}
          />
        </span>
      </Tooltip>
    );
  }
}

export default InlineEdit;
