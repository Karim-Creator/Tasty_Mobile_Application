import React, { Component } from 'react';
import { View } from 'react-native';
import CartCard from '../components/Cart';
import CartHeaderBar from '../components/Cart/Header';


export default class CartScreen extends Component {
        render()
        {
          return (
            <View>
              <CartHeaderBar navigation={this.props.navigation}/>
              <CartCard />
            </View>
          );
        }
}

