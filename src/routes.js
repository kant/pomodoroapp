import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  TransitionSpecs,
  TransitionPresets,
} from "@react-navigation/stack";
// import { DrawerItem, DrawerContent, createDrawerNavigator } from "@react-navigation/drawer";
//import { NavigationContainer } from "@react-navigation/native";

const AppStack = createStackNavigator();


import Schedule from "./pages/Schedule";
import Todolist from "./pages/TodoList";
import Welcome from "./pages/Welcome";
import Timer from "./pages/Timer";
import Congrats from "./pages/Congrats";
import Progress from "./pages/Progress";
// import NavBar from "./pages/Navbar"


// const Drawer = createDrawerNavigator


function Routes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open:
            Platform.OS === "ios"
              ? TransitionSpecs.TransitionIOSSpec
              : TransitionSpecs.FadeInFromBottomAndroidSpec,
          close:
            Platform.OS === "ios"
              ? TransitionSpecs.TransitionIOSSpec
              : TransitionSpecs.FadeOutToBottomAndroidSpec,
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
     
      
      
      
      <AppStack.Screen name="Welcome" component={Welcome} />
      <AppStack.Screen name="Timer" component={Timer} />
      <AppStack.Screen name="Congrats" component={Congrats} />
      <AppStack.Screen name="Schedule" component={Schedule} />
      <AppStack.Screen name="Todolist" component={Todolist} />
      <AppStack.Screen name="Progress" component={Progress} />
      {/* <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Register" component={Register} /> */}
      
      


    </AppStack.Navigator>
  );
}

export default Routes;
