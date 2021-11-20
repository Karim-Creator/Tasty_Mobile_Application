import React, { Component } from 'react';
import { View } from 'react-native';
import PopularPizzaCard from './Popular';
import RecommendedPizzaCard from './Recommended';
import RestaurantsCard from './Restaurants';



export default class PizzaTab extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#f3f3f3' }}>
                    <PopularPizzaCard />
                    <RecommendedPizzaCard />
                    <RestaurantsCard />
            </View>

        );
    }
}
