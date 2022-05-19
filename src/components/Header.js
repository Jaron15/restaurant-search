import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header() {
    return (
        <View style={styles.container}>
       <Text style={styles.lightHeader}>Grab your</Text>
       <Text style={styles.boldHeader}>delicious meal!</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginHorizontal: 25
    },
    lightHeader: {
        fontSize: 35,
        marginTop: 60,
    },
    boldHeader: {
        fontSize: 40,
        fontWeight: "bold",
    },

})

export default Header;