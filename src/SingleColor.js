import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({color:{rgb,weight,},index}) => {
  const hex=rgbToHex(...rgb)
  const [alert,setAlert]=useState(false)
  useEffect(()=>{
    const timeout=setTimeout(()=>{setAlert(false)},2000)
    return ()=>clearTimeout(timeout)
  },[alert])
  function copyToClipBoard(){
    navigator.clipboard.writeText(hex)
    setAlert(true)
    
  }
  return <article 
  className={`color ${index>10&&"color-light"}`}
  style={{backgroundColor:hex}}
  onClick={()=>copyToClipBoard()}>
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hex}</p>
    {alert && <p className='alert'>copied to clipboard</p>}
  </article>
}

export default SingleColor
