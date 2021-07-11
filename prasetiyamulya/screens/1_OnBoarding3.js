import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet, TouchableOpacity,} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default class OnBoarding3 extends React.Component{
    render() {
        return (
            <View style={styles.default}>
                <Image style={{width : 300, height: 300, marginBottom: 20,}} source={require('./assets/img/onboarding3.png')}/>
                <Text style={[styles.tebal]}>Welcome to</Text>
                <Text style={styles.tebal}>PIN !T</Text>
                <Text style={styles.tulisan1}>Now, enjoy faster and more practical access to</Text>
                <Text style={styles.tulisan2}>information at your fingertips</Text>

                <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate('Login')}}>
                    <Text style={styles.text}>Let's Get Started!</Text>
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
        width: 200,
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