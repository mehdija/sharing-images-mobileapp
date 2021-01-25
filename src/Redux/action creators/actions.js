
import mountains from "../Reducer/mountains.jpg";
import myPicture from "../Reducer/picture.png";
import beach from "../Reducer/beach.jpg";



let fakeData = [ { name :"elmehdi", src: require( "../Reducer/picture.png" ) } , { name : "lacey" , src: require( "../Reducer/mountains.jpg" ) } , { name :"mark", src: require( "../Reducer/beach.jpg") } ];



export let fetch = ( ) => {

return { type : "fetch data" , payload : fakeData  };


}



