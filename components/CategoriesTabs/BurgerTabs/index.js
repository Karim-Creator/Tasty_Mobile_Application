import React, { Component } from 'react';
import { View } from 'react-native';
import PopularBurgersCard from './Popular/index'
import RecommendedBurgersCard from './Recommended';
import RestaurantsCard from './Restaurants';



export default class BurgerTab extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#f3f3f3'}}>
                <PopularBurgersCard />
                <RecommendedBurgersCard navigation={this.props.navigation}/>
                <RestaurantsCard />
            </View>  
        );
    }
}


