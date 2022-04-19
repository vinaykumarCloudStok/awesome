import React from 'react'

const Button = ({filter,button}) => {
  return (
    <>
    <div className="">
       {button.map((cat,i)=>{
           return(
               <>
               <button type='button' onClick={()=>filter(cat)} > {cat} </button>
               </>
           )
       })}
    </div>
    </>
  )
}

export default Button