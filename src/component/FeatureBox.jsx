import React from 'react'

function FeatureBox(props) {
  return (
    <div className='a-box' id='servicios'>
        <div className="a-b-img">
            <img src={props.image}/></div>
            <h2 className='align-items-center text-center p-2'>{props.title}</h2>
            <p >{props.text} </p>
            
            </div>
  )
}

export default FeatureBox;