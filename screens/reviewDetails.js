import { Button, Icon } from 'native-base';
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';


export default function ReviewDetailsScreen ({ route, navigation }){
    const { Title, image, Ingredients, Restaurant, Ratings, Price } = route.params;
    return(
        <View>

            {/* <StatusBar translucent backgroundColor="transparent"/> */}
        
            {/* Back Ground Image */}
            <ImageBackground imageStyle={{borderBottomLeftRadius: 20,borderBottomRightRadius: 20}} resizeMode={'stretch'} style={{width: '100%', height: 250}} source={JSON.stringify(image)}>
                    <Icon name="chevron-back" style={{color:'#FF8421',fontSize: 50,paddingTop: 25,paddingLeft: 5}}
                    onPress={() => navigation.navigate('Home')}
                    />
            </ImageBackground>

            {/* Item Title */}
            <Text style={{color:'#000',fontSize: 35,fontFamily:'Satisfy_regular', paddingTop: 25, paddingLeft: 10, textAlign:'center'}}>{Title}</Text>

            {/* Restaurant & Ratings */}
            <View style={{flexDirection:'row',justifyContent:'space-between',padding: 10, marginTop: 10}}>
                <Text style={{color:'#FF8421',fontSize: 20,fontFamily:'Satisfy_regular', paddingLeft: 10}}>{Restaurant}</Text>
                <Icon name="star" style={{color:'#FF8421',fontSize: 20}}>
                <Text style={{color:'#FF8421',fontSize: 20,fontFamily:'Satisfy_regular', paddingLeft: 10}}>{Ratings}</Text>
                </Icon>
            </View>

            {/* Ingredients */}
            <Text style={{color:'#000',fontSize: 20,fontFamily:'Satisfy_regular', padding: 20, textAlign:'left'}}>{Ingredients}</Text>

            {/* Price And Add Item */}
            <View style={{justifyContent:'space-between',flexDirection:'row', padding: 20}}>
                <View style={{flexDirection:'row'}}>
                    <Icon name="remove-outline" style={{backgroundColor:'#FF8421',fontSize: 35, borderRadius: 10, color:'#ffffff'}}/>
                    <Text style={{color:'#000',fontSize: 25, paddingLeft: 10, paddingRight: 10, textAlign:'center',marginRight: 5, marginLeft: 5}}>1</Text>
                    <Icon name="add-outline" style={{backgroundColor:'#FF8421',fontSize: 35, borderRadius: 10, color:'#ffffff'}}/>
                </View>
                <View>
                <Text style={{color:'#000',fontSize: 20,fontWeight: 'bold', paddingLeft: 10, textAlign:'center'}}>{Price}</Text>
                </View>
            </View>
            
            {/* Add Item Button */}
            <Button style={{borderRadius: 20,padding: 10,marginTop: 30,marginBottom: 20,alignSelf: 'center',justifyContent:'center',height: 50, width: 350,backgroundColor:'#FF8421'}}>
                <Text style={{color: '#ffffff',marginTop: 5,fontFamily: 'Satisfy_regular', fontSize: 25,textAlign: 'center',alignSelf:'center'}}>
                    Add
                </Text>
            </Button>
        </View>
    )
}