import React, { Component } from "react";
import {Container, Text, Content, Icon, Form, Item, Input,Button, Left, Right,CheckBox,Body, List, ListItem, Thumbnail } from 'native-base';
import {View, StyleSheet } from "react-native";
import { DrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import CheckboxFormX from 'react-native-checkbox-form';
import EditAccountPage from "ProjectOne/src/components/editPage/EditAccountPage";
const mockData = [
    {
        label: 'Problems',
        value: 'one'
    },
    {
        label: 'Proposal',
        value: 'two'
    },
    {
        label: 'MyList',
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

    <Content>

            <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square source={{ uri: 'Image URL' }} />
                  </Left>
                  <Body>
                    <Text>Account name</Text>
                      <Text note numberOfLines={1}> </Text>
                  </Body>
                  <Right>
                    <Button transparent onPress={() => navigate('EditAccountPage')}>
                      <Text>Edit</Text>
                    </Button>
                  </Right>
                </ListItem>
              </List>
      <View style={styles.container}>
          <View style={{ marginVertical: 10, backgroundColor: "#ffffff" }} >
            <Text center>
            Show me
            </Text>
              <CheckboxFormX
                  style={{ width: 350 - 30 }}
                  dataSource={mockData}
                 itemShowKey="label"
                 itemCheckedKey="RNchecked"
                  iconSize={30}
                  formHorizontal={false}
                  labelHorizontal={true}
                  onChecked={(item) => this._onSelect(item)}
              />
          </View>
      </View>
          <Button block>
            <Text>Add problem</Text>
          </Button>
          <Button block >
            <Text>Log Out</Text>
          </Button>
    </Content>
    </Container>
    );
  }
}
/*  render() {
    return (
              <Container>

              <Content>

              <ListItem>
                <CheckBox checked={true} />
                  <Body>
                    <Text>Daily Stand Up</Text>
                  </Body>
              </ListItem>
              <ListItem>
                <CheckBox checked={false} onChecked={false}/>
                  <Body>
                    <Text>Discussion with Client</Text>
                  </Body>
              </ListItem>
              <ListItem>
                <CheckBox checked={false} color="green"/>
                  <Body>
                    <Text>Finish list Screen</Text>
                  </Body>
              </ListItem>

                <Button block>
                      <Text>Add problem</Text>
                </Button>
                <Button block >
                    <Text>Log Out</Text>
                </Button>

              </Content>

              </Container>
              );
  }
}*/
const styles = StyleSheet.create ({
  container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
})
