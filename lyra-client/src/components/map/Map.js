import React, { Component } from "react";
//import {Container, Text, Content, Icon } from 'native-base';
//import { View, Text, StyleSheet } from "react-native";
import { DrawerNavigator } from 'react-navigation';
import { Icon, Text, Button, Container, Header, Content, Left } from 'native-base'

export default class Map extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="md-locate" stlye={{ color: tintColor}} />
    }
  }
  render() {
    return (<Container>
      
          <Content>
        <Text>Map</Text>
          </Content>
    </Container>);
  }
}


/*import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
class Map extends Component {
    render () {
      return (
        <Container>
          <Header>
              <Left>
                <Icon name='menu' onPress={() => this.props.navigation.navigate('DrawerOpen')} />
              </Left>
            </Header>
              <Content>
            <Text>Map</Text>
              </Content>
        </Container>
      );
    }
  }
export default Map;*/
