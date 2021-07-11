import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          profile: ''
        }
      }
    componentDidMount() {
        firestore().collection('users').doc(this.props.user.uid).get().then(Snapshot => {
            this.setState({ profile: Snapshot.data() })    
             
        })
    console.log(this.state.profile)  
    } 
    
    cobaSignout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    render() {
        return (
            <View>
                <Text>what</Text>
                <TouchableOpacity onPress={() => this.cobaSignout()} >
                    <Text >NEXT</Text>
                </TouchableOpacity>
            </View>
        )
    }  
}