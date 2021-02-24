import React, { Component } from 'react';
import { View,StyleSheet } from "react-native";
import { Icon  } from 'react-native-elements';


class Icons extends Component {

    
    constructor (props) {
        
        super(props);

        this.state = {
          
            isliked : false

        }
        
    
    }
    
    
    render() {
        return (
               <View style={styles.Icons} >  
                     
                     < Icon iconStyle={ { marginTop: 10 , marginLeft : 14  } } name='heart'  type='font-awesome'  solid = {true} color={  this.state.isliked ? 'red' : 'white' }  onPress = { ( ) => {  if ( this.state.isliked ) {  this.setState( {  isliked : false       } ) }
                     else { this.setState ( {  isliked : true   }    )    }    }
                       }   /> 
                     < Icon iconStyle={ { marginTop: 10 , marginLeft : 14  } } name='comment'  type='font-awesome'  solid = {true} color='white' /> 
                     < Icon iconStyle={ { marginTop: 10 , marginLeft : 14  } } name='share'  type='font-awesome'  solid = {true} color= "white"  /> 
                  
                </View> 
               );
            }
}

const styles = StyleSheet.create({

      Icons : {
          
         flexDirection : "row"
              
            }
            
            });


export default Icons;