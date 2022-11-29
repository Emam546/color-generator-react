import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [err,setErr]=useState(false)
  const [list,setList]=useState(new Values("#f15025").all(10))
  function handelSubmit(e) {
    e.preventDefault()
    const formData=new FormData(e.target)
    const data=[...formData.values()]
    try{
      const colors=new Values(data[0]).all(10)
      setList(colors)
      setErr(false)
    }catch(err){
      setErr(true)
    }

  }
  return <>
    <section className='container'>
        <h2>color generator</h2>
        <form onSubmit={handelSubmit}>
          <input type="text" className={err?"error":null}/>
          <button className='btn' type='submit'>
              submit
          </button>
        </form>
    </section>
    <section className='colors'>
        {list.map((color,i)=>{
          console.log(color);
          return <SingleColor key={i} color={color} index={i}/>
        })}
    </section>
  </>
}

export default App
