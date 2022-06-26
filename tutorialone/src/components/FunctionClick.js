import React from 'react'

function FunctionClick() {
    function clickHnadler(){
        console.log("Button Clicked")
    }
    return (
    <div>
        {/* Do not use () with handlder */}
        <button onClick={clickHnadler}>Click Here</button>
    </div>
  )
}

export default FunctionClick