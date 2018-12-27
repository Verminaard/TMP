import React, { Component } from "react";
import {Container, Text, Content, Icon, Form, Item, Input,Button, Left, Right,Header } from 'native-base';
import {View, StyleSheet,Image  } from "react-native";
import { DrawerNavigator } from 'react-navigation';
export default class AddProblem extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='md-home' stlye={{ color: tintColor}} />
    }
  }
  render() {
     const {navigate} = this.props.navigation;
    return (<Container>
      <Header style = {styles.header}>
      <Left style={{flex:1}}>
      <Icon name="menu" style = {styles.icon} onPress={() => this.props.navigation.openDrawer()}/>
      </Left>
      </Header>
              <Content>
                <Form>
                  <Item>
                    <Input placeholder="Заголовок" />
                  </Item>
                  <Item>
                    <Input placeholder="Тип заявки" />
                  </Item>
                  <Item last>
                    <Input placeholder="Описание" />
                  </Item>
                </Form>
                <Image source={{uri: 'URL'}}
                     style={{width: 300, height:300 }} />
                <Button style={styles.addB} onPress={() => navigate('Изменение фото проблемы')}>
                      <Text>Добавить фото</Text>
                </Button>


              </Content>

    </Container>);
  }
}
const styles = StyleSheet.create ({
  buttons: {
    flex:1,
    margin: 20,
  alignItems:'center'

  },
  addB:{
    flex: 1,
    backgroundColor:'#4682B4',
    alignItems:'center'
  },

  icon: {
      paddingRight: 350,
      paddingTop:12,
      color: '#F8F8F8'
   },
   header:{
     backgroundColor: '#4682B4'
   }
})
