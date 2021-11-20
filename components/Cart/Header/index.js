import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class CartHeaderBar extends Component {
  render() {

    return (
      <View>
        <Header style={{backgroundColor:'#FF8421',borderBottomLeftRadius: 20,borderBottomRightRadius: 20}}>
        <StatusBar barStyle="light-content" backgroundColor="#FF8421"/>
          <Left style={{flex: 1}}>
            <Button transparent
            onPress={() => this.props.navigation.navigate('Home')}
            >
              <Icon name='chevron-back' style={{fontSize: 30}}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleStyles}>Your Orders</Title>
          </Body>
          <Right>
          </Right>
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    titleStyles: {
        alignSelf:'center',
        fontSize: 25,
        fontFamily: 'Satisfy_regular'
    }
})