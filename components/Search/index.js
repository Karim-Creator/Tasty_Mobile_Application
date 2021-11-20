import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text, View } from 'native-base';

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.viewStyles}>
        <Header searchBar style={styles.headerStyles}>
        <StatusBar barStyle="light-content" backgroundColor="#FF8421"/>
          <Item style={{borderRadius: 10}}>
            <Icon name="fast-food" style={{fontSize: 25}}/>
            <Input placeholder="Find Food or Restaurent" style={{fontFamily: 'Satisfy_regular',fontSize: 20,paddingTop: 5}}/>
            <Icon name="ios-search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewStyles:{
        left: 0,
        right: 0,
        top: 50,
        position:'absolute',
        backgroundColor:'#FF8421',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10
    },

    headerStyles: {
        backgroundColor:'#FF8421',
        elevation: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
})