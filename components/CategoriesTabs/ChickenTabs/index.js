import React, { Component } from 'react';
import { View } from 'react-native';
import PopularChickenCard from './Popular';
import RecommendedChickenCard from './Recommended';
import RestaurantsCard from './Restaurants';

export default class ChickenTab extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#f3f3f3'}}>
                    <PopularChickenCard />
                    <RecommendedChickenCard />
                    <RestaurantsCard />
            </View>

        );
    }
}
