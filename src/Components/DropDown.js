import React, { useRef, useEffect } from 'react';
import { useState } from 'react';

const DropDown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(selected.value);
    const ref = useRef();

    // in order to close the dorpdown list when the user clicks outside it, we have to set
    // an event listener that bubles to the body of the document whenever the user clicks outside
    // the dropdown list. to achieve this, we will use the useEffect() hook. By that, we can
    // set up an event listener whenever the dropdown component is rendered to the screen.
    // we will make sure to let this hook run only once when it is first rendered.
    // this event listener will buble to its parents until it gets handeled.
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick, { capture: true });

        // if the dropdown component is to be removed from the dom (by setting a button for example to hide it and show it),
        // its reference is also removed (ref.current) will become null when it gets hidden. that is why, we should use
        // a cleanup method which in this case is the method returned within the useEffect hook. this cleaning involves detaching
        // the event listener within the useEffect hook and consequently avoiding the call of (ref.current) which becomes null when the 
        // dropdown is hidden.
        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true });
        };
    }, []);


    const renderedOptions = options.map((option) => {
        // to make sure that the selected option is not displayed within the rendered list,
        // we make sure not to render it. return null means do not render it.
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div key={option.value} className="item" onClick={() => {
                onSelectedChange(option);
                setSelectedColor(option.value)
            }
            }>
                {option.label}
            </div>
        );
    });
    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">
                    {label}
                </label>
                <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={() => setOpen(!open)}>
                    <i className="dropdown icon"></i>
                    <div className="text">
                        {selected.label}
                    </div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
                {
                    (selectedColor === 'red' || selected === 'green' || selectedColor === 'blue') ?
                        (< h1 style={{ color: `${selectedColor}` }}>Text</h1>)
                        : null
                }
            </div>
        </div >
    );
}

export default DropDown;