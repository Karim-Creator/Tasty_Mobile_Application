import React, { Component } from 'react';
import { Text, Grid, Card, Icon, } from 'native-base';
import { StyleSheet, View, ImageBackground } from 'react-native';


export default class PopularBurgersCard extends Component {
    render() {
        return (
            <View>
                {/* Recent Food */}
                <Text style={styles.titleStyles}>Popular Near You</Text>

                <Grid style={styles.gridStyle}>

                    <Card style={{ width: '50%', height: 200, backgroundColor: '#f3f3f3', elevation: 0, paddingBottom: 30, marginBottom: 10 }}>
                        <ImageBackground source={require('../../../../assets/Images/Categories/Burgers/Popular/burger.png')} imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }} resizeMode="cover" style={{ width: '100%', height: '100%', borderRadius: 20 }}></ImageBackground>
                        <View style={{ backgroundColor: '#cacaca', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <Text style={{ color: '#000', fontFamily: 'Satisfy_regular', fontSize: 20, paddingLeft: 10 }}>Double Beef Burger</Text>
                            <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star-half" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Text style={{ color: '#FF8421', fontSize: 15, paddingLeft: 10, fontFamily: 'Satisfy_regular', }}>4.5</Text>
                            </View>
                        </View>
                    </Card>

                    <Card style={{ width: '50%', height: 200, backgroundColor: '#f3f3f3', elevation: 0, paddingBottom: 30, marginBottom: 10 }}>
                        <ImageBackground source={require('../../../../assets/Images/Categories/Burgers/Popular/burger2.jpg')} imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }} resizeMode="cover" style={{ width: '100%', height: '100%', borderRadius: 20 }}></ImageBackground>
                        <View style={{ backgroundColor: '#cacaca', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <Text style={{ color: '#000', fontFamily: 'Satisfy_regular', fontSize: 20, paddingLeft: 10 }}>Hot Burger</Text>
                            <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star-half" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star-outline" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Text style={{ color: '#FF8421', fontSize: 15, paddingLeft: 10, fontFamily: 'Satisfy_regular', }}>3.5</Text>
                            </View>
                        </View>
                    </Card>

                </Grid>
                <Grid style={styles.gridStyle}>
                    <Card style={{ width: '50%', height: 200, backgroundColor: '#f3f3f3', elevation: 0, paddingBottom: 30, marginBottom: 10 }}>
                        <ImageBackground source={require('../../../../assets/Images/Categories/Burgers/Popular/burger3.jpg')} imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }} resizeMode="cover" style={{ width: '100%', height: '100%', borderRadius: 20 }}></ImageBackground>
                        <View style={{ backgroundColor: '#cacaca', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <Text style={{ color: '#000', fontFamily: 'Satisfy_regular', fontSize: 20, paddingLeft: 10 }}>Cheese Burger</Text>
                            <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star-half" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Text style={{ color: '#FF8421', fontSize: 15, paddingLeft: 10, fontFamily: 'Satisfy_regular', }}>4.5</Text>
                            </View>
                        </View>
                    </Card>

                    <Card style={{ width: '50%', height: 200, backgroundColor: '#f3f3f3', elevation: 0, paddingBottom: 30, marginBottom: 10 }}>
                        <ImageBackground source={require('../../../../assets/Images/Categories/Burgers/Popular/burger4.jpg')} imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }} resizeMode="cover" style={{ width: '100%', height: '100%', borderRadius: 20 }}></ImageBackground>
                        <View style={{ backgroundColor: '#cacaca', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <Text style={{ color: '#000', fontFamily: 'Satisfy_regular', fontSize: 20, paddingLeft: 10 }}>Beef & Egg Burger</Text>
                            <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Icon name="star-outline" style={{ fontSize: 15, color: '#FF8421' }} />
                                <Text style={{ color: '#FF8421', fontSize: 15, paddingLeft: 10, fontFamily: 'Satisfy_regular', }}>4.0</Text>
                            </View>
                        </View>
                    </Card>

                </Grid>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    gridStyle: {
        padding: 15,
    },

    titleStyles: {
        marginLeft: 20,
        color: '#FF8421',
        fontSize: 25,
        fontFamily: 'Satisfy_regular',
        marginTop: 10,
    },


})
