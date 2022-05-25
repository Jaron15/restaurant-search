import React, {useEffect} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import PictureList from '../components/PictureList';
import RestaurantInfo from '../components/RestaurantInfo';
import useRestaurant from  '../hooks/useRestaurant';

function RestaurantScreen({navigation}) {
    const [{data, loading, error}, searchRestaurant] = useRestaurant();
    const restaurant = navigation.getParam("restaurant");

  useEffect(() => {
        searchRestaurant(restaurant.id);
    }, []);
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>{error}</Text>;

    return (
        <View style={styles.container}>
            <RestaurantInfo restaurant={restaurant} />
            <PictureList restaurant={restaurant} data={data} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 100
    }, 
})

export default RestaurantScreen;