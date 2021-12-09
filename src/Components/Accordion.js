import React, { useState } from 'react';


const Accordion = ({ items }) => {
    const [acitveIndex, setActiveindex] = useState(null);

    const onTitleClicked = (index) => {
        setActiveindex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === acitveIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClicked(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return (
        <div className="ui styled accordion">
            {renderedItems}
            <h1>{acitveIndex}</h1>
        </div>
    );
}

export default Accordion;