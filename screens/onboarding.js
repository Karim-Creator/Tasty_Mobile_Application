import React, { Component } from 'react';
import OnBoarding from '../components/OnBoarding';


export default class OnBoardingScreen extends Component {
    render()
    {
      return (
            <OnBoarding navigation={this.props.navigation}/>
      );
    }
}

