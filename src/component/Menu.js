import React from 'react'

const Menu = ({menuItem}) => {
  return (
   <>
    <div style={{display:"flex",  flexWrap:"wrap",justifyContent:"space-around",justifyItems:"center"}}>
    

   { menuItem.map((item)=>{
           return(
               <>
             
              <div  key={item.id} style={{width:"50%"}} >
               <div>
                   <img src={item.image} alt='' style={{width:"200px",height:"200px"}}/>
                   <h2> {item.title} </h2>
                   <p> {item.description} </p>
               </div>
               </div>
           
               </>
           )
       })
   }
  </div>
  </>
  )
}

export default Menu