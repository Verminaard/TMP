import React, { Component } from "react";
import {Container, Text, Content, Icon, Form, Item, Input,Button, Left, Right,Header } from 'native-base';
import {View, StyleSheet,Image  } from "react-native";
import { DrawerNavigator } from 'react-navigation';
 import PhotoUpload from 'react-native-photo-upload'
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

                <Form style={{alignItems:'center'}}>
                <PhotoUpload
                  onPhotoSelect={avatar => {
                    if (avatar) {
                      console.log('Image base64 string: ', avatar)
                    }
                  }}
                >
                  <Image
                    style={{
                      paddingVertical: 30,
                      width: 200,
                      height: 200,

                    }}
                    resizeMode='cover'
                    source={{
                      uri: ' '
                    }}
                  />
                </PhotoUpload>
                       </Form>
                         <View style={styles.buttons}>
                       <Left>
                         <Button style={styles.addB} onPress={() => navigate('EditProblem')}>
                               <Text>Добавить фото</Text>
                         </Button>
                           </Left>
                         <Right>
                         <Button style={styles.addB} onPress={() => navigate('MapTry')}>
                               <Text>Отметить на карте</Text>
                         </Button>
                         </Right>
                           </View >
                           <Form style={{flex:1, alignItems:'center'}}>
                                <Left>
                           <Button style={styles.saveB} onPress={() => navigate('Домашняя страница')}>
                                 <Text>Сохранить</Text>
                           </Button>
                                </Left>
                           </Form  >
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
  addB:{
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
      color: '#F8F8F8'
   },
   header:{
     backgroundColor: '#4682B4'
   }
})
