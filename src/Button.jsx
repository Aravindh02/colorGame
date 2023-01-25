    import React from 'react'
    import "./button.css";
    
    
    function Button({circleFunction}) {
      var tiggerColorBtn = true;
      const handleClick = (tiggerColorBtn)=>{
        console.log("clicked");
        circleFunction(tiggerColorBtn);
        
      }
        return (
        <div className="Button">
            <button onClick={()=>handleClick(tiggerColorBtn)} className='colorBtn'>
                circle color
            </button>
        </div>
      )
    }
    
    export default Button