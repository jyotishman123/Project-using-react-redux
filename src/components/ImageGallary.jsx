import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { select , clickInc} from '../action';


export default function ImageGallary() {
    const dispatch = useDispatch()

    const cat = useSelector(state => state.catreducer)

    let catData = cat;
  return (
    <>

       <div className="d-flex  flex-wrap  my-5 justify-content-center justify-content-lg-start ">


    { catData.allCatData.map((ele)=>{
        return(
            <div  key={ele.id} className="card m-2" onClick={()=>{
                dispatch(select(ele))
                dispatch(
                    clickInc(ele.id),
                    select(ele)

                    )
            }} >
            <div className='m-3'>
              <h4>{ele.name}</h4>
              <p>No of times Click:{ele.click}</p>
            </div>
          <img src={ele.catphoto} className="card-img-top" alt="..."/>
          <div className="card-body">
             
             
             
        
        
            <a href="#" className='link'>Card Link</a>
          </div>
        </div>
        )
    }) }



 

       </div>
   
    </>
  )
}
