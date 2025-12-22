import React from 'react'

const JsxExplore = (props) => {
    const hours = 17;
    const date = "22nd Dec, 2025";
  return (
    <div>{hours > 12 ? "Good Evening" : "Good Morning"} {props.name}, todays is {date}</div>
  )
}

export default JsxExplore