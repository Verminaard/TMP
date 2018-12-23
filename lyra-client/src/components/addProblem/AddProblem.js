import React, { Component } from "react";
import {Container, Text, Content, Icon, Form, Item, Input,Button, Left, Right } from 'native-base';
import {View, StyleSheet } from "react-native";
import { DrawerNavigator } from 'react-navigation';
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'
export default class AddProblem extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='md-home' stlye={{ color: tintColor}} />
    }
  }
  render() {
     const {navigate} = this.props.navigation;
    return (<Container>
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

                <Button block onPress={() => navigate('HomeScreen')}>
                      <Text>Добавить фото</Text>
                </Button>


              </Content>

    </Container>);
  }
}
const styles = StyleSheet.create ({
  container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
})
