import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomText from '../components/CustomText';
import themeStyles from '../styles/themeStyles';

const QuizScreen = () => {

    const navigation = useNavigation();
    const quizData = [
        {
            id: 1,
            type: 'info',
            question: 'here is method how to multiply',
            image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Simple_multiplication.png",
        },
        {
            id: 2,
            type: 'info',
            question: 'here is single num multiplication',
            image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Simple_multiplication.png",
        },
        {
            id: 3,
            type: 'info',
            question: 'here is double num multiplication',
            image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Simple_multiplication.png",
        },
        {
            id: 4,
            type: 'mcqs',
            question: '12 x 8',
            options: [
                { isRight: false, answer: '10' },
                { isRight: false, answer: '112' },
                { isRight: false, answer: '82' },
                { isRight: true, answer: '96' },
            ]
        },
        {
            id: 5,
            type: 'mcqs',
            question: '8 x 8',
            options: [
                { isRight: false, answer: '62' },
                { isRight: false, answer: '58' },
                { isRight: false, answer: '64' },
                { isRight: true, answer: '46' },
            ]
        },
    ];
    const questionTypes = { info:'info', mcqs:'mcqs' };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);

    useEffect(()=>{ setCurrentQuestion(quizData[currentIndex]) },[currentIndex]);

    const fnOnNextQuestion = () => {
        if (currentIndex < quizData.length-1) { setCurrentIndex(prevIndex => prevIndex + 1); } 
        else {  navigation.goBack();  }
    };

    return (
        <View  style={{flex:1}}>
                <View>
                    <CustomText secondary heading style={styles.questionText}>{currentQuestion?.question}</CustomText>
                    {currentQuestion?.type == questionTypes.info && <Image resizeMode='contain' source={{ uri: currentQuestion?.image }} style={styles.image} />}
                    {currentQuestion?.type == questionTypes.mcqs && currentQuestion?.options?.map((option, index)=>{
                        return (
                            <TouchableOpacity key={index} style={styles.mcqBox} onPress={()=>fnOnNextQuestion()}>
                                <CustomText>{option?.answer}</CustomText>
                            </TouchableOpacity>
                        )
                    })}
                    <TouchableOpacity onPress={()=>fnOnNextQuestion()} style={{ backgroundColor: themeStyles.SECONDARY, width: '90%', alignSelf: 'center', borderRadius: 10, alignItems: 'center', paddingVertical: '5%', marginTop: '5%' }} >
                        <CustomText white style={{ fontSize: 22 }}>Next</CustomText>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default QuizScreen;

const styles = StyleSheet.create({
    image: {
        height: 300, width: '95%', alignSelf: 'center'
    },
    questionText:{ fontSize: 20, marginVertical: '2%', paddingHorizontal: '2%' },
    mcqBox:{ borderColor: themeStyles.SECONDARY, padding: 10, borderWidth: 1 }
});