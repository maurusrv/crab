import { useEffect, useState } from "react"

function Subtitle (props) {
  const { guest } = props

  return (
    <h2>Hi, {guest}!</h2>
  )
}

// function Subtitle2 ({ guest: guestName }) {
//   return (
//     <h2>Hi, {guestName}!</h2>
//   ) 
// }

export default Subtitle
