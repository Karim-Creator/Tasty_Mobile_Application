import { Button, Icon } from 'native-base';
import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';


//Card Data
const DATA = [
  {
    id: '1',
    title: 'Spaghetti & Meatballs',
    img: require('../../../../assets/Images/Categories/Noodles/Recommended/meatballs.jpg'),
    restaurant: 'Subway',
    ingredients: 'Ground Beef, Italian Sausage, Garlic, Bread Crumbs, Parmesan Cheese, Parsley, Oregano, Basil, Salt, And Pepper.',
    price: '45 DH',
    location: '25 min',
    ratings: '4.6',
  },

  {
    id: '2',
    title: 'Pasta Alla Norma',
    img: require('../../../../assets/Images/Categories/Noodles/Recommended/norma.jpg'),
    restaurant: 'Jollibee',
    ingredients: 'Rigatoni, Turkish Eggplant, Peeled Tomatoes, Tomatoe Paste, Ricotta, Onions, Garlic, Basil & Olive Oil.',
    price: '30 DH',
    location: '20 min',
    ratings: '4.1',
  },

  {
    id: '3',
    title: 'Tortelli Pasta',
    img: require('../../../../assets/Images/Categories/Noodles/Recommended/tortelli.jpg'),
    restaurant: 'Papa John',
    ingredients: 'Mortadella, Breadcrumbs, Ground Beef, Sea Salt, Grated Nutmef, Eggs, Onions, Garlic, Basil, & Butter.',
    price: '35 DH',
    location: '12 min',
    ratings: '4.4',
  },

  {
    id: '4',
    title: 'Popeyes',
    img: require('../../../../assets/Images/Categories/Noodles/Recommended/chowmein.jpg'),
    restaurant: 'WarmBurger',
    ingredients: 'Dried Chinese Egg Noodles, Chicken Breast, Chicken Stock, Oyster Sauce, White Wine, Soy Sauce, Carrots, Green Pepper & Mushrooms.',
    price: '30 DH',
    location: '20 min',
    ratings: '4.6',
  },

];


const RecommendedNoodlesCard = () => {
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
                
                <Button style={{borderRadius: 20,padding: 10,marginTop: 10,marginBottom: 20,alignSelf: 'center',justifyContent:'center',height: 50, width: 200,backgroundColor:'#FF8421'}}>
                    <Text style={{color: '#ffffff',marginTop: 5,fontFamily: 'Satisfy_regular', fontSize: 25,textAlign: 'center',alignSelf:'center'}}>
                    Add To Card
                    </Text>
                </Button>
                 
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

export default RecommendedNoodlesCard;