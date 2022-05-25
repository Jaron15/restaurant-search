import React, { useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantItem from './RestaurantItem';


function Restaurants({term}) {

const [{data, loading, error}, searchRestaurants] = useRestaurants();

// runs useRestaurants hook every time the term is changed
useEffect(() => {
    searchRestaurants(term);
}, [term])

if(loading) return <ActivityIndicator size="large" marginVertical={30} />

if (error) return (
    <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
    </View>
    );

    return (
        // homepage list of restaurants
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>
            <FlatList
            data={data}
            keyExtractor={(restaurant) => restaurant.id}
            renderItem ={({item}) => <RestaurantItem restaurant={item} />
            } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
        paddingBottom: 1000
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
    },
 
})

export default Restaurants;