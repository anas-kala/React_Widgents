import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);


    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);

            // inside the useEffect() you can return a method which is called only by the second rendering of the Component. this method is normally used for cleaning resources of the first rendering
            return () => {
                clearTimeout(timerId);
            }
        }, 1000);
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });
            setResults(data.query.search);
        };

        search();

    }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term} onChange={e => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;

// having [] as a second argument for the useEffect method will run it at initial render only (only once when the component is mounted for the first time)
// useEffect(() => {
//     console.log('I only run after every render and at initial render');
// },[]);

// having no second argument for the useEffect method will run it at initial render and after every render
// useEffect(() => {
//     console.log('I only run after every render and at initial render');
// });

// having [data1,data2,data3] as a second argument for the useEffect method will run it at initial render. after that, it will only render when one of the state variables within the [] changese.
// useEffect(() => {
//     console.log('I only run after every render and at initial render');
// },[data1,data2,data3]);