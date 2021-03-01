import React, { Component } from 'react';
import { View , Text , StyleSheet , Image , FlatList  } from "react-native";
import { connect } from 'react-redux';
import * as actions from "../Redux/action creators/actions";
import { FontAwesome } from '@expo/vector-icons';
import { Icon ,Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import {Dimensions} from "react-native";
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';




let list = [];

class MyImages extends Component {
  
    
    constructor(props) {
    
        super(props);

        this.state = {
               
            image : null,
            clicked : false,
            index : null,
            imageAdded: false,
            
                       
                       }
        
                      }


    componentDidMount() {
    
       
       
                         }




 takePhoto = async () => {
       
        async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        };
      
       
    
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if ( !result.cancelled ) {
          
          
          this.props.addImage( result.uri );
          this.setState( {imageAdded: true })
        
          this.setState({ clicked : false });
        
        }
    
      };


    pickImage = async () => {
       
        async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        };
      
       
    
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if ( !result.cancelled ) { 
          
          
          this.props.addImage( result.uri );
          
          this.setState( {imageAdded: true })
          
          this.setState({ clicked : false });
        
        
        }
    
     };

     

      
    
             
     
      
    
    render() {
          
      
         console.log( this.state.image )


         let imageView = <View style={  styles.imageContainer } > 
                   
                   <View style = {  styles.imageView  } >   
                      <Button
                            title="Gallery"
                            type="clear"
                            onPress = { () => { this.pickImage() } }
                            buttonStyle = { {  color: "black" , alignItems : "flex-start"  } }
                      />           
       
                      <Button
                          title="Camera"
                          type="clear"
                          onPress = { () => { this.takePhoto() } }
                          buttonStyle = { {  color: "black" , alignItems : 'flex-end'  }}
                      />
                  
                  </View>                            
                      
                      </View>



            let ImagesArray = this.props.state.data;
          
           
            let myImages = [];
           

            ImagesArray.map( item => { 

               
              
              if ( item.name === 'elmehdi' ) {

                 myImages.push( { id : item.id , image : item.image } )
                
                } 
              
              
              });

              console.log(myImages);
            
         
        return (
            
            <View style={ styles.container }>

               
              
               {  this.state.clicked  ?  imageView  :  <View styles={ styles.secondContainer }> 
                 
              
                 < Icon iconStyle={ { marginTop: 34 , marginRight: 270 , marginBottom : 80 } } name='camera' type='font-awesome' color='white' onPress = { ( ) => {  this.setState({ clicked : true })  }  } /> 
            
              { this.state.imageAdded ? <View style={{ justifyContent : "center" }}>< FlatList removeClippedSubviews={ false } horizontal={false}  numColumns = {3} keyExtractor={ item => item.id } data= { myImages }  columnWrapperStyle= {{ justifyContent : "flex-start" }}  renderItem = { ( { item } ) => {
              
                    if ( typeof item.image === "string" ) {

                          return (  <View style= { styles.imageContainer } > 
                                  <Image
                                  style={styles.gallery}
                                  source={{  uri : item.image }}
                                  /> 
                                </View>)
                   } else {
                        return ( 
                                <View style= { styles.imageContainer } > 
                                    <Image
                                      style={styles.gallery}
                                      source={ item.image }
                                      /> 
                                </View>
                            ) } } } /></View> : <View style= { styles.imageContainer } > 
                                                    <Image
                                                        style={styles.gallery}
                                                        source={ myImages[0].image }
                                                    /> 
                                                  </View> } 

            
            </View> }   

            </View>


         
           
          

          
            
            
           
           );
    }
}

const mapStateToprops = ( state ) => {

  return { state : state.fetchItems };

}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        alignItems : "center",
        backgroundColor : "#232946"
        
                
                 },
        secondContainer : {
            
            flex: 1
            
            },
        image : { 
            width: 200,
            height: 200,
            marginTop : 100,
            marginLeft : 20
        },
        camera : {
            
            width: 200,
            marginTop: 60,
            height: 60,
            marginBottom:49
           
          } ,
          imageContainer: {
           



          },
      gallery : {
          
        width: 110,
        height: 110 ,
        marginRight : 3
        
        }
        });



export default  connect( mapStateToprops, actions )(MyImages);