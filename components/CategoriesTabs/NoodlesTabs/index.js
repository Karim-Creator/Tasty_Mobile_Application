import React, { Component } from 'react';
import { View } from 'react-native';
import PopularNoodlesCard from './Popular';
import RecommendedNoodlesCard from './Recommended';
import RestaurantsCard from './Restaurants';



export default class NoodlesTab extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#f3f3f3' }}>
                <PopularNoodlesCard />
                <RecommendedNoodlesCard />
                <RestaurantsCard />
            </View>

        );
    }
}
