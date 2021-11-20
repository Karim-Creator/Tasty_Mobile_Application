import React, { Component } from 'react';
import { View } from 'react-native';
import PopularDrinkCard from './Popular';
import RecommendedDrinksCard from './Recommended';
import RestaurantsCard from './Restaurants';

export default class ChickenTab extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#f3f3f3' }}>
                    <PopularDrinkCard />
                    <RecommendedDrinksCard />
                    <RestaurantsCard />
            </View>

        );
    }
}
