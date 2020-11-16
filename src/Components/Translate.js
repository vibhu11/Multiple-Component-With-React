import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options =[
    { label: 'Afrikanns',
    value: 'af'},
    { label: 'Arabic',
    value: 'ar'},
    { label: 'Hindi',
    value: 'hi'},
    { label: 'Dutch',
    value: 'nl'}
  ]
  
function Translation () {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('')
 return(
     <div>
        <div className="ui form">
        <div className="field">
        <label>Enter text</label>
        <input value={text} onChange={(e) => setText(e.target.value) } />
        </div>
        </div>
         <Dropdown 
            label='Select Language' 
            colors ={options} 
            selected= {language}
            onSelectedChange={setLanguage}

            />
            <hr/>
            
            <Convert 
              text= {text} 
              language={language}
                
              />

     </div>
 );
}

export default Translation;



