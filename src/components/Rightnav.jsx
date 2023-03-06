import React,{useState,useEffect} from 'react';
// import { addCatdata } from '../action';
import { useDispatch } from 'react-redux';
import { addCatdata } from '../action';
import { useSelector } from 'react-redux';
import { changeData } from '../action';
import { combineReducers } from 'redux';

export default function Rightnav() {

  const cat = useSelector(state => state.catreducer)

  let catData = cat;
   

  const dispatch = useDispatch()

  
 

    const [newForm, setNewForm] = useState(false)
    
    const [catname, setCatname] = useState('')
    const [catNickname, setNickname] = useState('')
    const [catPhoto, setCatPhoto] = useState('');

  
   



    const [changename, setChangename] = useState("");
    const [changephoto, setChangephoto] = useState("");
    const [changeclick, setChangeclick] = useState("");


     useEffect(()=>{
          setChangename(catData.selectedCat.name);
          setChangephoto(catData.selectedCat.catphoto);
          setChangeclick(catData.selectedCat.click);
     },[catData.selectedCat.click])
    
 


    

    
    function handeleUpload(e){
       
      const files = e.target.files;
       

      for (var i = 0, f; f = files[i]; i++) {

         
        if (!f.type.match('image.*')) {
          continue;
        }
  
        var reader = new FileReader();
  
         
        reader.onload = function(e) {
            
             setCatPhoto(e.target.result)
        };
  
        reader.readAsDataURL(f);
      }

    }

  function handleSubmit(e){
     e.preventDefault()
    
     dispatch(
       addCatdata(catname, catNickname, catPhoto)
     )
    
     setNewForm(false);

       
  }


  function handlechange(ele,e){
    e.preventDefault()
       dispatch(
        changeData(ele, changename, changephoto, changeclick)
       )
      
  }

  function handleUndo(){

     setChangename('')
     setChangephoto('')
     setChangeclick('')
      
  }


  
 


if(!newForm && Object.keys(catData.selectedCat).length > 0){

 

return(
    
        <form className='border p-3 m-2'>
            <div className='mt-3 mb-3'>
        <button type="button" className="btn btn-primary" onClick={()=>{setNewForm(true)}} >Open New Form</button>

            </div>
  <div className="mb-3">
    <label htmlFor="catName" className="form-label">Cat Name</label>
    <input type="text" value={changename}  
     

     

    onChange={(e)=>{
      setChangename(e.target.value);
       
    }}

    

     

    className="form-control" id="catName"/>
     
  </div>
  <div className="mb-3">
    <label htmlFor="catImage" className="form-label">Cat Image</label>
    <input type="text"  value={changephoto} onChange={(e)=>{setChangephoto(e.target.value)}} className="form-control" id="catImage"/>
  </div>

  <div className="mb-3">
    <label htmlFor="catClicks" className="form-label">Cat Clicks</label>
    <input type="text"  value={changeclick} onChange={(e)=>{setChangeclick(e.target.value)}} className="form-control" id="catClicks"/>
  </div>
   
  <button type="submit" className="btn btn-success"  onClick={(e)=>{handlechange(catData.selectedCat,e)}} >Save</button>
  <button type="submit" className="btn btn-danger"   onClick={(e)=>{
      handleUndo()
      

  }} >Undo</button>

</form>
)
}else{
    return(
        <form className='border p-3 m-2'>
        <div className='mt-3 mb-3'>
    <button type="button" className= { (Object.keys(catData.selectedCat).length > 0) ? "btn btn-primary" : "d-none"} onClick={()=>{setNewForm(false)}} >Close New Form </button>

        </div>
<div className="mb-3">
<label htmlFor="catName" className="form-label">Cat Name</label>
<input type="text" onChange={(e)=>{setCatname(e.target.value)}} value={catname} className="form-control" id="catName" aria-describedby="emailHelp"/>
 
</div>
<div className="mb-3">
<label htmlFor="catNickname" className="form-label">Cat Nick Name</label>
<input type="text"  onChange={(e)=>{setNickname(e.target.value)}} value={catNickname}  className="form-control" id="catNickname"/>
</div>

<div className="mb-3">
<label htmlFor="uploadImg" className="form-label">Upload Cat Images</label>
<input type="file"  accept='images'   onChange={handeleUpload} className="form-control" id="uploadImg"/>
</div>

<button type="submit" className="btn btn-success" onClick={handleSubmit} >Save</button>


</form>
    )
}
     
  
}
