"use client"

import React, { useState } from "react"
import ServerComponentOne from "./Server-Component-one"
// import ClientComponentTwo from "./Client-Component-two"

export default function ClientComponentOne({children}:{
  children : React.ReactDOM
}) {

  const [name, setName] = useState("")
  return (
    <>
    <div>Client Component One</div>
    {children}
    {/* <ClientComponentTwo/> */}
    {/* <ServerComponentOne/> */}
    </>
  )
}
