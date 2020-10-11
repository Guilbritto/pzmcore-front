import React, {  createRef,   useCallback,  useEffect,  useState } from 'react';

import { Container } from './styles';

interface CheckCodeProps{
    setValue(value:string):void
}

const CheckCode: React.FC<CheckCodeProps> = ({setValue}) => {
    const divRef = createRef<HTMLDivElement>()
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')
    const [value5, setValue5] = useState('')
    const [value6, setValue6] = useState('')
    const [value7, setValue7] = useState('')
    const [value8, setValue8] = useState('')
        
    useEffect(() => {
        setValue(`${value1} ${value2} ${value3} ${value4} ${value5} ${value6} ${value7} ${value8}`)
    }, [value1, value2, value3, value4,value5, value6,value7, value8, setValue])

    const startInput = useCallback((evt) => {
        const container = evt.currentTarget;
        container.onkeyup = function(e: any, i: any) {
            var target = e.srcElement || e.target;
            var maxLength = parseInt(target.attributes["maxlength"].value, 10);
            var myLength = target.value.length;
            if (myLength >= maxLength) {
                var next = target;
                // eslint-disable-next-line
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
                // eslint-disable-next-line
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



    return <Container ref={divRef} onFocus={startInput} >
        <input type="text" id="1" maxLength={1} value={value1} onChange={evt => setValue1(evt.target.value)} />
        <input type="text" id="2" maxLength={1} value={value2} onChange={evt => setValue2(evt.target.value)} />
        <input type="text" id="3" maxLength={1} value={value3} onChange={evt => setValue3(evt.target.value)} />
        <input type="text" id="4" maxLength={1} value={value4} onChange={evt => setValue4(evt.target.value)} />

        <input type="text" id="5" maxLength={1} value={value5} onChange={evt => setValue5(evt.target.value)} />
        <input type="text" id="6" maxLength={1} value={value6} onChange={evt => setValue6(evt.target.value)} />
        <input type="text" id="7" maxLength={1} value={value7} onChange={evt => setValue7(evt.target.value)} />
        <input type="text" id="8" maxLength={1} value={value8} onChange={evt => setValue8(evt.target.value)} />
    </Container>;
}

export default CheckCode;