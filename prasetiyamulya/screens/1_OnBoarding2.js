import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet, TouchableOpacity,} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default class OnBoarding2 extends React.Component{
    render() {
        return (
            <View style={styles.default}>
                <Image style={{width : 300, height: 300, marginBottom: 20,}} source={require('./assets/img/onboarding2.png')}/>
                <Text style={[styles.tebal]}>Welcome to</Text>
                <Text style={styles.tebal}>PIN !T</Text>
                <Text style={styles.tulisan1}>No need to worry, you will get the latest</Text>
                <Text style={styles.tulisan2}>notifications.</Text>

                <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate('Boarding3')}}>
                    <Text style={styles.text}>NEXT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1d3460',
    },
    tebal: {
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      fontSize: 24,
      color:'white'
    },
    tulisan1: {
        fontFamily: 'Roboto',
        fontSize: 14,
        marginTop: 10,
        color:'white'
    },
    tulisan2: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color:'white'
    },
    btn:{
        width: 130,
        height: 50,
        borderRadius : 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        top: 50,
    },
    text:{
        color: '#1d3460',
        fontWeight: 'bold',
        fontSize: 18,
    }
})