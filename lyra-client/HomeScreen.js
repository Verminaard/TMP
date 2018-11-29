//import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import React, { Component } from "react";
//import { TabNavigator} from 'react-navigation';
//import { TabBarBottom } from 'react-navigation';
//import { TabView } from 'react-navigation';
import { DrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import Map from "./src/components/map/Map";
import List from "./src/components/list/List";
import ListMy from "./src/components/myList/ListMy";
import { Platform } from 'react-native';
//import { DrawerNavigator } from 'react-navigation';
import { Text, Icon, Button, Container, Header, Content, Left } from 'native-base'

export default class HomeScreen extends Component {
  static navigationOptions = {
headerLeft: <Icon name='menu' style={{paddingLeft: 10}} onPress={() => this.props.navigation.navigate('DrawerOpen')} />

  }
  render() {
    return<MainNavigator>
    </MainNavigator>

  }
}
const MainNavigator = createBottomTabNavigator({

  Map: {
    screen: Map
  },
  List: {
    screen: List
  },
  ListMy: {
    screen: ListMy

}}, {
  //tabBarPosition: 'bottom',
//  animationEnabled: true,
  swipeEnabled: true,
  navigationOptions: {
  showIcon: false,
  showLabel: true,
 }
});

/*class HomeScreen extends Component {
    render () {
      return (
        <Container>
          <Header>
              <Left>
                <Icon name='menu' onPress={() => this.props.navigation.navigate('DrawerOpen')} />
              </Left>
            </Header>
              <Content>
            <Text>Home Screen</Text>
              </Content>
        </Container>
      );
    }
  }
export default HomeScreen;
/*import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}*/
