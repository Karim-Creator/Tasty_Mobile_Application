import React, { Component } from 'react';
import { View,Image } from 'react-native'; 
import { Spinner } from 'native-base'


export default class SplashScreen extends Component {
    render(){
            return <View style={{flex: 1,backgroundColor:'#fffff',flexDirection:'column',justifyContent:'center'}}>
                <Image source={require('../assets/Logo/logo.png')} style={{alignSelf:'center',alignItems:'center',resizeMode:'contain'}} />
                <Spinner color='#FF8421' />
            </View>
    }
}