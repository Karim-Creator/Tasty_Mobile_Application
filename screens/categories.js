import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import CategoriesTabs from '../components/CategoriesTabs';
import HeaderBar from '../components/Header';


export default class CategoriesScreen extends Component{
    render(){
        return (
        <ScrollView>
            <View>
              <HeaderBar navigation={this.props.navigation}/>
              <CategoriesTabs/>
            </View>
        </ScrollView>
        );
    }
}

