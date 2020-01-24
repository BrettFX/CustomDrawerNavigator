/*
Following tutorial: https://www.youtube.com/watch?v=7uhJN4kVS6g&t=0s
Left off at (1:43): https://youtu.be/7uhJN4kVS6g?t=103
*/

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const { width } = Dimensions.get('window');
export default function App() {
  return (
    <AppDrawerNavigator/>
  );
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./assets/react-native.png')} style={{height:120, width:120, borderRadius: 60}} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
},{
  contentComponent: CustomDrawerComponent,
  drawerWidth: width,
  contentOptions: {
    activeTintColor: 'orange'
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
