import React from 'react';


const Link = ({ href, name }) => {
    const onClick = (event) => {
        // when clicking metaKey on mac or ctrlKey on windows while clicking a link with the mouse, the expected behaviour to open the link in a sparate tab.
        // to handle this event, the following if block is implemented.
        if (event.mateKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();

        // the following line is only responsible for updating the ref link, without yet updating the content of the browswer with the corresponding component
        // in other words, it only updates the link itself and nothing else.
        window.history.pushState({}, '', href);

        // the following code is to tell the components that the url has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a href={href} className='item' onClick={onClick}>
            {name}
        </a>
    );
}

export default Link;