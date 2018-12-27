
import React, { Component } from 'react';
import { ScrollView,Platform, Text, View, StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
//import Drawer from 'react-native-drawer';
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
import AddProblem from "ProjectOne/src/components/addProblem/AddProblem";
import EditProblem from "ProjectOne/src/components/EditProblem/EditProblem";
import ProblemInf from "ProjectOne/src/components/ProblemInf/ProblemInf";
import EditSelectProblem from "ProjectOne/src/components/EditSelectProblem/EditSelectProblem";
import Account from "./src/components/account/Account";
import SideBar from "./SideBar"
import { Container, Header, Content, Footer, FooterTab,  Left, Body, Right, Title, Icon, Button, Drawer } from 'native-base';
import FormTest from "./FormTest";
import MapTry from "./MapTry";
const Navigator = StackNavigator({

  Main:{
    screen: HomeScreen,
    navigationOptions:  {
  headerLeft: ({ tintColor }) => {
    return <Icon name='home' style={{paddingLeft: 10}} onPress={() => this.props.navigation.openDrawer()} />
  }
}
}
});


const DrNv = DrawerNavigator({
'Домашняя страница': {screen: HomeScreen,

 },
 'Домашняя страница модератора': {screen: HomeScreenModer,

  },
Логин: {screen: LogInPage },
'Регистрация': {screen: RegisterPage },
//'Valid': {screen: FormTest },
'Аккаунт':{screen: Account},
//'Изменение аккаунта':{screen: EditAccountPage},
'Добавление проблемы': {screen: AddProblem},
'Изменение фото проблемы': {screen: EditProblem},
//'Изменение выбранной проблемы': {screen: EditSelectProblem},
//'Модерация проблемы':{screen: ProblemListModer},
'MapTry':{screen:MapTry}
});
export default class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  /*render() {
    //  const { navigate } = this.props.navigation;
  //  const {navigate} = this.props.navigation;
const drawerStyles = {
                drawer: { shadowColor: '#ae848b', shadowOpacity: 0.8, shadowRadius: 5},
                main: {paddingLeft: 10}
              }

    return (
<Container>
    <Header>
      <Left>
        <Button transparent onPress={this.openDrawer} >
        <Icon name='menu'  />
        </Button>
      </Left>
      <Body>
        <Title>Map of records</Title>
      </Body>
    </Header>

          <Drawer
          openDrawerOffset={10}
    //   styles={drawerStyles}
            ref={(ref) => { this.drawer = ref; }}
            content={<Navigator />}
            onClose={() => this.closeDrawer()} >
          </Drawer>

</Container>
    );
  }
}*/

 render() {

    return (

       <DrNv />

    );

  }
}

/*export default class App extends Component {

  render() {
   return (
     <Container>

     <Header>
       <Left>
         <Button transparent >
           <Icon name='menu'  />
         </Button>
       </Left>
         <Body>
           <Title>Map of records</Title>
         </Body>
       </Header>
       <MyApp />
      </Container>
       <Footer>
         <FooterTab>
           <Button onPress={() => HomeScreen}>
             <Text>Map</Text>
           </Button>
           <Button>
             <Text>List</Text>
           </Button>
           <Button >
             <Text>My records</Text>
           </Button>
         </FooterTab>
       </Footer>
    // </Container>
   );
 }
}
/*
const CustomDrawerContentComponent = (props) => (
  <Container>
        <Header style={{ height: 1000}}>
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
        </Header>
      </Container>
)
const MainNavigator = TabNavigator({
HomeTab: {
  screen: ListMy
}
});
const MyApp = DrawerNavigator({

  Register: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  },
  Map: {
    screen: Map
  },
  List: {
    screen: List
  },
  ListMy: {
    screen: ListMy

}
},
{
    initialRouteName:'Register',
    contentComonent:CustomDrawerContentComponent,
    drawerOpenRoute:'DrawerOpen',
    draweCloseRoute:'DrawerClose',
    drawertoggleRoute:'DrawerToggle'
  }
)
*/
