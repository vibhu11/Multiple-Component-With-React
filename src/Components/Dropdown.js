import React, { useEffect, useRef, useState } from "react";

function DropDown({label,colors, selected,onSelectedChange}) {
    
    const [open,setOpen] = useState(false);
    
    const ref = useRef()
    
    useEffect ( () => {
        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)){
                return;
            }
            setOpen(false);

            
        }
        document.body.addEventListener('click', onBodyClick ,{capture:true});
        return () => {
            document.body.removeEventListener('click', onBodyClick ,{capture:true});
        }
    }, []);
    


    const renderOptions = colors.map((color) => {
        if(color.value === selected.value) {
            return null;
        }
        return (
            <div 
                className='item' 
                key={color.value} 
                onClick={()=> onSelectedChange(color)}
            >
                {color.label}
            </div>
        );
    })

    

    return(
        
        <div ref= {ref} className='ui form'>
        <div className='field'>
            <label className='label'>{label}</label>
            <div onClick={() => setOpen(!open)} className={`ui selection dropdown + ${open? 'visible active' : null}`} >
                <i className= 'dropdown icon'></i>
                <div className='text'> {selected.label}</div>
                <div className={`menu + ${open? 'visible transition' : ''  } `}>{renderOptions}</div>
                
            </div>
        </div>
            
        </div>
        
    
        
    );
}


export default DropDown;
