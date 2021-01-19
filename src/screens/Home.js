import React, { Component } from 'react';
import {View,Text,StyleSheet,Image, FlatList } from "react-native";
import {connect} from "react-redux";
import * as actions from "../Redux/action creators/actions";



 class Home extends Component {
   
     constructor(props) {

       super(props);

                        
                         }
    
      componentDidMount( ){

       this.props.fetch();
      
      }
   
   
   render() {

        console.log( this.props.state.data );
        
    
        
        return (
            <View style={styles.container}> 
              
              <View style={styles.secondContainer}>
               
                <FlatList removeClippedSubviews={ false } keyExtractor={ item => item.name } data= { this.props.state.data }  renderItem = { ( { item } ) => {
          return ( 
             <View>
                  <View style= { styles.MainView } > 
                      
                     <Text style={styles.text}>{item.name}</Text>
                     <Image
                       style={styles.profileImage}
                       source={item.src}
                     /> 

                   </View>

                <View style= { styles.MainView } > 

                <Image
                       style={styles.image}
                       source={item.src}
                     /> 
 

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
        flex: 1
                },
      secondContainer:{
        flex : 1
      },
      MainView: {
        flex : 1,
        flexDirection : "row" 
                },
    text :{
    color : "black",
    fontFamily:"Roboto",
    marginTop: 12,
    marginLeft : 15
          },
    profileImage : {
     borderRadius : 100,
     width: 50,
     height: 50
     }
    ,
    image : { 
      width: 320,
      height: 320,
      marginLeft : 15 
       
            }
    
            });

export default connect( mapStateToprops, actions )( Home );
