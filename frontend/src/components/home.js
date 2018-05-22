import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { List, ListItem, SearchBar, Avatar } from "react-native-elements";
// import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount () {
    this.fetchDataFromApi();
  }

  fetchDataFromApi = () => {
    // const url = "http://localhost:8000/flips/list.json";
    const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
  
    // this.setState({
    //   loading: true,
    // });

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response, 
          // error: null, 
          // loading: false, 
          // refreshing: false
        });
      })
      // .catch(error => {
      //   this.setState({
      //     error, 
      //     loading: false
      //   });
      // })
  };

  render() {
    console.log('Data: ', this.state.data);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Ron Swanson Quote</Text>
        <Text style={styles.quote}>{this.state.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  header: {
    marginTop: 5,
    backgroundColor: 'blue',
    color: '#fff',
    fontSize: 20,
  },
  quote: {
    flex: 9,
  }
});

  // constructor (props) {
  //   super(props);

  //   this.state = {
  //     // loading: false,
  //     // data: [],
  //     // error: null,
  //     // refreshing: false,
  //     // base_url: "http://localhost:8000/",
  //   }
  // }

  // componentDidMount() {
  //   this.fetchDataFromApi();
  // }

  // fetchDataFromApi = () => {
  //   // const url = "http://localhost:8000/flips/list.json";
  
  //   // this.setState({
  //   //   loading: true,
  //   // });

  //   // fetch(url)
  //   //   .then(res => res.json())
  //   //   .then(res => {
  //   //     this.setState({
  //   //       data: res, 
  //   //       error: null, 
  //   //       loading: false, 
  //   //       refreshing: false
  //   //     });
  //   //   })
  //   //   .catch(error => {
  //   //     this.setState({
  //   //       error, 
  //   //       loading: false
  //   //     });
  //   //   })
  // };

  // handleRefresh = () => {
  //   this.setState({
  //     refreshing: true
  //   }, () => {
  //       this.fetchDataFromApi();
  //     }
  //   );
  // };

  // renderSeparator = () => {
  //   return (
  //     <View
  //       style = {{
  //         height: 1,
  //         width: "86%",
  //         backgroundColor: "#CED0CE",
  //         marginLeft: "14%",
  //         marginTop: "3%"
  //       }}
  //     />
  //   );
  // };

  // renderHeader = () => {
  //   return <SearchBar placeholder = "Type Here..." lightTheme round />
  // };
  
 //  render () {
 //    return (
 //      <div> Hello World </div>
 // {
      // <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
      //   <FlatList
      //   //   data={this.state.data}
      //   //   renderItem={({ item }) => (
      //   //     <ListItem
      //   //       onPress={() => this.props.navigation.navigate('Detail',
      //   //       {name: `${item.name}`, menu: `${item.menu}`,
      //   //       img: `${this.state.base_url}${item.photo}`,
      //   //       address: `${item.address}`})}
      //   //       avatar={<Avatar
      //   //               source={{uri: `${this.state.base_url}${item.photo}`}}
      //   //               onPress={() => console.log("Works!")}
      //   //               containerStyle={{marginBottom: 2}}
      //   //               avatarStyle={{resizeMode: "cover"}}
      //   //               width={140}
      //   //               height={130}
      //   //         />}
      //   //       title={`${item.name}`}
      //   //       titleStyle={{ fontSize: 16}}
      //   //       titleContainerStyle = {{ marginLeft: 120 }}
      //   //       subtitle={<View style={styles.subtitleView}>
      //   //     <Text style={styles.menuText}>{item.menu}</Text>
      //   //     <Text style={styles.locText}>{item.address}</Text>
      //   //     </View>}
      //   //       containerStyle={{ borderBottomWidth: 0, marginBottom: 20 }}
      //   //     />
      //   //   )}
      //   //   keyExtractor={item => item.id}
      //   //   ItemSeparatorComponent={this.renderSeparator}
      //   //   ListHeaderComponent={this.renderHeader}
      //   //   onRefresh={this.handleRefresh}
      //   //   refreshing={this.state.refreshing}

      //   />
      // </List>
//  }
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
//    subtitleView: {
//     flexDirection: 'column',
//     paddingLeft: 10,
//     paddingTop: 5,
//     marginLeft: 110
//   },
//   menuText: {
//     paddingLeft: 10,
//     color: 'grey'
//   },
//   locText: {
//     paddingLeft: 10,
//     color: 'grey',
//     marginTop: 6,
//     fontSize: 12
//   },
//   titleText: {
//     fontWeight: 'bold'
//   },
//   restaurantImage: {
//     width: 600,
//     height: 800
//   }
// });





