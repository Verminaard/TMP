
import React, { Component } from 'react';
import { ScrollView,Platform, Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from "./src/components/HomeScreen/HomeScreen";
import HomeScreenModer from "./src/components/HomeScreen/HomeScreenModer";
import Map from "./src/components/map/Map";
import ProblemList from "./src/components/list/ProblemList";
import ProblemListModer from "./src/components/list/ProblemListModer";
import ListMy from "./src/components/myList/ListMy";
import LogInPage from "./src/components/login/LogInPage";
import RegisterPage from "./src/components/register/RegisterPage";
import EditAccountPage from "./src/components/editPage/EditAccountPage";
import EditAccount from "./src/components/editPage/EditAccount";
import AddProblem from "./src/components/addProblem/AddProblem";
import EditProblem from "./src/components/EditProblem/EditProblem";
import ProblemInf from "./src/components/ProblemInf/ProblemInf";
import EditSelectProblem from "./src/components/EditSelectProblem/EditSelectProblem";
import Account from "./src/components/account/Account";
import MapTry from "./MapTry";

import { Container, Header, Content, Footer, FooterTab,  Left, Body, Right, Title, Icon, Button, Drawer } from 'native-base';
const Navigator = createStackNavigator({

  Main:{
    screen: HomeScreen,


}
});
const AccountNavigator = createStackNavigator({

  Main:{
    screen: Account,

},
 Edit:{ screen: EditAccount}
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });
 const AddNavigator = createStackNavigator({
   AddProblem:{
     screen: AddProblem,
 },
  EditProblem:{ screen: EditProblem},
  MapCheck:{screen: MapTry}
 },

 {
   headerMode: 'none',
   navigationOptions: {
     headerVisible: false,
   }
  });

const DrNv = createDrawerNavigator({
'Домашняя страница': {screen: HomeScreen,

 },
 'Домашняя страница модератора': {screen: HomeScreenModer,

  },
Логин: {screen: LogInPage },
'Регистрация': {screen: RegisterPage },
'Аккаунт':{screen: AccountNavigator},
'Добавление проблемы': {screen: AddNavigator}

});
export default class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

 render() {

    return (

       <DrNv />

    );

  }
}
