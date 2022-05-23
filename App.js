import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/homeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Restaurant: RestaurantScreen,
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "BusinessSearch",
    // headerShown: false,
  },
  
});

export default createAppContainer(navigator);


// function App() {
//   return (
     
// <HomeScreen />
  
//   );
// }

// export default App;
