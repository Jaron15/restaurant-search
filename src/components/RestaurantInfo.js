import {TouchableOpacity, View, Text, Clipboard, StyleSheet, Alert} from 'react-native'


import React from 'react';

function RestaurantInfo({ restaurant }) {
    return (
<TouchableOpacity onPress={() => {
    Clipboard.setString(`${restaurant.location.address1} ${restaurant.location.city} ${restaurant.location.state} ${restaurant.location.zip_code}`)
    Alert.alert("Address copied to clipboard")
    }}>
<View style={{alignItems: 'center'}}>
<Text style={styles.bold}>{restaurant.name}</Text>
<Text style={{fontWeight: 'bold'}}>Location:</Text>
<Text >{restaurant.location.address1}</Text>
<Text >{restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}</Text>
</View>
</TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    info: {
        flex: 1,
        justifyContent: "flex-start"
    },
    bold: {
        fontWeight: "bold",
        fontSize: 25,  
    }
})
export default RestaurantInfo;