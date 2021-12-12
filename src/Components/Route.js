import { useEffect, useState } from 'react';


const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        // when we stop showing the component, we should make sure to remove the window eventlistener by calling the cleanup method as follows:
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);
    return (
        currentPath === path ? children : null
    );
}

export default Route;



