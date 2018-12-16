import React, { Component } from "react";
import {Container, Text, Content, Icon, Form, Item, Input,Button, Left, Right } from 'native-base';
import {View, StyleSheet } from "react-native";
import { DrawerNavigator } from 'react-navigation';
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import RegisterPage from "ProjectOne/src/components/register/RegisterPage";
export default class LogInPage extends Component {
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
                    <Input placeholder="Username" />
                  </Item>
                  <Item last>
                    <Input placeholder="Password" />
                  </Item>
                </Form>

                <Button block onPress={() => navigate('HomeScreen')}>
                      <Text>log In</Text>
                </Button>
                <Button block onPress={() => navigate('Register')}>
                    <Text>Register</Text>
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

//
/*import { View, Text, StyleSheet } from "react-native";
import { DrawerNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
class ListMy extends Component {
    render () {
      return (
        <Container>
          <Header>
              <Left>
                <Icon name='menu' onPress={() => this.props.navigation.navigate('DrawerOpen')} />
              </Left>
            </Header>
              <Content>
            <Text>myList</Text>
              </Content>
        </Container>
      );
    }
  }
export default ListMy;
*/
