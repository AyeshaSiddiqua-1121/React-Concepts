import React from 'react'

function InlineCSS() {
    const css={
        fontSize:'80px',
        color:'blue'
    }
  return (
    <div>
        <p style={css}>Hello there </p>
        <h1 className='error'>Error </h1>

    </div>
  )
}

export default InlineCSS