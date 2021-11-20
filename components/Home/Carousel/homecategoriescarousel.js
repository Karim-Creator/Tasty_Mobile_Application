import * as React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  LogBox,
  Text } from 'react-native';
import { Button, Icon } from 'native-base'
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);


const { width: screenWidth } = Dimensions.get('window')


export default class HomeCategoriesCarousel extends React.Component {

    //Carousel Data
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              img: require('../../../assets/Images/HomePopularCarousel/burger.jpg'),
              title: 'Master Burger',
              description: 'Pure 1/4 lbs Beef, Home Made Patty, Special Souce, Creamy Cheddar, Green Lettuce, Tomatoes, Onions, Cucumber.',
              tags: 'BURGERS',
              time: '25 min'
          },
          {
              img: require('../../../assets/Images/HomePopularCarousel/desert.jpg'),
              title: 'Soft Chocolate Cake',
              description: 'Caramel Sauce And Crunchy Chocolate Pearls With Chocolate Cookie Crust, Raspberry Compote And Whipped Cream.',
              tags: 'DESERT',
              time: '30 min'
          },
          {
              img: require('../../../assets/Images/HomePopularCarousel/drinks.jpg'),
              title: 'Healthy Smothies',
              description: 'Strawberry, Blue Berries, Peach, Banana, Lemon, Orange, Mango, Apple, Mint, Kiwi Smothies.',
              tags: 'DRINKS',
              time: '16 min'
          },
          {
              img: require('../../../assets/Images/HomePopularCarousel/pizza.jpg'),
              title: 'Pepperoni Pizza',
              description: 'Pepperoni, Cheese, Tomato Souce, Black Olives, Green Pepper, Onions, Butter Cream.',
              tags: 'PIZZA',
              time: '11 min'
          },
          {
              img: require('../../../assets/Images/HomePopularCarousel/noodles.jpg'),
              title: 'Pan Noodles',
              description: 'Caramelized Udon Noodles In a Sweet Soy Sauce, Broccoli, Carrots, Mushrooms, Pork, Sesame & Cilantro.',
              tags: 'NOODLES',
              time: '32 min'
          },
          {
              img: require('../../../assets/Images/HomePopularCarousel/chicken.jpg'),
              title: 'Hot Fried Chicken',
              description: 'Free Range Chickens, Flour, Garlic, Salt, Paprika, Pepper, Poultry Seasoning & Our Special Sauce.',
              tags: 'CHICKEN',
              time: '18 min'
          },
        ]
      }
    }

    _renderItem({item,index}, parallaxProps){
        return (
          
          <SafeAreaView>
          <View style={styles.item}>
                  <ParallaxImage
                    source={item.img}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                    showSpinner={true}
                    spinnerColor={'orange'}
                />
            
                {/* Title Section*/}
                <Text style={{fontFamily:'Satisfy_regular',fontSize: 20,color:'#FF8421'}}>
                    {item.title}
                </Text>

                <View style={{flexDirection:'row',justifyContent: 'space-between'}}> 

                {/* Description Section*/}
                <View style={{width: 200}}>
                    <Text style={{fontSize: 15,fontFamily:'Satisfy_regular'}}>{item.description}</Text>
                </View> 

                {/* Tags Section   */}
                <View style={{flexDirection: 'row'}}>
                    {/* Tags */}
                    <Button disabled bordered style={{borderRadius: 10,padding: 5,borderColor:'#FF8421',marginRight: 5}}>
                        <Text style={{color:'#FF8421',fontFamily:'Satisfy_regular',fontSize: 13}}>
                            {item.tags}
                        </Text>
                    </Button>

                
                    {/* Time */}
                    <Button disabled bordered style={{borderRadius: 10,padding: 5,borderColor:'#FF8421'}}>
                        
                        <Text style={{color:'#FF8421',fontFamily:'Satisfy_regular',fontSize: 15,marginLeft: 10}}>
                        <Icon name="location" style={{fontSize: 15,color:'#FF8421'}}/>
                            {item.time}
                        </Text>
                    </Button>
                </View>
                    
                </View>
              
          </View>
          </SafeAreaView>
          

        )
    }

    //Add Pagination To Carousel
    get pagination () {
      const { carouselItems, activeSlide } = this.state;
      return (
          <Pagination
            dotsLength={carouselItems.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: '#f3f3f3'}}
            dotStyle={{
                width: 15,
                height: 15,
                borderRadius: 10,
                backgroundColor: '#FF8421'
            }}
            inactiveDotStyle={{
                backgroundColor: '#dadada'
            }}
            inactiveDotOpacity={0.6}
            inactiveDotScale={0.6}
          />
      );
  }

    render() {
        return (
          <SafeAreaView style={{flex: 1}}>
            <Text style={styles.titleStyles}>Popular Near You</Text>
            <View style={{flexDirection:'row'}}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={screenWidth}
                  sliderHeight={screenWidth}
                  itemWidth={screenWidth - 45}
                  renderItem={this._renderItem}
                  hasParallaxImages={true} 
                  autoplay={true}
                  enableSnap={true}
                  loop={true}
                  onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                  />
            </View>
                  { this.pagination }
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        width: 355,
        height: 320,
      },

      titleStyles:{
        marginLeft: 20,
        marginTop: 100,
        marginBottom: 10,
        color: '#FF8421',
        fontSize: 25,
        fontFamily: 'Satisfy_regular',
    },
      
      imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        borderRadius: 10,
      },
      image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
      },
    
})