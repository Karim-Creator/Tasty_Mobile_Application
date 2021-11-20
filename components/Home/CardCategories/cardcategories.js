import React, { Component } from 'react';
import { Text,Grid,Col, } from 'native-base';
import { StyleSheet, View,Image, TouchableOpacity  } from 'react-native';



export default class HomeCardCategories extends Component{
    render(){
        return (
                <View style={{left:0, right: 0,top: 80}}>

                    {/* Explore Categorie*/}
                    <Text style={styles.titleStyles}>Explore Categories</Text>
                    <Grid style={styles.GridStyle}>
                        <TouchableOpacity style={styles.columnStyles}
                        onPress={() => this.props.navigation.navigate('Categories')}
                        >
                            <Image source={require('../../../assets/Icons/HomeCategories/burger.png')} style={{width:'100%',height:'100%',resizeMode:'contain'}}/>
                            <Text style={styles.imageTextStyle}>Burger</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.columnStyles}
                        onPress={() => this.props.navigation.navigate('Categories')}
                        >
                            <Image source={require('../../../assets/Icons/HomeCategories/desert.png')} style={{width:'100%',height:'100%',resizeMode: 'contain'}}/>
                            <Text style={styles.imageTextStyle}>Desert</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.columnStyles}
                        onPress={() => this.props.navigation.navigate('Categories')}
                        >
                            <Image source={require('../../../assets/Icons/HomeCategories/drinks.png')} style={{width:'100%',height:'100%',resizeMode: 'contain'}}/>
                            <Text style={styles.imageTextStyle}>Drinks</Text>
                        </TouchableOpacity>

                    </Grid>
                    <Grid style={styles.GridStyle}>
                        <TouchableOpacity style={styles.columnStyles}
                        onPress={() => this.props.navigation.navigate('Categories')}
                        >
                            <Image source={require('../../../assets/Icons/HomeCategories/pizza.png')} style={{width:'100%',height:'100%',resizeMode:'contain'}}/>
                            <Text style={styles.imageTextStyle}>Pizza</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.columnStyles}
                        onPress={() => this.props.navigation.navigate('Categories')}
                        >
                            <Image source={require('../../../assets/Icons/HomeCategories/noodles.png')} style={{width:'100%',height:'100%',resizeMode: 'contain'}}/>
                            <Text style={styles.imageTextStyle}>Noodles</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.columnStyles}
                        onPress={() => this.props.navigation.navigate('Categories')}
                        >
                            <Image source={require('../../../assets/Icons/HomeCategories/chicken.png')} style={{width:'100%',height:'100%',resizeMode: 'contain'}}/>
                            <Text style={styles.imageTextStyle}>Chicken</Text>
                        </TouchableOpacity>
                    </Grid>
                </View>
            
        );
    }
}

const styles = StyleSheet.create({

    GridStyle: {
        paddingTop: 10,
        paddingLeft: 15,
        justifyContent:'space-around',
        alignSelf: 'stretch',
    },

    titleStyles:{
        marginLeft: 20,
        color: '#FF8421',
        fontSize: 25,
        fontFamily: 'Satisfy_regular'
    },
    
    imageTextStyle:{
        color:'#000',
        fontSize: 18,
        fontFamily:'Satisfy_regular',
        paddingBottom: 10,
        alignSelf:'center',
    },

    columnStyles: {
        backgroundColor: '#dadada',
        height: 110,
        width: 100,
        marginRight: 10,
        padding: 20,
        borderRadius: 20,
    }

})

