import React,{useState, useEffect} from 'react';
import '../index.css';
import { ReactReduxContext, useSelector } from 'react-redux';
import Preveiw from './Preveiw';
import { useDispatch } from 'react-redux';
import { clickInc } from '../action';
 
 


export default function MiddleComp() {

  const dispatch = useDispatch()

  
 
  const cat = useSelector(state => state.catreducer)

  let catData = cat;
   
 const [period, setPeriod] = useState('');

 useEffect(()=>{
           if(catData.selectedCat.click > 0 && catData.selectedCat.click < 5){
            setPeriod("Infant")
           }
           if(catData.selectedCat.click > 6 && catData.selectedCat.click < 12){
            setPeriod("Child")
           }if(catData.selectedCat.click > 13 && catData.selectedCat.click < 25){
            setPeriod("Young")
           }if(catData.selectedCat.click > 26 && catData.selectedCat.click < 40){
            setPeriod("Middle Age")
           }if(catData.selectedCat.click > 41 && catData.selectedCat.click < 60){
            setPeriod("Old")
           }
           if(catData.selectedCat.click > 61){
            setPeriod("Very Old")
           } 
 },[catData.selectedCat.click])


 
   

if(Object.keys(catData.selectedCat).length == 0){
  return <Preveiw/>
}
else
  return (

  
     
 <div className='m-2'>


 


  <div className="card" onClick={()=>{
      dispatch(clickInc(catData.selectedCat.id))
  }} >
    <div className='m-3'>
      <h4>{catData.selectedCat.name}</h4>
      <p>No of times Click:{catData.selectedCat.click}</p>
    </div>
  <img src={catData.selectedCat.catphoto} className="card-img-top" alt="..."/>
  <div className="card-body">
     
    <p className="card-text">{catData.selectedCat.nickname}</p>
    <p className="card-text">{period}</p>


    <a href="#" className='link'>Card Link</a>
  </div>
</div>
 </div>



   
   
  )
}
  

