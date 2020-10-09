import React, { InputHTMLAttributes, useCallback, useEffect, useRef } from 'react';
import { getEffectiveConstraintOfTypeParameter } from 'typescript';

import { Container } from './styles';

const CheckCode: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null)
  
  // useEffect(() => {
   
  // }, [])
    


  const startInput = useCallback((evt: any) => {
   const container = evt.currentTarget;
   container.onkeyup = function(e: any, i: any) {
    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

}, [])

  return <Container ref={divRef} onFocus={startInput}>
    <input type="text" id="1" maxLength={1} />
    <input type="text" id="2" maxLength={1} />
    <input type="text" id="3" maxLength={1} />
    <input type="text" id="4" maxLength={1} />

    <input type="text" id="5" maxLength={1} />
    <input type="text" id="6" maxLength={1} />
    <input type="text" id="7" maxLength={1} />
    <input type="text" id="8" maxLength={1} />
  </Container>;
}

export default CheckCode;