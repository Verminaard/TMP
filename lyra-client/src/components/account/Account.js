import React, { Component } from "react";
import {Container, Text, Content, Icon, Form, Item, Input,Button, Left, Right,CheckBox,Body, List, ListItem, Thumbnail,Header } from 'native-base';
import {View, StyleSheet, Image } from "react-native";
import { DrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import CheckboxFormX from 'react-native-checkbox-form';
import EditAccountPage from "ProjectOne/src/components/editPage/EditAccountPage";
import AddProblem from "ProjectOne/src/components/addProblem/AddProblem";
 import PhotoUpload from 'react-native-photo-upload';
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
const mockData = [
    {
        label: '      Проблемы',
        value: 'one'
    },
    {
        label: 'Предложения',
        value: 'two'
    },
    {
        label: '    Мои записи',
        value: 'three'
    },
];
export default class Account extends Component {
  _onSelect = ( item ) => {
      console.log(item);
    };
    constructor(props) {
      super(props);
     this.state = {login : "Сюда логин", name: "сюда имя", surname:"сюда фамилия", patronymic:"Отчество"}
    }
   render() {
      const {navigate} = this.props.navigation;
    return (
    <Container>
    <Header style = {styles.header}>
    <Left style={{flex:1}}>
    <Icon name="menu" style = {styles.icon} onPress={() => this.props.navigation.openDrawer()}/>
    </Left>
    </Header>
    <Content>

            <List>
                <ListItem thumbnail>
                <PhotoUpload
                  onPhotoSelect={avatar => {
                    if (avatar) {
                      console.log('Image base64 string: ', avatar)
                    }
                  }}
                >
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 75
                    }}
                    resizeMode='cover'
                    source={{
                      uri: ' '
                    }}
                  />
                </PhotoUpload>
                  <Body>
                        <Text >ЛОГИН:  {this.state.login}</Text>
                          <Text >ФАМИЛИЯ:  {this.state.surname}</Text>
                            <Text >ИМЯ:  {this.state.name}</Text>
                            <Text >ОТЧЕСТВО:  {this.state.patronymic}</Text>

                  </Body>
                  <Right>
                    <Button transparent onPress={() => navigate('Edit')}>
                    <Icon name="md-create" style = {{color:'#4682B4'}} />
                    </Button>
                  </Right>
                </ListItem>
              </List>
      <View style={styles.container}>
          <View style={{
             marginVertical: 10,
             backgroundColor: "#ffffff"
            }} >
              <Left>
            <Text center>
            Показывать мне
            </Text>
              </Left>
              <CheckboxFormX
                  style={{
                    paddingRight: 200,
                  //  width: 400 - 30
                  }}
                  dataSource={mockData}
                  itemCheckedKey="RNchecked"
                  itemShowKey="label"
                  iconSize={30}
                  iconPaddingRight={20}
                  formHorizontal={false}
                  labelHorizontal={true}
                  onChecked={(item) => this._onSelect(item)}
              />
          </View>
      </View>
          <Button block style={styles.buttons} onPress={() => navigate('Добавление проблемы')}>
            <Text>Добавить проблему</Text>
          </Button>
            <Text>                              </Text>
          <Button block  style={styles.buttons}>
            <Text>Выход</Text>
          </Button>
    </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
  //   backgroundColor: '#95D3BF'
},
icon: {
    color: '#F8F8F8'
 },
 header:{
   backgroundColor: '#4682B4'
 },
 buttons:{
   backgroundColor: '#4682B4'
 }
})
