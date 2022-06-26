import React from 'react'
import './mystyle.css'
function Stylesheet(props) {
    let className= props.nameOfClass ? 'primary':'' 
  return (
    <div>
        {/* For multiple classes (for style sheet) use following way   */}
        <h1 className={`${className} fclass`}>Ayesha Siddiqua</h1>
    </div>
  )
}
export default Stylesheet