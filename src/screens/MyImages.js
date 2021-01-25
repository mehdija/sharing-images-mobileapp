import React, { Component } from 'react';
import { View , Text , StyleSheet , Image , FlatList , Button  } from "react-native";
import { connect } from 'react-redux';
import * as actions from "../Redux/action creators/actions";
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';




class MyImages extends Component {
  
    
    constructor(props) {
    
        super(props);

    }

   
   

    
    
    
    render() {
          
     
         console.log(this.props.state)
        
        return (
            
            <View styles={ styles.container }>

               <View styles={ styles.secondContainer }> 
                 
                <Icon iconStyle={{ marginTop: 34 , marginRight: 270 }} name='camera' type='font-awesome' color='black' />
                
                </View>
              
               <View styles={ styles.gallery }> 
                  <Image
                       style={ styles.image }
                       source={ this.props.state.data[0].src }
                 />              
        </View> 
            </View>
            
            
           
           );
    }
}

const mapStateToProps = ( state ) => {

    return { state : state.fetchItems};
 
 }

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
                 
            },
        secondContainer : {
            
            flex: 1
            
          },
          gallery : {
            flex: 1

          },
        image : { 
            width: 130,
            height: 130,
            marginTop : 100,
            marginLeft : 20
        },
        camera : {

            width: 200,
            marginTop: 60,
            height: 60,
            marginBottom:49
        }
});



export default connect( mapStateToProps , actions ) ( MyImages );