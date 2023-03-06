export const getCatdata = (data) =>{
    return{
        type: 'GET_DATA',
        payload: data
         
    }
}

export const addCatdata = (catName, catNickname, catPhoto, click) =>{
      return {
         type: 'ADD_DATA',
         payload:{
             name:catName,
             nickname:catNickname,
             catphoto:catPhoto,
             id: new Date().getTime().toString(),
             click: 1
         }

      }
}

export const clickInc = (id) =>{
      return{
        type: 'CLICK_INC',
        payload: id

      }
};

export const select = (e) =>{
    return{
        type:"SELECT",
        payload:e
    }
}

export const changeData = (ele, changename,  changephoto, changeclick) =>{
    return{
        type: "CHANGE_DATA",
        id:ele.id,
        name:changename,
        photo:changephoto,
        clicks:changeclick


    }
}