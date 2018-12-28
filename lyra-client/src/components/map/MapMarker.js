import React, { Component } from "react";
//import {Container, Text, Content, Icon } from 'native-base';
import { AppRegistry, StyleSheet} from "react-native";
import { DrawerNavigator } from 'react-navigation';
import { Icon, Text, Button, Container, Header, Content, Left, View } from 'native-base'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class MapMarker extends Component {
  state = {
    mapRegion: null,
    lastLat: null,
    lastLong: null,

  }
// сюда надо как то отправить данные с бд, где вместо цифр будут свои
  constructor(props) {
  super(props);
  this.state = {
    region:{
      latitude: 21.123123123,
      longitude: 105.123123123,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
  markers:[{
  title: 'hello',
  description:'desc',
  coordinates: {
    latitude: 3.148561,
    longitude: 101.652778,
    latitudeDelta:  0.00922*1.5,
    longitudeDelta: 0.00421*1.5,
  },
  }
  ]
  }
}


  render() {
     const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <MapView
          style={styles.map}
          region={{
            latitude: 3.148561,
            longitude: 101.652778,
            latitudeDelta:  0.00922*1.5,
            longitudeDelta: 0.00421*1.5,
          }}
          showsUserLocation={true}
          followUserLocation={true}

        >
          {this.state.markers.map(marker => (
          <MapView.Marker
          title={marker.title}
          description={marker.description}
            coordinate={marker.coordinates}
            >

          </MapView.Marker>
        ))}
        </MapView>

      </View>
    );


  /*  <MapView
      style={{
        flex : 1
      }}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
   />);
        /*<View style={styles.container}>
            <MapView style={styles.map}
              region={{
                  latitude: 59.32932349,
                  longitude: 18.06858080,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1
      }}>
                <MapView.Marker
                  coordinate={{
                    atitude: 59.32932349,
                    longitude: 18.06858080
                  }}
                  title={'Title'}
                  description={'Desc'}
                />
            </MapView>
        </View>
    );*/
  }
}

const styles = StyleSheet.create({
  container: {
    //width: '100%',
  //  height: '100%'
  },
  button:{
    backgroundColor:'#4682B4'
  },
  map: {
      ...StyleSheet.absoluteFillObject,
    }  });
    AppRegistry.registerComponent('testCoords', () => testCoords);
/*  container:{
    position: 'absolute',
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
})*/
