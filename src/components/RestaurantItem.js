import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {elevation} from "../common/styles";
import {withNavigation} from 'react-navigation';

// homepage restaurant details/cover photo, price, rating
function RestaurantItem({restaurant, navigation }) {
    return (
        // Reroutes to restaurantScreen for restaurant clicked on (Touchable) passing in the restaurant object
        <TouchableOpacity onPress={() => navigation.navigate("Restaurant", {restaurant: restaurant})}>
       <View style={[styles.elevation, styles.container]}>
           <Image style={styles.image} source={{uri: restaurant.image_url}}/>
           <View style={styles.infoContainer}>
               <Text style={styles.header}>{restaurant.name}</Text>
               <View style={styles.info}>
                   <Text style={styles.rating}>{restaurant.rating}</Text>
                   <Text style={styles.money}>{restaurant.price}</Text>
               </View>
           </View>
       </View>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    elevation,
    container: {
        backgroundColor: "white",
        height: 100,
        alignSelf: "stretch",
        borderRadius: 50,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginLeft: 10,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    header:
    {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    info: {
        flexDirection: "row",
    },
    rating: {
        marginRight: 15,
    },
    money: {
        color: "gold",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0,
shadowRadius: 4.65,

elevation: 8,
    }
})

export default withNavigation(RestaurantItem);