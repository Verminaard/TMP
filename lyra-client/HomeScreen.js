import { View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { DrawerNavigator, createBottomTabNavigator,TabNavigator, StackNavigator } from 'react-navigation';
import Map from "./src/components/map/Map";
import ProblemList from "./src/components/list/ProblemList";
import ListMy from "./src/components/myList/ListMy";
import EditSelectProblem from "ProjectOne/src/components/EditSelectProblem/EditSelectProblem";
import ProblemInf from "ProjectOne/src/components/ProblemInf/ProblemInf";
import { Platform } from 'react-native';

<<<<<<< HEAD
import { Text, Icon, Button, Container, Header, Content, Left,Label,Right } from 'native-base'

export default class HomeScreen extends Component {

=======
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

>>>>>>> b37e4eba721b19c2c78bfc54d7a3d31e8e5d504f
  render() {
const {navigate} = this.props.navigation;
    return(
      <Container>
      <Header style = {styles.header}>
      <Left style={{flex:1}}>
      <Icon name="menu" style = {styles.icon} onPress={() => this.props.navigation.openDrawer()}/>
      </Left>
      </Header>
        <MainNavigator />
    </Container>

);
  }
}
<<<<<<< HEAD
=======

const Navigator = StackNavigator({

  ProblemInf: {screen: ProblemInf}

});

const MainNavigator = createBottomTabNavigator({
>>>>>>> b37e4eba721b19c2c78bfc54d7a3d31e8e5d504f

const ListMyNavigator = StackNavigator({
  ListMy: {
    screen: ListMy
  },
EditSelectProblem: {screen: EditSelectProblem}
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });
const ProblemListNavigator = StackNavigator(
  {
  List: {
    screen: ProblemList
},
ProblemInf: {screen: ProblemInf}
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
);
const MainNavigator = createBottomTabNavigator({
  'КАРТА': {
    screen: Map,

  },
  'СПИСОК': {
    screen: ProblemListNavigator,

  },
  'МОИ ЗАПИСИ': {
    screen: ListMyNavigator,

}},
{

  tabBarOptions: {

<<<<<<< HEAD
=======
}}, {
  swipeEnabled: true,
  navigationOptions: {
>>>>>>> b37e4eba721b19c2c78bfc54d7a3d31e8e5d504f
  showIcon: false,
  showLabel: true,
  activeTintColor: '#F8F8F8',
  inactiveTintColor: '#A9A9A9',
  labelStyle: {
        fontSize: 15,
        paddingVertical: 15
      },
  style: {
            backgroundColor: '#4682B4'
        }
}
});
<<<<<<< HEAD
const styles = StyleSheet.create ({
  icon: {
      color: '#F8F8F8'
   },
   header:{
     backgroundColor: '#4682B4'
   }
})
=======

>>>>>>> b37e4eba721b19c2c78bfc54d7a3d31e8e5d504f
