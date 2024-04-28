import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import themeStyles from '../styles/themeStyles';
import CustomText from '../components/CustomText';
import { useGetChaptersQuery, useGetSubjectsQuery } from '../redux/storeApis';

const HomeScreen = () => {

  const user_id = '65edc62cc1aa0078000f9c01';
  const grade_id = '6625514923f87505231c8f89';

  const passingData = {user_id, grade_id};

  const { data: allSubjects, isSuccess : isSuccessSubjects } = useGetSubjectsQuery(passingData);
  const defaultSelectedSubjectId = allSubjects?.[0]?._id;

  const [subjectId, setSubjectId] = useState(null);

  const { data : allLessons, isSuccess : isSuccessLessons } = useGetChaptersQuery(subjectId?? defaultSelectedSubjectId);

  useEffect(()=>{ setSubjectId(defaultSelectedSubjectId); },[isSuccessSubjects]);

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
        <CustomText secondary heading >{'Subjects'}</CustomText>
        <TouchableOpacity>
          <CustomText>{'See all'}</CustomText>
        </TouchableOpacity>
      </View>

      <View style={styles.allSubjectsBox}>
        {allSubjects?.map((subDetail, i)=>{
          return (
            <TouchableOpacity onPress={()=> setSubjectId(subDetail?._id)} key={i} style={[styles.subjectNameBox, subDetail?._id == subjectId && {borderWidth: 1}]}>
              <Image source={require('../assets/images/subIcon.png')} style={{height:30, width:30}} />
              <CustomText heading secondary >{subDetail?.subject?.Subject_name}</CustomText>
            </TouchableOpacity>
          )
        })}
      </View>

      <FlatList data={allLessons} 
        contentContainerStyle={styles.allLessonsContainer} 
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index})=>{
          return(
           <View style={styles.allLessonsBox}>
            <TouchableOpacity key={index} style={styles.lessonNameBox}>
              <Image source={require('../assets/images/lessonIcon.png')} style={{height:70, width:70}} />
              <CustomText white >{`Lesson ${index+1}`}</CustomText>
            </TouchableOpacity>
           </View>
          )
      }} 
      />

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  headerBox:{ backgroundColor: themeStyles.SECONDARY, height: '10%', alignItems: 'center', borderBottomRightRadius: 20, borderBottomLeftRadius: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:'5%' },
  smallCircle : { backgroundColor: '#FFFFFF', height: 50, width: 50, borderRadius: 25 },
  ratingTxt:{ position:'absolute', width:50, backgroundColor: '#53656D', justifyContent:'center', alignItems:'center', paddingVertical:'2%',borderRadius:50,bottom:-5 },
  subjectBox :{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:'5%', marginTop:'5%' },
  allSubjectsBox:{flexDirection:'row', paddingHorizontal:'5%', marginTop:'5%', gap:22,},
  subjectNameBox:{paddingHorizontal:'3%', paddingVertical:'2%', borderRadius:5, minWidth:'18%', flexDirection:'row', alignItems:'center', justifyContent:'center', gap:5, borderColor: themeStyles.SECONDARY, backgroundColor: themeStyles.PRIMARY,},
  allLessonsContainer:{alignSelf:'center', paddingHorizontal:'10%',paddingVertical:'5%', backgroundColor:themeStyles.LIGHT, borderRadius:24, marginTop:'5%'},
  allLessonsBox:{width:'50%', alignItems:'center',},
  lessonNameBox:{ height:120, width:120, borderRadius:60, alignItems:'center', justifyContent:'center', 
  backgroundColor:themeStyles.PRIMARY, marginHorizontal:'5%', marginVertical:'5%',  },
});