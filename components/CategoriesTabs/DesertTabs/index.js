import React, { Component } from 'react';
import { View } from 'react-native';
import PopularDesertCard from './Popular';
import RecommendedDesertCard from './Recommended';
import RestaurantsCard from './Restaurants';


export default class DesertTab extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#f3f3f3' }}>
                    <PopularDesertCard />
                    <RecommendedDesertCard />
                    <RestaurantsCard />
            </View>

        );
    }
}
