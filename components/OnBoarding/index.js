import { Container } from 'native-base';
import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default class OnBoarding extends Component {
        render()
        {
          return (
              <Container style={{backgroundColor:'#fff'}}>
                  <StatusBar barStyle="light-content" backgroundColor="#FF8421"/>

                  <View style={{width: '100%', justifyContent:'center', alignItems:'center', top: 40}}>
                  <Image source={require('../../assets/Logo/logo.png')} style={{height: 130}}/>
                  </View>

                <View style={{position: 'absolute',bottom: 0,right: 0, left: 0, top: 30}}>

                  <Onboarding
                  pages={[
                      {
                      image: <Image source={require('../../assets/Images/OnBoarding/choose.png')} style={{height: 250,width: '100%', resizeMode:'contain'}}/>,
                      title: 'Choose Your Meal',
                      subtitle: 'We make it simple to find the food you crave, enter your address and let us do the rest.',
                      titleStyles: styles.titleStyles,
                      subTitleStyles: styles.subTitleStyles,
                      color: 'blue',
                      backgroundColor:'transparent'
                      },
                      {
                      image: <Image source={require('../../assets/Images/OnBoarding/payment.png')} style={{height: 300, width: '100%', resizeMode:'contain' }}/>,
                      title: 'Easy Payment',
                      subtitle: 'we make food ordering fase, simple and free - no matter if you order online or cash.',
                      titleStyles: styles.titleStyles,
                      subTitleStyles: styles.subTitleStyles,
                      backgroundColor:'transparent'
                      },
                      {
                      image: <Image source={require('../../assets/Images/OnBoarding/deliver.png')} style={{height: 300, width: '100%', resizeMode:'contain' }}/>,
                      title: 'Fast Delivery',
                      subtitle: 'When you order eat street, we will hook you up with exclusive coupons, specials and rewards.',
                      titleStyles: styles.titleStyles,
                      subTitleStyles: styles.subTitleStyles,
                      backgroundColor:'transparent'
                      },
                      {
                      image: <Image source={require('../../assets/Images/OnBoarding/eat.png')} style={{height: 300, width: '100%', resizeMode:'contain' }}/>,
                      title: 'Enjoy Great Food',
                      subtitle: 'Nothing is better than enjoying freshly cooked meal with loved ones.',
                      titleStyles: styles.titleStyles,
                      subTitleStyles: styles.subTitleStyles,
                      backgroundColor:'transparent'
                      },
                  ]}
                  bottomBarColor={'#FF8421'}
                  skipToPage={3}
                  onDone={() => this.props.navigation.navigate('Home')}
                  />
                </View>
                  
              </Container>
          );
        }
}

const styles = StyleSheet.create({
    titleStyles:{
        color: '#FF8421', 
        fontFamily:'Satisfy_regular',
        fontSize: 35
    },

    subTitleStyles:{
        color: 'black', 
        fontFamily:'Satisfy_regular',
        textTransform:'capitalize', 
        fontSize: 23, 
        paddingLeft: 10, 
        paddingRight: 10
    },
})
