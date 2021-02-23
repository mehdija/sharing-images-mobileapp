
import produce from "immer";

                  
let id ;
let counter = 3;
export let fetchItems = ( state = { data : [ ]    } , action ) => {

     
    if ( action.type === "fetch data" ) {

      return { ...state , data : action.payload };
  
    }

    else if ( action.type === "add image" ) {

    
      const ImagesAdded = produce( state , draft => {
        counter++;
        id = "id" + counter.toString();
        draft.data.push({ name :"elmehdi" , image: action.payload , src: require("../Reducer/picture.png") , id : id })
      
    
      })

      return ImagesAdded;

    
    }

    
    else { return state; }


  }