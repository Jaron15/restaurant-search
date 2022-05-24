import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, Dimensions, SafeAreaView} from 'react-native';
import useRestaurant from  '../hooks/useRestaurant';

function RestaurantScreen({navigation}) {
    const [{data, loading, error}, searchRestaurant] = useRestaurant();
    const id = navigation.getParam("id");

    const dimensions = Dimensions.get("window")
    const imageWidth = dimensions.width
    const imageHeight = Math.round((dimensions.width * 9) / 16)

    useEffect(() => {
        searchRestaurant(id);
        console.log('====================================');
        console.log(id);
        console.log('====================================');
    }, []);
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>{error}</Text>;

    return (
     <View >
        {data && (
            <FlatList
            data={data.photos}
            keyExtractor={(photo) => photo}
            renderItem= {({item}) => <Image source={{uri: item}} style={{height: imageHeight, width: imageWidth, }} />}
            />
        )}
     </View>
    );
}

export default RestaurantScreen;