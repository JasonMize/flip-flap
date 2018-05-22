import React from 'react';
// import { StyleSheet, Text, View, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
// import { List, ListItem, SearchBar, Avatar } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
// import { constants } from 'expo';
import HomeScreen from './src/components/home';
import DetailScreen from './src/components/detail';


export default StackNavigator({
  Home: {
    screen: HomeScreen, 
    navigationOptions: {
      title: "Home",
      headerBackTitle: "Back",
    },
    // {
    //   title: "Detail",
    //   headerBackTitle: "Back",
    // }
  },
  Detail: {
    screen: DetailScreen, 
    navigationOptions: {
      title: "Detail",
      headerBackTitle: "Back",
    },
  },
}); 


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>FLIP FLAP</Text>
//         <Text>Hello Richie.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
