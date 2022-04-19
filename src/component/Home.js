import React, { useState } from 'react'
import Button from './Button'
import Menu from './Menu'
import Data from './Data'
const Home = () => {
    const allCategoryData = ['All', ...new Set(Data.map(item=>item.category)) ];
    const [menuItem,setMenuitem] = useState(Data);
    const [buttons,setButtons] = useState(allCategoryData);
   
    console.log(allCategoryData);
    const filter =(button)=>{
        if(button === 'All'){
            setMenuitem(Data);
            return;
        }
        const filterData  = Data.filter(item =>item.category === button);
        setMenuitem(filterData);
    }
  return (
   <>
   <div className="">
       <h1>Filter Data</h1>
       <Button filter={filter} button={buttons}/>
       <Menu menuItem={menuItem} />
   </div>
   </>
  )
}

export default Home