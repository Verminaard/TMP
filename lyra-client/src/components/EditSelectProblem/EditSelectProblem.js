import React, { Component } from "react";
import {Container, Text, Content, Icon, Form, Item, Input,Button, Left, Right,Label } from 'native-base';
import {View, StyleSheet,Image } from "react-native";
import { DrawerNavigator } from 'react-navigation';
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'
export default class EditSelectProblem extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='md-home' stlye={{ color: tintColor}} />
    }
  }
  constructor(props) {
    super(props);
   this.state = {label : "Тут заголовок", type:"ТИП", inf : "инф", status : "статус"}
  }
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
     const {navigate} = this.props.navigation;

    return (<Container>
              <Content>
              <Form>
                <Image source={{uri: uri}}
                     style={{width: 100, height:100,  }} />
                  <Item floatingLabel>
                    <Label>Заголовок:</Label>
                    <Input  onChangeText={(label) => this.setState({label})} value={this.state.label}/>
                  </Item>

                  <Item floatingLabel>
                    <Label>Тип:</Label>
                    <Input onChangeText={(type) => this.setState({type})} value={this.state.type}/>
                  </Item>
                <Item floatingLabel>
                <Label>Описание:</Label>
                  <Input onChangeText={(inf) => this.setState({inf})} value={this.state.inf}/>
                </Item>
                <Item floatingLabel last>
                <Label>Статус:</Label>
                  <Input onChangeText={(status) => this.setState({status})} value={this.state.status}/>
                </Item>
              </Form>
                <Button block onPress={() => navigate('HomeScreen')}>
                      <Text>Изменить фото</Text>
                </Button>
                <Button block onPress={() => navigate('HomeScreen')}>
                      <Text>Сохранить</Text>
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
