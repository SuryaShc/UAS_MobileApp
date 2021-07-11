import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet, TouchableOpacity,} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const { width: WIDTH } = Dimensions.get('window')

export default class DoneRegister extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          profile: ''
        }
      }
    componentDidMount() {
        firestore().collection('users').doc(this.props.user.uid).get().then(Snapshot => {
            this.setState({ profile: Snapshot.data() })    
            console.log(this.state.profile)  
            console.log("DoneRegister PING") 
              
        })
    }
    render() {
        return (
            <View style={styles.default}>
                <Image style={{width : 300, height: 300, marginBottom: 20,}} source={require('./assets/img/DoneRegister.png')}/>
                <Text style={[styles.tebal]}>Congratulation {this.state.profile.name} </Text> 
                <Text style={styles.tulisan1}>You have successfully registered your account</Text>
                <Text style={styles.tulisan2}>Enjoy the experience!</Text>

                <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate('Home')}}>
                    <Text style={styles.text}>Login</Text>
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