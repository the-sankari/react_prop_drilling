import React from 'react'
import GrandChildComponent from './GrandChildComponent'

const ChildComponent = (props) => {

  return (
    <div>
      <GrandChildComponent data={props.data} ></GrandChildComponent>
    </div>
  )
}

export default ChildComponent
