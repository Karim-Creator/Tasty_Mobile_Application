import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class HeaderBar extends Component {
  render() {

    return (
      <View>
        <SafeAreaView style={{backgroundColor:'red'}}>
          
        <Header style={{backgroundColor:'#FF8421'}}>
        <StatusBar barStyle="light-content" backgroundColor="#FF8421"/>
          <Left style={{flex: 1}}>
            <Button transparent
            onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name='person' style={{fontSize: 30}}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleStyles}>Tasty</Title>
          </Body>
          <Right>
            <Button transparent
            onPress={() => this.props.navigation.navigate('Cart')}
            >
              <Icon name='cart' style={{fontSize: 30}}/>
            </Button>
          </Right>
        </Header>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    titleStyles: {
        alignSelf:'center',
        fontSize: 30,
        fontFamily: 'Satisfy_regular'
    }
})