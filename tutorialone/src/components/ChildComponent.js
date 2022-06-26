import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler("Mariam Nawaz")}>Child Component Button</button>
    </div>
  )
}

export default ChildComponent