import React, { Component } from "react";
import {Container, Text, Content, Icon, Form, Item, Input,Button, Left, Right,Thumbnail,Label } from 'native-base';
import {View, StyleSheet, Image } from "react-native";
import { DrawerNavigator } from 'react-navigation';
import MapMarker from "ProjectOne/src/components/map/MapMarker";
export default class ProblemInf extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='md-home' stlye={{ color: tintColor}} />
    }
  }
  constructor(props) {
    super(props);
   this.state = {author : "Автор", inf : "инф", status : "статус"}
  }
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
     const {navigate} = this.props.navigation;
    return (<Container>
              <Content>

                <Form>
                <Image source={{uri: uri}}
                       style={{width: 100, height:100,  alignItems: 'center',}} />
                  <Item floatingLabel>
                  <Label>Заголовк:</Label>
                    <Input disabled={true} value={this.state.author}/>
                  </Item>
                  <Item floatingLabel>
                  <Label>Тип:</Label>
                    <Input disabled={true} value={this.state.inf}/>
                  </Item>
                  <Item floatingLabel last>
                  <Label>Статус:</Label>
                    <Input disabled={true} value={this.state.status}/>
                  </Item>
                </Form>
                <Form style={{flex:1, alignItems:'center'}}>
                     <Left>
                <Button style={styles.saveB} onPress={() => navigate('MapMarker')}>
                      <Text>Найти на карте</Text>
                </Button>
                     </Left>
                </Form  >
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
   saveB:{
     flex: 1,
     margin: 10,
     backgroundColor:'#4682B4',
     alignItems:'center'

   },
})
