import React from 'react';
import { FlatList } from 'react-native';
import CategoryItem from './CategoryItem';


function Categories({categories, setTerm, term}) {
    return (
        <FlatList
      data={categories}
        renderItem={({item, index}) => {
        return (
        <CategoryItem 
        name={item.name}
        imageUrl={item.imageUrl}
        index={index}
        active={item.name === term}
        handlePress={() => setTerm(item.name)}
        />
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category) => category.name} 
      />
    );
}

export default Categories;