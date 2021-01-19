






export let fetchItems = ( state = { data : [ ]  } , action ) => {

     
    if ( action.type === "fetch data" ) {

      return { ...state , data :  action.payload   };
  

    
    }
    
    else { return state; }

  }