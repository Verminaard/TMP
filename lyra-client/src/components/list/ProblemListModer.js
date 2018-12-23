import React, { Component } from "react";
import {Container, Header, Content, List, ListItem, Text, Left, Right, Icon, Button } from 'native-base';
//import { View, Text, StyleSheet } from "react-native";
//import { DrawerNavigator } from 'react-navigation';
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import ProblemInf from "ProjectOne/src/components/ProblemInf/ProblemInf";

export default class ProblemListModer extends Component {
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

     'Листы',
     'Новый'
   ];
   const {navigate} = this.props.navigation;

    return (
      <Container>

      <Content>
        <List dataArray={items}
          renderRow={(item) =>
            <ListItem onPress={() => navigate('ProblemInf')}>
              <Text >{item}</Text>
                <Button >
                  <Text>Принять</Text>
                </Button>
                <Button>
                  <Text>Отклонить</Text>
                </Button>
            </ListItem>
          }>
        </List>
      </Content>
        </Container>);
  }
}
