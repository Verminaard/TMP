
import React, { Component } from 'react';
import { ScrollView,Platform, Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import HomeScreenModer from "./HomeScreenModer";
import SettingsScreen from "./SettingsScreen";
import Map from "./src/components/map/Map";
import ProblemList from "./src/components/list/ProblemList";
import ProblemListModer from "./src/components/list/ProblemListModer";
import ListMy from "./src/components/myList/ListMy";
import LogInPage from "./src/components/login/LogInPage";
import RegisterPage from "./src/components/register/RegisterPage";
import EditAccountPage from "ProjectOne/src/components/editPage/EditAccountPage";
import EditAccount from "ProjectOne/src/components/editPage/EditAccount";
import AddProblem from "ProjectOne/src/components/addProblem/AddProblem";
import EditProblem from "ProjectOne/src/components/EditProblem/EditProblem";
import ProblemInf from "ProjectOne/src/components/ProblemInf/ProblemInf";
import EditSelectProblem from "ProjectOne/src/components/EditSelectProblem/EditSelectProblem";
import Account from "./src/components/account/Account";
import SideBar from "./SideBar"
import { Container, Header, Content, Footer, FooterTab,  Left, Body, Right, Title, Icon, Button, Drawer } from 'native-base';
import FormTest from "./FormTest";
import MapTry from "./MapTry";
import AuthService from "./src/auth/AuthService";
import withAuth from "./src/components/hocs/withAuth";

const Auth = new AuthService();

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


class App extends Component {
    constructor(){
       super();

        this.state = {
            isLoginIn: false
        }
    }

    async componentWillReceiveProps(){
        console.log("onRecive");
        let loginIn = await Auth.loggedIn();
        this.setState({
            isLoginIn: loginIn
        });
    }

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

 render() {
     console.log(this.state.isLoginIn);
     const navigation = !(!!this.state.isLoginIn) ?
         {
             'Домашняя страница': {screen: HomeScreen,},
             Логин: {screen: LogInPage },
             'Регистрация': {screen: RegisterPage },

             'MapTry':{screen:MapTry}
         }:
         {
             'Домашняя страница': {screen: HomeScreen,},
             'Аккаунт':{screen: AccountNavigator},
             'Добавление проблемы': {screen: AddNavigator},

             'MapTry':{screen:MapTry}
         };
    console.log("nav", navigation);
     const DrNv = createDrawerNavigator(navigation);
    return (

       <DrNv/>

    );

  }
}

export default withAuth(App);