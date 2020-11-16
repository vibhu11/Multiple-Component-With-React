import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Search () {
    const[term, setTerm]= useState('programming');
    const [results, setResult] = useState([]);
   
    
    useEffect(() => {
        const search = async () =>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php?', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            setResult(data.query.search);
        };
        const timeoutId= setTimeout(() => {
         if (term) {
           search();
        }   
        }, 500)

        return () => {
            clearTimeout(timeoutId)
        };
        
        
        }, [term]);

    const renderResult = results.map((result) => {
        return (
            <div key={result.pageid}  className='item' >
                <div className='right floated content'>
                    <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div  className="content">
                    <div  className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                    
                </div>
            </div>
        );
    })

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input  
                        value= {term}
                        className='input'
                        onChange={(e => setTerm(e.target.value))}
                    />
                </div>
            </div>
            <div className= 'ui celled list'>
                {renderResult}
            </div>
        </div>
    );
}

export default Search;