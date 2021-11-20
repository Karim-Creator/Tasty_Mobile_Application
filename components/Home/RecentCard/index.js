import React, { Component } from 'react';
import { Text,Grid, Card, Icon } from 'native-base';
import { StyleSheet, View,ImageBackground  } from 'react-native';



export default class RecentCard extends Component{
    render(){
        return (


                <View>

                    {/* Recent Food */}
                    <Text style={styles.titleStyles}>Recently Added</Text>

                    <Grid style={styles.moviesGridStyle}>
                        <Card style={{width:'50%',height: 200,backgroundColor:'#f3f3f3',elevation: 0}}>
                                <ImageBackground source={require('../../../assets/Images/HomeRecentCard/smoothie.jpeg')} imageStyle={{borderRadius: 20}} resizeMode="cover" style={{width:'100%',height:'100%',borderRadius: 20}}>
                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'baseline'}}>
                                    <Text style={{color:'#fff', fontFamily:'Satisfy_regular',fontSize: 20,paddingLeft: 10}}>Mango Smoothie</Text>

                                    <View style={{flexDirection: 'row',paddingLeft: 10}}>

                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    </View>
                                    <Text style={{color:'#fff',fontSize: 15,paddingLeft: 10,fontFamily:'Satisfy_regular',paddingTop: 5}}>15 DH</Text>

                                </View>
                                </ImageBackground>
                        </Card>
                        <Card style={{width:'50%',height: 200,backgroundColor:'#f3f3f3',elevation: 0}}>
                                <ImageBackground source={require('../../../assets/Images/HomeRecentCard/flurry.jpg')} imageStyle={{borderRadius: 20}} resizeMode="cover" style={{width:'100%',height:'100%',borderRadius: 20}}>
                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'baseline'}}>
                                    <Text style={{color:'#fff', fontFamily:'Satisfy_regular',fontSize: 20,paddingLeft: 10}}>MCflurry</Text>

                                    <View style={{flexDirection: 'row',paddingLeft: 10}}>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star-half" style={{fontSize: 15,color:'gold'}}/>
                                    </View>
                                    <Text style={{color:'#fff',fontSize: 15,paddingLeft: 10,fontFamily:'Satisfy_regular',paddingTop: 5}}>22 DH</Text>
                                    
                                </View>
                                </ImageBackground>
                        </Card>
                        
                    </Grid>
                    <Grid style={styles.moviesGridStyle}>
                        <Card style={{width:'50%',height: 200,backgroundColor:'#f3f3f3',elevation: 0}}>
                                <ImageBackground source={require('../../../assets/Images/HomeRecentCard/cheesecake.jpg')} imageStyle={{borderRadius: 20}} resizeMode="cover" style={{width:'100%',height:'100%',borderRadius: 20}}>

                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'baseline'}}>
                                    <Text style={{color:'#fff', fontFamily:'Satisfy_regular',fontSize: 20,paddingLeft: 10}}>Cheese Cake</Text>

                                    <View style={{flexDirection: 'row',paddingLeft: 10}}>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star-outline" style={{fontSize: 15,color:'gold'}}/>
                                    </View>
                                    <Text style={{color:'#fff',fontSize: 15,paddingLeft: 10,fontFamily:'Satisfy_regular',paddingTop: 5}}>18 DH</Text>
                                    
                                </View>
                                </ImageBackground>
                        </Card>

                        <Card style={{width:'50%',height: 200,backgroundColor:'#f3f3f3',elevation: 0}}>
                                <ImageBackground source={require('../../../assets/Images/HomeRecentCard/strawberry.jpg')} imageStyle={{borderRadius: 20}} resizeMode="cover" style={{width:'100%',height:'100%',borderRadius: 20}}>

                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'baseline'}}>
                                    <Text style={{color:'#fff', fontFamily:'Satisfy_regular',fontSize: 20,paddingLeft: 10}}>Strawberry Cake</Text>

                                    <View style={{flexDirection: 'row',paddingLeft: 10}}>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star" style={{fontSize: 15,color:'gold'}}/>
                                    <Icon name="star-half" style={{fontSize: 15,color:'gold'}}/>
                                    </View>
                                    <Text style={{color:'#fff',fontSize: 15,paddingLeft: 10,fontFamily:'Satisfy_regular',paddingTop: 5}}>15 DH</Text>
                                    
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

