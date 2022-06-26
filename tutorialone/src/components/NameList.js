// List Rendering 
import React from 'react'
import Student from './Student'
function NameList() {
    const names=["Ayesha", "Mariam", "Loki", "Ayesha"]
    // Index is not good to be used as keys
    const nameList= names.map((x, index)=><h2 key={index}> Index is: {index} and name is:{x}</h2>)
    // Example 02
    // const students=[
    //     {
    //         id: 2,
    //         name: "Loki", 
    //         skill:" Hero Marvel",
    //         age:83
    //     },
    //     {
    //         id: 4,
    //         name: "Mahad", 
    //         skill:"Acting",
    //         age:14
    //     }
    // ]
    // You must add the keys, that should be unique. Here, we can use id as key
    // Key props cannot be rendered in child components 
    // const studentList= students.map(x=><Student key={x.id} x={x}/>)
  return (
    <div>
        {/* /Way 01 */}
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}

        {/* Way 02 */}
        {nameList}
    </div>
  )
}

export default NameList