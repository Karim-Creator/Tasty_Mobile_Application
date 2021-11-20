import React, { Component } from 'react';
import { Tab, Tabs, ScrollableTab } from 'native-base';
import BurgerTab from './BurgerTabs';
import PizzaTab from './PizzaTabs';
import DesertTab from './DesertTabs';
import ChickenTab from './ChickenTabs';
import DrinkTab from './DrinkTabs';
import NoodlesTabs from './NoodlesTabs';
import { View } from 'react-native';


export default class CategoriesTabs extends Component {
  render() {
    return (
      <View>
        <Tabs renderTabBar={()=> <ScrollableTab  style={{backgroundColor:'#FF8421'}}/>} tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab heading="Burgers" tabStyle={{backgroundColor:'#FF8421'}} activeTabStyle={{backgroundColor: '#FF8421'}} activeTextStyle={{color:'#fff',fontFamily:'Satisfy_regular'}} textStyle={{color:'#f3f3f3',fontFamily:'Satisfy_regular'}}>
            <BurgerTab />
          </Tab>
          <Tab heading="Pizza" tabStyle={{backgroundColor:'#FF8421'}} activeTabStyle={{backgroundColor: '#FF8421'}} activeTextStyle={{color:'#fff',fontFamily:'Satisfy_regular'}} textStyle={{color:'#f3f3f3',fontFamily:'Satisfy_regular'}}>
            <PizzaTab />
          </Tab>
          <Tab heading="Desert" tabStyle={{backgroundColor:'#FF8421'}} activeTabStyle={{backgroundColor: '#FF8421'}} activeTextStyle={{color:'#fff',fontFamily:'Satisfy_regular'}} textStyle={{color:'#f3f3f3',fontFamily:'Satisfy_regular'}}>
            <DesertTab />
          </Tab>
          <Tab heading="Chicken" tabStyle={{backgroundColor:'#FF8421'}} activeTabStyle={{backgroundColor: '#FF8421'}} activeTextStyle={{color:'#fff',fontFamily:'Satisfy_regular'}} textStyle={{color:'#f3f3f3',fontFamily:'Satisfy_regular'}}>
            <ChickenTab />
          </Tab>
          <Tab heading="Drinks" tabStyle={{backgroundColor:'#FF8421'}} activeTabStyle={{backgroundColor: '#FF8421'}} activeTextStyle={{color:'#fff',fontFamily:'Satisfy_regular'}} textStyle={{color:'#f3f3f3',fontFamily:'Satisfy_regular'}}>
            <DrinkTab />
          </Tab>
          <Tab heading="Noodles" tabStyle={{backgroundColor:'#FF8421'}} activeTabStyle={{backgroundColor: '#FF8421'}} activeTextStyle={{color:'#fff',fontFamily:'Satisfy_regular'}} textStyle={{color:'#f3f3f3',fontFamily:'Satisfy_regular'}}>
            <NoodlesTabs />
          </Tab>
        </Tabs>
      </View>
    );
  }
}