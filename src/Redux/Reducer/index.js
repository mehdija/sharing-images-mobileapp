import {combineReducers} from "redux";
import  {fetchItems} from "./fetchItems";

 

export default  combineReducers ( { fetchItems: fetchItems } );

