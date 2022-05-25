import React from 'react';
import {View, FlatList, Image, StyleSheet, Dimensions} from 'react-native'

function PictureList({restaurant, data}) {

    const dimensions = Dimensions.get("window")
    const imageWidth = (dimensions.width) - 10
    const imageHeight = Math.round((dimensions.width * 9) / 16)

    return (
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
    );
}

const styles = StyleSheet.create({
    pictures: {
        alignItems: "center",
        paddingBottom: 100
    },
})

export default PictureList;