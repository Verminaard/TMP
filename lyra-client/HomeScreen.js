//import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import React, { Component } from "react";
//import { TabNavigator} from 'react-navigation';
//import { TabBarBottom } from 'react-navigation';
//import { TabView } from 'react-navigation';
import { DrawerNavigator, createBottomTabNavigator, StackNavigator } from 'react-navigation';
import Map from "./src/components/map/Map";
import ProblemList from "./src/components/list/ProblemList";
import ListMy from "./src/components/myList/ListMy";
import EditProblem from "ProjectOne/src/components/EditProblem/EditProblem";
import ProblemInf from "ProjectOne/src/components/ProblemInf/ProblemInf";
import { Platform } from 'react-native';
//import { DrawerNavigator } from 'react-navigation';

import { Text, Icon, Button, Container, Header, Content, Left } from 'native-base'
import {SERVER_ADRES} from "./src/const/constants";

export default class HomeScreen extends Component {

  constructor(){
    super();
      this.state = {
          entryList: {}
      };

      this.loadEntry = this.loadEntry.bind(this);
  }

  componentDidMount() {
  this.loadEntry();
  }

  loadEntry(){
      fetch(SERVER_ADRESS + '/entry/list')
          .then(
              function(response) {
                  if (response.status !== 200) {
                      console.log('Looks like there was a problem. Status Code: ' +
                          response.status);
                      return;
                  }

                  // Examine the text in the response
                  response.json().then(function(data) {
                      console.log(data);
                  });
              }
          )
          .catch(function(err) {
              console.log('Fetch Error :-S', err);
          });
  }

  static navigationOptions = {
headerLeft: <Icon name='menu' style={{paddingLeft: 10}} onPress={() => navigate("DrawerOpen")} />
  };

  render() {
const {navigate} = this.props.navigation;
    return<MainNavigator>
    </MainNavigator>

  }
}

const Navigator = StackNavigator({

  ProblemInf: {screen: ProblemInf}

});

const MainNavigator = createBottomTabNavigator({

  Map: {
    screen: Map
  },
  List: {
    screen: ProblemList
  },
  ListMy: {
    screen: ListMy

}}, {
  swipeEnabled: true,
  navigationOptions: {
  showIcon: false,
  showLabel: true,
 }
});

