import React, { Component } from 'react';
import {View,Text,StyleSheet,Image, FlatList } from "react-native";
import {connect} from "react-redux";
import { Icon  } from 'react-native-elements';
import * as actions from "../Redux/action creators/actions";
import Icons from "../components/Icons";



 class Home extends Component {
   
     constructor(props) {

       super(props);

                        
                         }
    
      componentDidMount( ){

       this.props.fetch();
      
      }
   
   
   render() {

        
        console.log(this.props.state);
    
        
        return (
            <View style={styles.container}> 
              
              <View style={styles.secondContainer}>
               
                <FlatList removeClippedSubviews={ false } keyExtractor={ item => item.name } data= { this.props.state.data }  renderItem = { ( { item } ) => {
          return ( 
             <View>
                  <View style= { styles.MainView } > 
                  <Image
                       style={styles.profileImage}
                       source={item.src}
                     />  
                     <Text style={styles.text}>{item.name}</Text>
                    
                   

                   </View>

                <View style= { styles.MainView } > 

                
           { typeof item.image === "string" ?<View><Image style={styles.image} source={{ uri : item.image }}/><Icons/></View> : <View><Image style={styles.image} source={ item.image } /><Icons/></View> }    
               
               </View>
            </View>        
                   ) }} /> 
               
               </View>
            
            </View>
              )
    }
}


const mapStateToprops = ( state ) => {

   return { state : state.fetchItems };

}

const styles = StyleSheet.create({

    container:  {
        flex: 1 ,
        backgroundColor : "#232946"
                },
      secondContainer:{
        flex : 1
      },
      MainView: {
        flex : 1,
        flexDirection : "row" 
                },
    text :{
    color : "#b8c1ec",
    fontFamily:"Roboto",
    fontSize : 16 ,
    marginTop: 26,
    marginLeft : 15

    

          },
    profileImage : {
     borderRadius : 100,
     width: 50,
     height: 50,
     marginLeft : 20,
     marginBottom : 7,
     marginTop : 14


     }
    ,
    image : { 
      width: 320,
      height: 320,
      marginLeft : 15,
     
       },
      
       Icons : {
          
        flexDirection : "row"

              
           }
           });

export default connect( mapStateToprops, actions )( Home );
