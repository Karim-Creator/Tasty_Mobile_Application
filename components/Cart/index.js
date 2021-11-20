import { Button, Icon, Container } from 'native-base';
import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';


//Card Data
const DATA = [
  {
    id: 'd1',
    title: 'Double Cheese Burger',
    img: require('../../assets/Images/HomePopularCard/burger.jpg'),
    restaurants: 'McDonalds',
    location: 'Guilez',
    ratings: '85%',
    time : '25 min',
    price: '60'
  },

  {
    id: 'd2',
    title: 'Mushrooms & Pepperoni Pizza',
    img: require('../../assets/Images/HomePopularCard/pizza.jpg'),
    restaurants: 'PizzaHut',
    location: 'Guilez',
    ratings: '91%',
    time : '30 min',
    price: '70'
  },

  {
    id: 'd3',
    title: 'Mango & Lemon Smoothie',
    img: require('../../assets/Images/HomeRecentCard/smoothie.jpeg'),
    restaurants: 'Starbucks',
    location: 'Saada',
    ratings: '95%',
    time : '32 min',
    price: '20'
  },

  {
    id: 'd4',
    title: 'Strawberry CheeseCake',
    img: require('../../assets/Images/HomeRecentCard/cheesecake.jpg'),
    restaurants: 'Cookieman',
    location: 'Guilez',
    ratings: '80%',
    time : '43 min',
    price: '25'
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const CartCard = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (

    <Container style={styles.container}>       
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        renderItem={ ({ item, index }) => {
            return(
            <View style={{marginTop: 5,backgroundColor:'#f3f3f3',margin: 10, borderRadius: 5}}>
            
            <View style={{flexDirection: 'row', borderRadius: 20}}>

            {/* Image Section */}
            <Image 
              source={item.img} // Use item to set the image source
              key={index} // Important to set a key for list items
              style={{
                width: 130,
                height:160,
                resizeMode:'cover',
                borderRadius: 30,
              }}
            />

            {/* Description Section */}
            <View style={{flexDirection: 'column',paddingLeft: 5}}>

                <View style={{flexDirection: 'row',marginTop: 10}}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Button disabled bordered style={{borderColor: '#838383',borderRadius: 10,borderWidth: 10,padding: 5,marginRight: 10}}><Text style={{color:'#000',fontSize: 10}}>{item.location}</Text></Button>
                    <Button disabled bordered style={{borderColor: '#838383',borderRadius: 10,borderWidth: 10,padding: 5,marginRight: 10}}><Text style={{color:'#000',fontSize: 10}}>{item.time}</Text></Button>
                </View>

                <View style={{width: '85%', flexDirection:'row', justifyContent:'flex-start'}}>
                    <Text style={styles.descriptionTextStyles}>
                        Restaurants: <Text style={{color:'#FF8421'}}>{item.restaurants}</Text>
                    </Text>
                </View>
                    <Text style={styles.descriptionTextStyles}>
                        Ratings: <Text style={{color:'#FF8421'}}>{item.ratings}<Icon name="thumbs-up" style={{color:'#FF8421', fontSize: 12}}/></Text>
                    </Text>

                <View style={{flexDirection:'row'}}>
                    <Icon name="remove-outline" style={{backgroundColor:'#FF8421',fontSize: 20, borderRadius: 10, alignSelf: 'center', color:'#ffffff'}}/>
                    <Text style={{color:'#000',fontSize: 20, paddingLeft: 10, paddingRight: 10, textAlign:'center',marginRight: 5, marginLeft: 5}}>1</Text>
                    <Icon name="add-outline" style={{backgroundColor:'#FF8421',fontSize: 20, borderRadius: 10,alignSelf: 'center', color:'#ffffff'}}/>
                </View>
            
            <View>
                <Text style={styles.descriptionTextStyles}>
                    Price: <Text style={{color:'#FF8421'}}>{item.price} DH</Text>
                </Text>
            </View>
                    
                </View>
            </View>

            {/* Line Between Items */}
            <View
                style={{
                    borderBottomColor: 'lightgray',
                    borderBottomWidth: 1,
                    marginTop: 10
                }}
            />
            </View>
            )
          }}
      />
      

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:'#000', fontSize: 25, fontFamily: 'Satisfy_regular', paddingLeft: 20}}>Your Total: </Text>
            <Text style={{color:'#FF8421', fontSize: 25, fontFamily: 'Satisfy_regular', paddingRight: 20}}>175 dh</Text>
        </View>

        <Button style={{borderRadius: 20, marginBottom: 50,alignSelf: 'center',justifyContent:'center',height: 50, width: 250,backgroundColor:'#FF8421'}}>
                <Text style={{color: '#ffffff',marginTop: 5,fontFamily: 'Satisfy_regular', fontSize: 25,textAlign: 'center',alignSelf:'center'}}>
                    Purchase
                </Text>
        </Button>

      
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    position: 'absolute',
    top: 50
  },

  title: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Satisfy_regular',
    paddingTop: 5,
    marginRight: 10

  },

  descriptionTextStyles:{
    color: '#000',
    marginTop: 5,
    fontSize: 15,
    fontFamily: 'Satisfy_regular'
  }
});

export default CartCard;