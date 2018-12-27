import React, { Component } from "react";
import {Container, Text, Content, Icon, Form, Item, Input,Button, Left, Right,Thumbnail,Header } from 'native-base';
import {View, StyleSheet,Image } from "react-native";
import { DrawerNavigator } from 'react-navigation';
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'
export default class EditProblem extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='md-home' stlye={{ color: tintColor}} />
    }
  }
  render() {
     const {navigate} = this.props.navigation;
     const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
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
                <Image source={{uri: uri}}
                     style={{width: 300, height:300  }} />
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
