import 'react-native-gesture-handler';
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import MyImages from "./src/screens/MyImages";
import {Provider} from "react-redux";
import {createStore} from "redux";
import Reducer from "./src/Redux/Reducer";
import * as actions from "./src/Redux/action creators/actions";




const Stack = createStackNavigator();


function Root() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }}>
      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyImages" component={MyImages} />
   
   </Stack.Navigator>
  );
}


let drawers = () => {
    
  const Drawer = createDrawerNavigator();



return (

  <Provider store={ createStore(Reducer)} >
      
    <NavigationContainer> 
          <Drawer.Navigator openByDefault drawerType= {"front"} drawerPosition="left">
          <Drawer.Screen name="All images" component= {Root}/>
          <Drawer.Screen name="My images" component= {MyImages} />
          </Drawer.Navigator>
    </NavigationContainer>
    
  </Provider>
 


)
};

export default drawers;