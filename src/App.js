import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import React,{useEffect, useState} from "react";
import { catData } from "./reducers/catreducer";
import { getCatdata } from "./action";
import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux'; 
import Rightnav from "./components/Rightnav";
import './index.css'



function App() {

  const dispatch = useDispatch();

  const cat = useSelector(state => state.catreducer)
  let catData = cat
 

  useEffect(()=>{
    
      
  
     if(localStorage.getItem('cat') == null ){
        localStorage.setItem('cat', JSON.stringify(catData.allCatData))
     }

     let ls = localStorage.getItem('cat')
    
     dispatch(getCatdata(JSON.parse(ls)))
       
   
  },[])
    
    

  return (
     <>
     <Header/>
    
 { catData.allCatData.length > 0 ?  <Main/> :  <Rightnav/> }

      
     </>
  );
}

export default App;
