import React from 'react';
import { View, Text } from 'react-native';
import { Container, Icon, Thumbnail } from 'native-base';

export function DrawerContent(props) {
    return (
        <Container style={{backgroundColor:'#FF8421'}}>

            {/* Avatar & Name */}
            <View style={{flexDirection:'column',alignItems:'center', marginTop: 20}}>
            <Thumbnail large source={require('../assets/Images/Profile/avatar.png')} />
            <Text style={{color:'#fff', fontSize: 30, fontFamily:'Satisfy_regular'}}>Noah Arc</Text>
            </View>

            {/* Orders & Favourites */}
            <View style={{flexDirection: 'row', justifyContent:'space-evenly', marginTop: 10}}>
                <Text style={{color:'#fff', fontSize: 20, fontFamily: 'Satisfy_regular'}}>Orders: 34</Text>
                <Text style={{color:'#fff', fontSize: 20, fontFamily: 'Satisfy_regular'}}>Liked: Pizza</Text>
            </View>

            {/* Line Between */}
            <View
            style={{
                borderBottomColor: '#fff',
                borderBottomWidth: 1,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10
            }}
            />

            {/* Orders */}
            <View style={{flexDirection:'row', paddingLeft: 20, paddingTop: 30}}>
                <Icon name="fast-food-outline" style={{color: '#fff', fontSize: 25}}/>
                <Text style={{color:'#fff', fontSize: 20, fontFamily:'Satisfy_regular', paddingLeft: 20}}>My Orders</Text>
            </View>

            {/* Payment Method */}
            <View style={{flexDirection:'row', paddingLeft: 20, paddingTop: 30}}>
                <Icon name="card-outline" style={{color: '#fff', fontSize: 25}}/>
                <Text style={{color:'#fff', fontSize: 20, fontFamily:'Satisfy_regular', paddingLeft: 20}}>Payment Method</Text>
            </View>

            {/* My Profile */}
            <View style={{flexDirection:'row', paddingLeft: 20, paddingTop: 30}}>
                <Icon name="person-outline" style={{color: '#fff', fontSize: 25}}/>
                <Text style={{color:'#fff', fontSize: 20, fontFamily:'Satisfy_regular', paddingLeft: 20}}>My Profile</Text>
            </View>

            {/* My Adresses */}
            <View style={{flexDirection:'row', paddingLeft: 20, paddingTop: 30}}>
                <Icon name="location-outline" style={{color: '#fff', fontSize: 25}}/>
                <Text style={{color:'#fff', fontSize: 20, fontFamily:'Satisfy_regular', paddingLeft: 20}}>My Adresses</Text>
            </View>

            {/* Help Center */}
            <View style={{flexDirection:'row', paddingLeft: 20, paddingTop: 30}}>
                <Icon name="help-circle-outline" style={{color: '#fff', fontSize: 25}}/>
                <Text style={{color:'#fff', fontSize: 20, fontFamily:'Satisfy_regular', paddingLeft: 20}}>Help Center</Text>
            </View>

            {/* Invite Friends */}
            <View style={{flexDirection:'row', paddingLeft: 20, paddingTop: 30}}>
                <Icon name="person-add-outline" style={{color: '#fff', fontSize: 25}}/>
                <Text style={{color:'#fff', fontSize: 20, fontFamily:'Satisfy_regular', paddingLeft: 20}}>Invite Friends</Text>
            </View>

            {/* Line Between */}
            <View
            style={{
                borderBottomColor: '#fff',
                borderBottomWidth: 1,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 20
            }}
            />

            {/* Settings */}
            <View style={{flexDirection:'row', paddingLeft: 20, paddingTop: 30}}>
                <Icon name="cog-outline" style={{color: '#fff', fontSize: 25}}/>
                <Text style={{color:'#fff', fontSize: 20, fontFamily:'Satisfy_regular', paddingLeft: 20}}>Settings</Text>
            </View>

            {/* Terms & Condition */}
            <View style={{flexDirection:'row', paddingLeft: 20, paddingTop: 30}}>
                <Icon name="shield-checkmark-outline" style={{color: '#fff', fontSize: 25}}/>
                <Text style={{color:'#fff', fontSize: 20, fontFamily:'Satisfy_regular', paddingLeft: 20}}>Terms & Condition</Text>
            </View>

            {/* Logout */}
            <View style={{flexDirection:'row', paddingLeft: 20, paddingTop: 30}}>
                <Icon name="log-out-outline" style={{color: '#fff', fontSize: 25}}/>
                <Text style={{color:'#fff', fontSize: 20, fontFamily:'Satisfy_regular', paddingLeft: 20}}>Logout</Text>
            </View>

        </Container>
    );
}