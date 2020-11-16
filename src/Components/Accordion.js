import React, { useState } from "react";

 function App({ items }) {
    
    const [activeIndex , setActiveindex] = useState(null);
    

    function onTitleClick(index) {
        setActiveindex(index)
    }

  const renderItems = items.map((item,index) => {
      const active = index===activeIndex ? 'active' :'';
    return (
      <React.Fragment>
        <div 
            key = {item.title}
            className={'title' + active}
            onClick= {() => onTitleClick(index)}
        
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={'content' + active}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderItems}</div>;
}

export default App;