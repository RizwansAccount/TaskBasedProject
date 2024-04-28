import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#38358F', height: '10%', alignItems: 'center', borderBottomRightRadius: 20, borderBottomLeftRadius: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ backgroundColor: '#FFFFFF', height: 70, width: 70, borderRadius: 100 }}></View>
        <View >
          <View style={{ backgroundColor: '#FFFFFF', height: 70, width: 70, borderRadius: 100 }}></View>
          <View style={{ position:'absolute',width:'80%',alignSelf:'center',backgroundColor: '#53656D',justifyContent:'center',alignItems:'center',paddingVertical:'2%',borderRadius:50,bottom:-5 }}>
            <Text>56</Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#FFFFFF', height: 70, width: 70, borderRadius: 100 }}></View>


      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})