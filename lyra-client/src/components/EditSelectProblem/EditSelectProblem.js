import React, { Component } from "react";
import {Container, Text, Content, Icon, Form, Item, Input,Button, Left, Right,Label,Body } from 'native-base';
import {View, StyleSheet,Image } from "react-native";
import { DrawerNavigator } from 'react-navigation';
export default class EditSelectProblem extends Component {

  constructor(props) {
    super(props);
   this.state = {label : "Тут заголовок", type:"ТИП", inf : "инф", status : "статус"}
  }
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
     const {navigate} = this.props.navigation;

    return (<Container>
              <Content>
              <Form style= {{alignItems:'center'}}>
                <Image source={{uri: uri}}
                     style={{width: 300, height:300  }} />
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

              <View style={styles.buttons}>
              <Left>
                <Button style={styles.editB} onPress={() => navigate('HomeScreen')}>
                      <Text>Изменить фото</Text>
                </Button>
                  </Left>
                <Right>
                <Button style={styles.saveB} onPress={() => navigate('HomeScreen')}>
                      <Text>Сохранить</Text>
                </Button>
                </Right>
                </View>
              </Content>

    </Container>);
  }
}
const styles = StyleSheet.create ({
   buttons: {
     flex:1,
     margin: 20,
     flexDirection: 'row',

   },
   editB:{
     flex: 1,
     backgroundColor:'#4682B4',
     alignItems:'center'
   },
   saveB:{
     flex: 1,
     backgroundColor:'#32CD32',
     alignItems:'center'

   }
})
