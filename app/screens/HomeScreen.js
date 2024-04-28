import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import themeStyles from '../styles/themeStyles';
import CustomText from '../components/CustomText';

const HomeScreen = () => {

  // ********** Header component ********** //
  const ViewHeader =()=>{
    return (
      <View style={styles.headerBox}>

        <TouchableOpacity style={styles.smallCircle}>

        </TouchableOpacity>

        <View>
          <View style={styles.smallCircle}></View>
          <View style={styles.ratingTxt}>
            <CustomText white >56</CustomText>
          </View>
        </View>

        <TouchableOpacity style={styles.smallCircle}>
      
        </TouchableOpacity>

      </View>
    )
  };

  return (
    <View style={{ flex: 1 }}>

      <ViewHeader/>

      <View style={styles.subjectBox} >
        <CustomText secondary heading >{'Subject Name'}</CustomText>
        <TouchableOpacity>
          <CustomText>{'See all'}</CustomText>
        </TouchableOpacity>
      </View>

      

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  headerBox:{ backgroundColor: themeStyles.SECONDARY, height: '10%', alignItems: 'center', borderBottomRightRadius: 20, borderBottomLeftRadius: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:'5%' },
  smallCircle : { backgroundColor: '#FFFFFF', height: 50, width: 50, borderRadius: 25 },
  ratingTxt:{ position:'absolute', width:50, backgroundColor: '#53656D', justifyContent:'center', alignItems:'center', paddingVertical:'2%',borderRadius:50,bottom:-5 },
  subjectBox :{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:'5%', marginTop:'5%' }
});