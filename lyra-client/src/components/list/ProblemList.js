import React, { Component } from "react";
import {Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
//import { View, Text, StyleSheet } from "react-native";
//import { DrawerNavigator } from 'react-navigation';
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'
export default class ProblemList extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='md-list' stlye={{ color: tintColor}} />
    }
  }
  render() {
    var items = [
     'Это',
    // 'Nathaniel Clyne',
     'Динамические',
     
     'Листы'
   ];
    return (
      <Container>

      <Content>
        <List dataArray={items}
          renderRow={(item) =>
            <ListItem>
              <Text>{item}</Text>
            </ListItem>
          }>
        </List>
      </Content>
        </Container>);
  }
}


/*class List extends Component {
    render () {
      return (
        <Container>
          <Header>
              <Left>
                <Icon name='menu' onPress={() => this.props.navigation.navigate('DrawerOpen')} />
              </Left>
            </Header>
              <Content>
            <Text>List</Text>
              </Content>
        </Container>
      );
    }
  }
export default List;*/
