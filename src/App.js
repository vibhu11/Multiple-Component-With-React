import React, { useState } from "react";
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/header';
const items= [
  { title: 'What is React?',
  content: 'react is a frame work'},
  { title: 'What is Angular?',
  content: 'Angular is a frame work'},
  { title: 'What is Node?',
  content: 'Node is a frame work'},
  
];

const options =[
  { label: 'the color red',
  value: 'red'},
  { label: 'the color green',
  value: 'green'},
  { label: 'the  shade of blue',
  value: 'blue'},
]


export default function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
        <Header/>
        <Route path = '/'>
          <Accordion items ={items}/>
        </Route>

        <Route path = '/translate'>
          <Translate/>
        </Route>

        <Route path = '/list'>
          <Search/>
        </Route>

        
        <Route path = '/dropdown'>
          <Dropdown 
          label ='Select a color' 
            colors = {options}
            selected ={selected}
            onSelectedChange ={setSelected}
          />
          <h1 style= {{color:selected.value }}>This Color is  {selected.value}</h1>
        </Route>
        
    </div>
  );
}