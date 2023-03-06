import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux';
import { clickInc } from '../action';
import { select } from '../action';
import '../index.css'


export default function Leftnav() {
 
  const dispatch = useDispatch()

  const [check, setCheck] = useState()


  const cat = useSelector(state => state.catreducer)

  let catData = cat

  
  
  function IncClick(e,index){
     
    // dispatch(
    // clickInc(e.id)
    // )
    dispatch(
      select(e)
    )
    setCheck(index)

     
    
  }

  return (
   
    <div className='list m-2'> 
   
   {catData.allCatData.map((ele,index)=>{
 return( 

    <ul key={index}  className = "list-group  rounded-0  border " >
  <li className =  {( catData.selectedCat.id == ele.id && Object.keys(catData.selectedCat).length > 0) ? "list-group-item d-flex    justify-content-between align-items-center active" : "list-group-item d-flex    justify-content-between align-items-center"  }  onClick={()=>IncClick(ele,index)} >
     {ele.name}
    <span className="badge bg-secondary rounded-pill">{ele.click}</span>
  </li>
   
  
</ul>
 )
 })}
</div>
  )
}
