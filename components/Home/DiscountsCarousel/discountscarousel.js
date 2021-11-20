import * as React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  LogBox,
  Text } from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

const { width: screenWidth } = Dimensions.get('window')


export default class HomeDiscountsCarousel extends React.Component {

    //Carousel Data
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              id: '1',
              img: require('../../../assets/Images/HomeDiscountCarousel/burger.jpg'),
          },
          {
              img: require('../../../assets/Images/HomeDiscountCarousel/pizza.png'),
          },
          {
              img: require('../../../assets/Images/HomeDiscountCarousel/burger.png'),
          },
          {
              img: require('../../../assets/Images/HomeDiscountCarousel/chicken.png'),
          },
          {
              img: require('../../../assets/Images/HomeDiscountCarousel/sandwish.jpg'),
          },
        ]
      }
    }

    _renderItem({item,index}, parallaxProps){
        return (
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
              
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, marginBottom: 20}}>
            <Text style={styles.titleStyles}>Special Offers</Text>
            <View style={{flexDirection:'row'}}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={screenWidth}
                  sliderHeight={screenWidth}
                  itemWidth={screenWidth - 20}
                  renderItem={this._renderItem}
                  hasParallaxImages={true} 
                  autoplay={true}
                  enableSnap={true}
                  loop={true}
                  onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                  />
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 210,
    },

      titleStyles:{
        marginLeft: 20,
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