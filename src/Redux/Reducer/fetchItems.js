




                  

export let fetchItems = ( state = { data : [ ] , myData: [ ]  } , action ) => {

     
    if ( action.type === "fetch data" ) {

      return { ...state , data : action.payload };
  
    }
   
    
    else { return state; }

  }