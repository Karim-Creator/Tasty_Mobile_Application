import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Font from "expo-font";
import HomeScreen from './screens/index';
import SplashScreen from './screens/splash';
import CartScreen from './screens/cart';
import CategoriesScreen from './screens/categories';
import ReviewDetailsScreen from './screens/reviewDetails';
import { DrawerContent } from './screens/drawer'
import OnBoardingScreen from './screens/onboarding';
//Remove To See The warnings
import { LogBox } from 'react-native';

// Ignore all log notifications:
LogBox.ignoreAllLogs();




//Navigate Through Screens & Open/Close Drawer
const Drawer = createDrawerNavigator();

export default class App extends React.Component {


  constructor(props){
    super(props);
    this.state = {
        //Set The Timer To False
        timePassed: false,
        //Set Fonts To False
        fontLoaded: true,
    };
  }

  //Use The "Unsafe" ComponentWillMount To Add Fonts && "Unsafe" To Avoid a Warning
  async UNSAFE_componentWillMount() {
    //Load Fonts Using LoadAsync
    await Font.loadAsync({
      "Roboto_medium": require('./assets/Fonts/Roboto-Medium.ttf'),
      "Satisfy_regular": require('./assets/Fonts/Satisfy-Regular.ttf'),
    });
    this.setState({ fontLoaded: false });
  }


  async componentDidMount() {
    //Set A Timer For SplashScreen
    setTimeout( () => {
      this.setTimePassed();
    },2500);
  }

  setTimePassed() {
    this.setState({timePassed: true});
  }

  render()
  {
  
    if(!this.state.timePassed)
    {
      return(
        //Show SplashScreen
        <SplashScreen />
      ) 
    }
    else{
      return (
        <NavigationContainer>
            <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            //Hide Navigation Header
            screenOptions={{
              headerShown: false,
            }}
            >
    
            {/* OnBoarding Screen */}
            <Drawer.Screen
                name="Boarding"
                component={OnBoardingScreen}
              />

            {/* Navigate To Home Screen */}
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
              />
    
            {/* Navigate To Account Screen */}
            <Drawer.Screen
                name="Cart"
                component={CartScreen}
              />

            {/* Navigate To Categories Screen */}
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
              />

            {/* Navigate To Review Details Screen */}
            <Drawer.Screen
                name="Details"
                component={ReviewDetailsScreen}
              />
    
            </Drawer.Navigator>
        </NavigationContainer>
      );
    }
  }

}

