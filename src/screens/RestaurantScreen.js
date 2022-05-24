import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, Dimensions, Clipboard, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import useRestaurant from  '../hooks/useRestaurant';

function RestaurantScreen({navigation}) {
    const [{data, loading, error}, searchRestaurant] = useRestaurant();
    const restaurant = navigation.getParam("restaurant");

    const dimensions = Dimensions.get("window")
    const imageWidth = (dimensions.width) - 10
    const imageHeight = Math.round((dimensions.width * 9) / 16)

    useEffect(() => {
        searchRestaurant(restaurant.id);
    }, []);
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>{error}</Text>;

    return (

        <View style={styles.container}>
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

     <View style={styles.pictures}>
        {data && (
            <FlatList
            data={data.photos}
            keyExtractor={(photo) => photo}
            renderItem= {({item}) => <Image source={{uri: item}} style={{
            height: imageHeight,
            width: imageWidth,
            borderRadius: 50,
            marginTop: 10,
            marginBottom: 10,
            borderColor: "black",
            borderWidth: 3,
            alignItems: "center",
        }} />}
            />
        )}
     </View>
     </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 100
    },
    pictures: {
        alignItems: "center",
        paddingBottom: 100
    },
    info: {
        flex: 1,
        justifyContent: "flex-start"
    },
    bold: {
        fontWeight: "bold",
        fontSize: 25,
        
    }
})

export default RestaurantScreen;