import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CategoryItem from './src/components/CategoryItem';
import { useState } from "react"

export default function App() {
  // let term = "Burger"
  const [term, setTerm] = useState("Burger")
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require('./src/assets/images/burger.png') 
    },
    {
      name: "Pizza",
      imageUrl: require('./src/assets/images/pizza.png') 
    },
    {
      name: "Dessert",
      imageUrl: require('./src/assets/images/cake.png') 
    },
    {
      name: "Drinks",
      imageUrl: require('./src/assets/images/smoothies.png') 
    },
    {
      name: "Steak",
      imageUrl: require('./src/assets/images/steak.png') 
    },
    {
      name: "Pasta",
      imageUrl: require('./src/assets/images/pasta.png') 
    },
  ];

  // setTimeout(() => {
  //   console.log("initial term: ", term);
  //   setTerm("Pizza")
  //   console.log("changed term: ", term);
  // }, 3000);

  return (
    <View style={styles.container}>
      <Header />
      <Search />

      <View>
      <FlatList
      data={commonCategories}
        renderItem={({item, index}) => {
        return <CategoryItem name={item.name}
        imageUrl={item.imageUrl}
        index={index}
        active={item.name === term}
        handlePress={() => setTerm(item.name)}
           />;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category) => category.name} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
