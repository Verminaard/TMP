import React, { Component } from "react";
import {Container, Text, Content, Icon } from 'native-base';
//import { View, Text, StyleSheet } from "react-native";
import { DrawerNavigator } from 'react-navigation';
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

export default class ListMy extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='md-home' stlye={{ color: tintColor}} />
    }
  }
  render() {
    return (<Container>
            <Content>
          
              <Text>
            ListMy
              </Text>

            </Content>
    </Container>);
  }
}

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
