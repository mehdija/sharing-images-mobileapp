


let fakeData = [ {  name :"elmehdi", src:  require("../Reducer/picture.png" ) , image :  require("../Reducer/coding.jpg" ) , id :"id1" } , { name : "Lacey" , src:  require("../Reducer/Lacey.jpg" ) , image : require( "../Reducer/mountains.jpg" ) , id : "id2" } , {  name : "Mark" , src: require("../Reducer/Mark.jpg") , image : require( "../Reducer/beach.jpg") , id :"id3" } ];



export let fetch = ( ) => {

return { type : "fetch data" , payload : fakeData  };


}

export let addImage = ( payload ) => {

return { type : "add image" , payload : payload }

}


