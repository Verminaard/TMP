import React, { Component } from "react";
import {Container, Header, Content, List, ListItem, Text, Left, Right, Icon, Button,Body } from 'native-base';
import {View, StyleSheet,Image } from "react-native";
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import EditSelectProblem from "ProjectOne/src/components/EditSelectProblem/EditSelectProblem";

export default class ListMy extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='md-home' stlye={{ color: tintColor}} />
    }
  }
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    var items = [
     'тут',
    // 'Nathaniel Clyne',
     'мои',

     'Записи'
   ];
   var describe = [
    'Сюда описание',
  ];
   const {navigate} = this.props.navigation;
    return (
      <Container >
      <Content >
        <List dataArray={items}
          renderRow={(item) =>
            <ListItem onPress={() => navigate('EditSelectProblem')}>
            <Left>
            <View style={{flex:1}}>
            <Image source={{uri: uri}}
                 style={{width: 100, height:100}} />
            </View>
            </Left>
            <Body style={{flex:2}}>
              <Text >{item}</Text>
              <View style={{flex:2}}>
                <Text note >{describe}</Text>
              </View>
              </Body>
            </ListItem>
          }>
        </List>
      </Content>
        </Container>);
  }
}
