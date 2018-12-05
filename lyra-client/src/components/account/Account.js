import React, { Component } from "react";
import {Container, Text, Content, Icon, Form, Item, Input,Button, Left, Right } from 'native-base';
import {View, StyleSheet } from "react-native";
import { DrawerNavigator } from 'react-navigation';
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'
//import ListMy from "./src/components/myList/ListMy";
export default class Account extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='md-home' stlye={{ color: tintColor}} />
    }
  }
  render() {
    return (<Container>
              <Content>
                <Form>
                  <Item>
                    <Input placeholder="Username" />
                  </Item>
                  <Item last>
                    <Input placeholder="Password" />
                  </Item>
                </Form>

                <Button block>
                      <Text>log In</Text>
                </Button>
                <Button block onPress={() => this.props.navigate('ListMy')}>
                    <Text>Register</Text>
                </Button>

              </Content>

    </Container>);
  }
}
const styles = StyleSheet.create ({
  container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
})
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
