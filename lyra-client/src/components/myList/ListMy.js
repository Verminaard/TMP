import React, { Component } from "react";
import {Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
//import { View, Text, StyleSheet } from "react-native";
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import EditSelectProblem from "ProjectOne/src/components/EditSelectProblem/EditSelectProblem";
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

export default class ListMy extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='md-home' stlye={{ color: tintColor}} />
    }
  }
  render() {
     const {navigate} = this.props.navigation;
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
            <ListItem onPress={() => navigate('EditSelectProblem')}>
              <Text >{item}</Text>
            </ListItem>
          }>
        </List>
      </Content>
        </Container>);
  }
}

/*import { View, Text, StyleSheet } from "react-native";
import { DrawerNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
class ListMy extends Component {
    render () {
      return (
        <Container>
          <Header>
              <Left>
                <Icon name='menu' onPress={() => this.props.navigation.navigate('DrawerOpen')} />
              </Left>
            </Header>
              <Content>
            <Text>myList</Text>
              </Content>
        </Container>
      );
    }
  }
export default ListMy;
*/
