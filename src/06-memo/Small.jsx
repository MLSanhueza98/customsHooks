import React from "react"
// import { memo } from 'react'

const Small = React.memo(({ value }) => {

  console.log('re rendering')

  return (
    <small>{ value }</small>
  )
})

export default Small
