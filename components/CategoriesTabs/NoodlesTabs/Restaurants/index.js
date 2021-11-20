import { Button, Container, Icon, } from 'native-base';
import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';


//Card Data
const DATA = [
  {
    id: 'd1',
    title: 'Joliibee',
    img: require('../../../../assets/Images/Categories/Noodles/Restaurants/joliibee.jpg'),
    speciality: 'Pizza, Fried Chicken, Drinks, Icecream, Pasta.',
    location: 'Guilez',
    ratings: '85%',
    time : '23 min',
  },

  {
    id: 'd2',
    title: 'Popeyes',
    img: require('../../../../assets/Images/Categories/Noodles/Restaurants/popeyes.jpg'),
    speciality: 'Pizza, Pizza Crusts, Sides, Drinks, Pasta.',
    location: 'Guilez',
    ratings: '91%',
    time : '25 min',
  },

  {
    id: 'd3',
    title: 'Subway',
    img: require('../../../../assets/Images/Categories/Noodles/Restaurants/subway.jpg'),
    speciality: 'Pizza, Sandwish, Cakes, Drinks, Icecream, Pasta.',
    location: 'Guilez',
    ratings: '95%',
    time : '32 min',
  },

  {
    id: 'd4',
    title: 'Caesars',
    img: require('../../../../assets/Images/Categories/Noodles/Restaurants/caesars.jpg'),
    speciality: 'Pizza, Fried Chicken, Drinks, Fries, Pasta.',
    location: 'Guilez',
    ratings: '80%',
    time : '43 min',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const RestaurantsCard = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <Container style={styles.container}>    
    <Text style={styles.titleStyles}>Restaurants Near You</Text>      
        
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        renderItem={ ({ item, index }) => {
            return(
            <View style={{marginTop: 5,backgroundColor:'#f3f3f3',margin: 10, borderRadius: 5}}>
            
            <View style={{flexDirection: 'row',justifyContent: 'space-between', backgroundColor: '#e6e6e6',borderRadius: 20}}>

            {/* Image Section */}
            <Image 
              source={item.img} // Use item to set the image source
              key={index} // Important to set a key for list items
              style={{
                width: 110,
                height:150,
                resizeMode:'contain',
                borderRadius: 15,
              }}
            />

            {/* Description Section */}
            <View style={{flexDirection: 'column',paddingLeft: 5}}>

                <View style={{flexDirection: 'row',marginTop: 10}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Button disabled bordered style={{borderColor: '#838383',borderRadius: 10,borderWidth: 10,padding: 5,marginRight: 10}}><Text style={{color:'#000',fontSize: 10}}>{item.location}</Text></Button>
                    <Button disabled bordered style={{borderColor: '#838383',borderRadius: 10,borderWidth: 10,padding: 5,marginRight: 10}}><Text style={{color:'#000',fontSize: 10}}>{item.time}</Text></Button>
                    </View>
                <View style={{width: '85%'}}>
                    <Text style={styles.descriptionTextStyles}>
                        Speciality: <Text style={{color:'#FF8421'}}>{item.speciality}</Text>
                    </Text>
                    <Text style={styles.descriptionTextStyles}>
                        Ratings: <Text style={{color:'#FF8421'}}>{item.ratings}<Icon name="thumbs-up" style={{color:'#FF8421', fontSize: 12}}/></Text>
                    </Text>
                </View>
                    
                </View>
            </View>

            </View>
            )
          }}
      />
      
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
  },

  title: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Satisfy_regular',
    paddingTop: 5,
    marginRight: 10

  },

  titleStyles:{
    marginLeft: 20,
    color: '#FF8421',
    fontSize: 25,
    fontFamily: 'Satisfy_regular'
  },

  descriptionTextStyles:{
    color: '#000',
    marginTop: 5,
    fontSize: 15,
    fontFamily: 'Satisfy_regular'
  }
});

export default RestaurantsCard;