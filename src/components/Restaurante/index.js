import React, { Element, PropTypes } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme,
} from 'react-native-material-kit';

const theme = getTheme();

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'blue',
    flex: 1,
    height: 70,
    alignSelf: 'stretch',
    //backgroundColor: 'blue',
    flexDirection: 'row',
    padding: 8
  },
  imageContainer: {
    flex: 0.8,
    //backgroundColor: 'red'
  },
  infoContainer: {
    flex: 4,
    paddingLeft: 5
    //backgroundColor: 'green'
  },
  row1: {
    flex: 2.5,
    //backgroundColor: '#de3',
    flexDirection: 'row'
  },
  row2: {
    flex: 1.5,
    //backgroundColor: '#dea'
  },
  row3: {
    flex: 2.5,
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 5
  },
  ratingContainer: {
    flex: 1,
    //backgroundColor: '#ada',
    flexDirection: 'row',
    alignItems: 'center'

  },
  title: {
    fontSize: 16,
    color: 'black'
  },
  category: {
    fontSize: 10,
    fontWeight: '100',
    color: 'gray'
  },
  ratingNumber: {
    marginLeft: 5,
    color: 'orange'
  },
  timeContainer: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  distanceContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  priceContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    flex: 1
  },
  time: {
    fontSize: 10,
    marginLeft: 5,
    color: 'gray'
  },
  distance: {
    fontSize: 10,
    marginLeft: 5,
    color: 'gray'
  },
  price: {
    fontSize: 10,
    marginLeft: 5,
    color: 'gray'
  },
  divider: {
    flex: 0.01,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#dfdfdf'
  }
});

const Restaurante = ({
  image,
  promocoes,
  vouchers,
  minTime,
  maxTime,
  distance,
  uri,
  name,
  category,
  rating
}) => {
  console.log(minTime);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri}}
          resizeMode={Image.resizeMode.contain} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.row1}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {name}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <Icon
              name="md-star"
              color="orange"
              size={14} />
            <Text style={styles.ratingNumber}>
              {rating}
            </Text>
          </View>
        </View>
        <View style={styles.row2}>
          <Text style={styles.category}>
            {category}
          </Text>
        </View>
        <View style={styles.row3}>
          <View style={styles.timeContainer}>
            <Icon
              name="ios-clock-outline"
              color="gray"
              size={14} />
            <Text style={styles.time}>
              {minTime} - {maxTime} min
            </Text>
          </View>
          <View style={styles.distanceContainer}>
            <Icon
              name="ios-pin-outline"
              color="gray"
              size={14} />
            <Text style={styles.distance}>
              {distance} km
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              $$$$
            </Text>
            <Text style={[styles.price, {color: '#bbb', marginLeft: 0}]}>
              $
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
Restaurante.propTypes =  {
  image: PropTypes.string,
  promocoes: PropTypes.number,
  vouchers: PropTypes.number,
  minTime: PropTypes.number,
  maxTime: PropTypes.number,
  distance: PropTypes.number,
  uri: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  rating: PropTypes.number
}
export default Restaurante;
/*
<View style={theme.cardStyle}>
<Image source={{uri : base64Icon}} style={theme.cardImageStyle}/>
<Text style={theme.cardTitleStyle}>Welcome</Text>
<View  // TextView padding not handled well on Android https://github.com/facebook/react-native/issues/3233
style={{
padding : 15,
}}
>
<Text style={[theme.cardContentStyle, {padding:0}]}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Mauris sagittis pellentesque lacus eleifend lacinia...
</Text>
</View>
<View style={theme.cardMenuStyle}>{menu}</View>
<View style={theme.cardActionStyle}>
<Text>My Action</Text>
</View>
</View>

*/