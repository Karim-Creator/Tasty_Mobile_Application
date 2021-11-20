import { Button, Container, Icon } from 'native-base';
import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';


//Card Data
const DATA = [
  {
    id: '1',
    title: 'Double Cheese Burger',
    img: require('../../../assets/Images/HomeRecommended/burger.jpg'),
    restaurant: 'Mcdonalds',
    ingredients: 'Toasted Bun, Cucumbers, Lettuce, 3 Different Cheese, 1/4 Grass Fed Beef, Specials Sauce & Ketchup.',
    price: '60 DH',
    location: '20 min',
    ratings: '4.5',
  },

  {
    id: '2',
    title: 'Spicy Peperoni Pizza',
    img: require('../../../assets/Images/HomeRecommended/pizza.jpg'),
    restaurant: 'PizzaHut',
    ingredients: 'Peperoni, Bacon, Tomato Sauce, Cheese, Onions, Green/Red Pepper, Mushrooms, Olives & Chili.',
    price: '90 DH',
    location: '15 min',
    ratings: '4.6',
  },

  {
    id: '3',
    title: 'Stir Fry Shrimp Noodles',
    img: require('../../../assets/Images/HomeRecommended/noodles.jpg'),
    restaurant: 'CopyPasta',
    ingredients: 'Noodles, Shrimps, Onions, Red Pepper, Green Pepper, Garlic, Mushrooms, Chilis & Secials Sauce.',
    price: '75 DH',
    location: '12 min',
    ratings: '4.3',
  },

  {
    id: '4',
    title: 'Fried Chicken',
    img: require('../../../assets/Images/HomeRecommended/chicken.jpg'),
    restaurant: 'Chickandy',
    ingredients: 'Chicken, Onion & Garlic Powder, Mustard, Milk, Breadcrumbs, Eggs, Cornmeal Mix.',
    price: '65 DH',
    location: '25 min',
    ratings: '4.4',
  },

  {
    id: '5',
    title: 'Healthy Smoothie',
    img: require('../../../assets/Images/HomeRecommended/smoothie.jpg'),
    restaurant: 'JuiceBar',
    ingredients: 'Dairy Milk/Almond Milk, Strawberry, Banana, Orange, Kiwi, Blueberries, Blackberries, Honey, Mint, Lemon, Mango.',
    price: '25 DH',
    location: '15 min',
    ratings: '4.5',
  },

  {
    id: '6',
    title: 'Chocolate Cake',
    img: require('../../../assets/Images/HomeRecommended/desert.jpg'),
    restaurant: 'Patisserie',
    ingredients: 'Whole Milk, Brown Sugar, Vanilla, Cocoa, Sour Cream, Black Coffee, Chocolate Paste, Cocoa Frosting,  ',
    price: '30 DH',
    location: '10 min',
    ratings: '4.1',
  },
];


const HomeRecommended = ({ navigation  }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>   
    <Text style={styles.titleStyles}>
    Recommended    
    </Text>       
        
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        renderItem={ ({ item, index }) => {
            return(
            <View>

            {/* Image Section */}
            <TouchableOpacity
            onPress={() => navigation.navigate('Details', 
            { Title: item.title, image: item.img, Ingredients: item.ingredients, Location: item.location, Price: item.price, Restaurant: item.restaurant, Ratings: item.ratings}
            )}
            >

            <Image 
              source={item.img} // Use item to set the image source
              key={index} // Important to set a key for list items
              style={{
                width:'100%',
                height:225,
                resizeMode:'contain',
                borderRadius: 20
              }}
            />
            </TouchableOpacity>

            {/* Description Section */}
            <View style={styles.descriptionViewStyles}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Button disabled bordered style={{borderColor: '#FF8421',borderRadius: 10,borderWidth: 10,padding: 10}}><Text style={{color:'#FF8421',fontSize: 15,fontFamily:'Satisfy_regular'}}>{item.restaurant}</Text></Button>
             </View>

            {/* Tags Section */}
            <View style={{paddingLeft: 15,paddingRight: 15, marginTop: 10,}}>
                 <Text style={{color: '#000',fontFamily:'Satisfy_regular',fontSize: 18}}>
                 {item.ingredients}
                 </Text>

                <View style={{flexDirection:'row',marginTop: 10,justifyContent:'flex-end'}}>
                <View style={{justifyContent: 'space-around',flexDirection:'row',width:'100%',marginTop: 10}}>
                    <Text style={{fontFamily:'Satisfy_regular',fontSize: 20,color:'#FF8421',paddingRight: 25}}>
                        <Icon name="star" style={{fontSize: 15,color:'#FF8421'}}/>
                    {item.ratings}
                    </Text>
                </View>  
                <Button disabled bordered style={{borderColor: '#FF8421',borderRadius: 10,borderWidth: 10,padding: 10,marginRight: 5}}>
                    <Text style={{color:'#FF8421',fontSize: 15,fontFamily:'Satisfy_regular'}}>{item.price}</Text>
                </Button>
                <Button disabled bordered style={{borderColor: '#FF8421',borderRadius: 10,borderWidth: 10,padding: 10,marginRight: 5}}>
                    <Text style={{color:'#FF8421',fontSize: 15,fontFamily:'Satisfy_regular'}}>{item.location}</Text>
                </Button>
                </View>
                
                <TouchableOpacity  style={{borderRadius: 20,padding: 10,marginTop: 10,marginBottom: 20,alignSelf: 'center',justifyContent:'center',height: 50, width: 200,backgroundColor:'#FF8421'}}
                onPress={() => navigation.navigate('Details', 
                { Title: item.title, image: item.img, Ingredients: item.ingredients, Location: item.location, Price: item.price, Restaurant: item.restaurant, Ratings: item.ratings}
                )}
                >
                    <Text style={{color: '#ffffff',marginTop: 5,fontFamily: 'Satisfy_regular', fontSize: 25,textAlign: 'center',alignSelf:'center'}}>
                    Add To Card
                    </Text>
                </TouchableOpacity>
                 
             </View>
            </View>
            )
          }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    margin: 15,
    borderRadius: 20,
  },

  cardTitle: {
    fontSize: 20,
    color: '#FF8421',
    fontFamily: 'Satisfy_regular',
    paddingTop: 5,
    marginRight: 10

  },

  titleStyles:{
    marginLeft: 10,
    color: '#FF8421',
    fontSize: 25,
    fontFamily: 'Satisfy_regular'
},

  descriptionViewStyles: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingLeft: 20,
      height: 50,
      backgroundColor: '#f3f3f3',
      marginRight: 20,
      marginTop: 10,
  }
});

export default HomeRecommended;