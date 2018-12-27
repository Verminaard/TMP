import React, { Component } from "react";
import {Container, Text, Content, Icon, Form, Item, Input,Button, Left, Right,CheckBox,Body, List, ListItem, Thumbnail,Header } from 'native-base';
import {View, StyleSheet } from "react-native";
import { DrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import CheckboxFormX from 'react-native-checkbox-form';
import EditAccountPage from "ProjectOne/src/components/editPage/EditAccountPage";
import AddProblem from "ProjectOne/src/components/addProblem/AddProblem";

const mockData = [
    {
        label: 'Проблемы',
        value: 'one'
    },
    {
        label: 'Предложения',
        value: 'two'
    },
    {
        label: 'Мои записи',
        value: 'three'
    },
];
export default class Account extends Component {
  _onSelect = ( item ) => {
      console.log(item);
    };

   render() {
      const {navigate} = this.props.navigation;
    return (
    <Container>
    <Header style={styles.header}>
    <Icon name="menu" style = {styles.icon} onPress={() => this.props.navigation.openDrawer()}/>
    </Header>
    <Content>

            <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square source={{ uri: 'Image URL' }} />
                  </Left>
                  <Body>
                    <Text>ЛОГИН</Text>
                      <Text note numberOfLines={1}> </Text>
                  </Body>
                  <Right>
                    <Button transparent onPress={() => navigate('EditAccountPage')}>
                      <Text>Изменить</Text>
                    </Button>
                  </Right>
                </ListItem>
              </List>
      <View style={styles.container}>
          <View style={{
             marginVertical: 10,
             backgroundColor: "#ffffff"
            }} >
            <Text center>
            Show me
            </Text>
              <CheckboxFormX
                  style={{
                    paddingRight: 200,
                    width: 400 - 30
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
          <Button block onPress={() => navigate('AddProblem')}>
            <Text>Добавить проблему</Text>
          </Button>
          <Button block >
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
     backgroundColor: '#95D3BF'
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
