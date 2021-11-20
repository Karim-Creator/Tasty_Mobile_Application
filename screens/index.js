import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import HeaderBar from '../components/Header';
import HomeCardCategories from '../components/Home/CardCategories/cardcategories';
import SearchBar from '../components/Search/index';
import HomeCategoriesCarousel from '../components/Home/Carousel/homecategoriescarousel'
import HomeRecommendedCard from '../components/Home/RecommendedCard';
import HomeDiscountsCarousel from '../components/Home/DiscountsCarousel/discountscarousel';
import PopularFoodCard from '../components/Home/PopularFood';
import RecentCard from '../components/Home/RecentCard';


export default class HomeScreen extends Component{
    render(){
        return (
        <ScrollView>
            <View>
              <HeaderBar navigation={this.props.navigation}/>
              <SearchBar />
              <HomeCardCategories navigation={this.props.navigation}/>
              <HomeCategoriesCarousel />
              <HomeRecommendedCard navigation={this.props.navigation}/>
              <HomeDiscountsCarousel />
              <PopularFoodCard />
              <RecentCard />
            </View>
        </ScrollView>
            
          
        );
    }
}

