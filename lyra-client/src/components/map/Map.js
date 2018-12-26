import React, { Component } from "react";
//import {Container, Text, Content, Icon } from 'native-base';
import { StyleSheet } from "react-native";
import { DrawerNavigator } from 'react-navigation';
import { Icon, Text, Button, Container, Header, Content, Left, View } from 'native-base'
import MapView from 'react-native-maps';
export default class Map extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="md-locate" stlye={{ color: tintColor}} />
    }
  }
  render() {
    return (
  /*    <MapView
        style={{
          flex : 1
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />);*/
        <View style={styles.container}>
          <MapView style={styles.map}
          initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}/>

        </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})

/*import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
class Map extends Component {
    render () {
      return (
        <Container>
          <Header>
              <Left>
                <Icon name='menu' onPress={() => this.props.navigation.navigate('DrawerOpen')} />
              </Left>
            </Header>
              <Content>
            <Text>Map</Text>
              </Content>
        </Container>
      );
    }
  }
export default Map;*/
