import React, { Component } from "react";
//import {Container, Text, Content, Icon } from 'native-base';
import { StyleSheet, Dimensions } from "react-native";
import { DrawerNavigator,IconComponent,LabelComponent } from 'react-navigation';
import { Icon, Text, Button, Container, Header, Content, Left, View, Fab } from 'native-base'
import ActionButton from 'react-native-action-button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
MaterialIcons
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
/*const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO */
export default class Map extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="md-locate" stlye={{ color: tintColor}} />
    }
  }
  constructor(props) {
super(props);
this.state = {
markers: [{
  title: 'hello',
  description:'desc',
  coordinates: {
    latitude: 3.148561,
    longitude: 101.652778
  },
},
{
  title: 'hello',
    description:'desc',
  coordinates: {
    latitude: 3.149771,
    longitude: 101.655449
  },
}]
}
}
/*  constructor() {
   super()
   this.state = {
     initialPosition: {
       latitude: 0,
       longitude: 0,
       latitudeDelta: 0,
       longitudeDelta: 0,
     },
   }
 }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({initialPosition: initialRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000});
  }*/
  render() {
    return (
  /*    <View style={{flex: 1}}>
             <MapView
               style={styles.map}
               region={this.state.mapRegion}
               showsUserLocation={true}
               followUserLocation={true}
               onRegionChange={this.onRegionChange.bind(this)}>
               <MapView.Marker
                 coordinate={{
                   latitude: (this.state.lastLat + 0.00050) || -36.82339,
                   longitude: (this.state.lastLong + 0.00050) || -73.03569,
                 }}>
                 <View>
                   <Text style={{color: '#000'}}>
                     { this.state.lastLong } / { this.state.lastLat }
                   </Text>
                 </View>
               </MapView.Marker>
             </MapView>
           </View> */

        <View style={styles.container}>

          <MapView provider={ PROVIDER_GOOGLE } style={styles.map}
          showsUserLocation={true}
       followUserLocation={true}
       zoomEnabled={true}
          initialRegion={ {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {this.state.markers.map(marker => (
          <MapView.Marker draggable
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.description}
             onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
          />

        ))}
          </MapView>
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{

  position: 'absolute',
//  height : SCREEN_HEIGHT,
  // width : SCREEN_WIDTH,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
  position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})
