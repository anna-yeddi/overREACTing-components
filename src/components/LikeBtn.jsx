import React, { useState } from 'react'
// import propTypes from 'prop-types'

function LikeBtn(props) {
  // array destructuring:
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1)
    // console.log(evt, this.clicks)
  }
  // const handleClick = () => {
  //   setClicks((prevClicks) => prevClicks + 1)
  // }

  return <button onClick={handleClick}>Click me (func): {clicks}</button>

  // // pre-state binding option:
  // return (
  //   <button onClick={(evt) => handleClick(evt)}>
  //     Click me (func): {clicks}
  //   </button>
  // )
}

LikeBtn.propTypes = {}

export default LikeBtn
