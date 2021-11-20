import React, { Component } from 'react';
import { Text,Grid, Card, Icon } from 'native-base';
import { StyleSheet, View,ImageBackground  } from 'react-native';



export default class PopularFoodCard extends Component{
    render(){
        return (


                <View>

                    {/* Popular Food */}
                    <Text style={styles.titleStyles}>Popular</Text>

                    <Grid style={styles.moviesGridStyle}>
                        <Card style={{width:'50%',height: 200,backgroundColor:'#f3f3f3',elevation: 0}}>
                                <ImageBackground source={require('../../../assets/Images/HomePopularCard/burger.jpg')} imageStyle={{borderRadius: 20}} resizeMode="cover" style={{width:'100%',height:'100%',borderRadius: 20}}>
                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'baseline'}}>
                                    <Text style={{color:'#fff', fontFamily:'Satisfy_regular',fontSize: 20,paddingLeft: 10}}>Double Cheese Burger</Text>

                                    <View style={{flexDirection: 'row',paddingLeft: 10}}>

                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star-half" style={{fontSize: 15,color:'gold'}}/>
                                    </View>
                                    <Text style={{color:'#fff',fontSize: 15,paddingLeft: 10,fontFamily:'Satisfy_regular',paddingTop: 5}}>60 DH</Text>

                                </View>
                                </ImageBackground>
                        </Card>
                        <Card style={{width:'50%',height: 200,backgroundColor:'#f3f3f3',elevation: 0}}>
                                <ImageBackground source={require('../../../assets/Images/HomePopularCard/pizza.jpg')} imageStyle={{borderRadius: 20}} resizeMode="cover" style={{width:'100%',height:'100%',borderRadius: 20}}>
                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'baseline'}}>
                                    <Text style={{color:'#fff', fontFamily:'Satisfy_regular',fontSize: 20,paddingLeft: 10}}>Vegetarian Pizza</Text>

                                    <View style={{flexDirection: 'row',paddingLeft: 10}}>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star-half" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star-outline" style={{fontSize: 15,color:'gold'}}/>
                                    </View>
                                    <Text style={{color:'#fff',fontSize: 15,paddingLeft: 10,fontFamily:'Satisfy_regular',paddingTop: 5}}>75 DH</Text>
                                    
                                </View>
                                </ImageBackground>
                        </Card>
                        
                    </Grid>
                    <Grid style={styles.moviesGridStyle}>
                        <Card style={{width:'50%',height: 200,backgroundColor:'#f3f3f3',elevation: 0}}>
                                <ImageBackground source={require('../../../assets/Images/HomePopularCard/spaghetti.jpg')} imageStyle={{borderRadius: 20}} resizeMode="cover" style={{width:'100%',height:'100%',borderRadius: 20}}>

                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'baseline'}}>
                                    <Text style={{color:'#fff', fontFamily:'Satisfy_regular',fontSize: 20,paddingLeft: 10}}>Spaghetti</Text>

                                    <View style={{flexDirection: 'row',paddingLeft: 10}}>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star-outline" style={{fontSize: 15,color:'gold'}}/>
                                    </View>
                                    <Text style={{color:'#fff',fontSize: 15,paddingLeft: 10,fontFamily:'Satisfy_regular',paddingTop: 5}}>35 DH</Text>
                                    
                                </View>
                                </ImageBackground>
                        </Card>

                        <Card style={{width:'50%',height: 200,backgroundColor:'#f3f3f3',elevation: 0}}>
                                <ImageBackground source={require('../../../assets/Images/HomePopularCard/nuggets.jpg')} imageStyle={{borderRadius: 20}} resizeMode="cover" style={{width:'100%',height:'100%',borderRadius: 20}}>

                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'baseline'}}>
                                    <Text style={{color:'#fff', fontFamily:'Satisfy_regular',fontSize: 20,paddingLeft: 10}}>Chicken Nuggets</Text>

                                    <View style={{flexDirection: 'row',paddingLeft: 10}}>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    </View>
                                    <Text style={{color:'#fff',fontSize: 15,paddingLeft: 10,fontFamily:'Satisfy_regular',paddingTop: 5}}>25 DH</Text>
                                    
                                </View>
                                </ImageBackground>
                        </Card>
                        
                    </Grid>
                </View>
        );
    }
}

const styles = StyleSheet.create({

    moviesGridStyle: {
        padding: 15,
        marginRight: 10
    },

    lastMoviesGridStyle: {
        padding: 5,
        marginTop: 10,
        marginBottom: 40
    },

    titleStyles:{
        marginLeft: 20,
        color: '#FF8421',
        fontSize: 25,
        fontFamily:'Satisfy_regular'
    },
    

})

