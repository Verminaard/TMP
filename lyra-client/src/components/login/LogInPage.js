import React, { Component } from "react";
import { Container, Text, Content, Icon, Form, Item, Input,Button, Left, Right, Header, Toast, Root } from 'native-base';
import {View, StyleSheet } from "react-native";
import { DrawerNavigator } from 'react-navigation';

import RegisterPage from "ProjectOne/src/components/register/RegisterPage";
export default class LogInPage extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='md-home' stlye={{ color: tintColor}} />
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }

  render() {
     const {navigate} = this.props.navigation;
    return (<Container >
              <Content style = {styles.container}>
              <Header style = {styles.header}>
              <Left style={{flex:1}}>
              <Icon name="menu" style = {styles.icon} onPress={() => this.props.navigation.openDrawer()}/>
              </Left>
              </Header>
                <Form >
                  <Item>
                    <Input placeholder="Логин или e-mail" />
                  </Item>
                  <Item last>
                    <Input placeholder="Пароль" />
                  </Item>
                </Form>
                <View style={styles.buttons}>
                <Right>
                <Button  style={styles.logB} onPress={() => navigate('Домашняя страница')}>
                      <Text>Войти</Text>
                </Button>
                </Right>
                <Text> ИЛИ </Text>
                  <Right>
                <Button  style={styles.regB} onPress={() => navigate('Регистрация')}>
                    <Text>Зарегистрироваться</Text>
                </Button>
                  </Right>
                    </View>
              </Content>

    </Container>);
  }

}
const styles = StyleSheet.create ({
  container: {
     flex: 1,

   },
   buttons: {
     flex:1,
     margin: 0,
     alignItems: 'center',
     justifyContent: 'center',
   },
   icon: {
       paddingRight: 350,
       paddingTop:12,
       color: '#F8F8F8'
    },
   header:{
     backgroundColor: '#4682B4'
   },
   logB:{
     flex: 1,

     backgroundColor:'#4682B4',
     alignItems:'center'
   },
   regB:{
     flex: 1,
     backgroundColor:'#32CD32',
     alignItems:'center'

   }
})
