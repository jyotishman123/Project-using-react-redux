import { useEffect } from "react";
import { ReactReduxContext } from "react-redux";
import { getCatdata } from "../action";
// import { useDispatch } from "react-redux";
// import { getCatdata } from "../action";

 

export const catData = {
    allCatData:[], 
    selectedCat:{}
};



const catreducer = (state = catData, action)=>{

    

   
   switch(action.type){
        
           case 'GET_DATA' : {
        
          
         return { ...state, allCatData:action.payload }
         
             
              
           }


           case 'ADD_DATA' : {
             
          

           let addnewdata = [...state.allCatData, action.payload]
       
               localStorage.setItem('cat',JSON.stringify(addnewdata))

             return { ...state, allCatData:addnewdata }
                 
               
          }


          case 'CLICK_INC':{
             
           
          let inc =  state.allCatData.map((ele)=>{
              if(ele.id == action.payload){
                ele.click = ++ele.click
              }
                return ele
            })

            localStorage.setItem('cat',JSON.stringify(inc))


            return  {...state, allCatData:inc}
           

           
            


              
          }


          case 'SELECT':{
            
            return {...state, selectedCat:action.payload}
             

          }

          case 'CHANGE_DATA':{
              let change = state.allCatData.map((ele)=>{
                  if(ele.id == action.id){
                      ele.name = action.name;
                      ele.catphoto = action.photo;
                      ele.click = action.clicks
                       
                      
                      
                       
                  }
                  console.log(ele)
                  return ele
              })
              localStorage.setItem('cat',JSON.stringify(change))


              return  {...state, allCatData:change}
              
          }

           default : return state
          
         
         
   }

}
 
export default catreducer

