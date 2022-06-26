import React from 'react'

function Student({x}) {
  return (
    <div>
        <h2>My id is {x.id} and my age is {x.age}. My name is {x.name} and skill is {x.skill}</h2>
    </div>
  )
}

export default Student
