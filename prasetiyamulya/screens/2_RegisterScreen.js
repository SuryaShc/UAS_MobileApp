import React from 'react';
import {Image,Text, TextInput, View, TouchableOpacity } from 'react-native';

import { Checkbox } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather'; 
import Icon2 from 'react-native-vector-icons/Entypo'; 

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';




export default class RegisScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            username: '',
            NIM: '',
        }
        
    }
    Register = async (email, password) => {
        const result = await auth().createUserWithEmailAndPassword(email, password)
        firestore().collection('users').doc(result.user.uid).set({
            name: this.state.username,
            email: result.user.email,
            NIM: this.state.NIM,
            uid: result.user.uid,
        })
            .then(() => {
                this.props.navigation.navigate(('DoneRegister'))
            })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#1d3460' }}>
                <View style={{ alignItems: 'center' }} >
                    <Image source={require('./assets/img/Logo.png')} style={{ marginTop: 100, width: '80%', height: 70 }} />
                </View>
                <View style={{ marginLeft: 75, marginTop: 40, marginHorizontal: 100 }}>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>Register</Text>
                </View>

                {/* Full name */}
                <View style={{ flexDirection: 'row', marginHorizontal: 70, marginTop: 10 }}>
                    <View style={{ backgroundColor: 'white', paddingHorizontal: 10, justifyContent: 'center', marginHorizontal: 5, borderTopLeftRadius: 10 }}>
                        <Icon name="person-outline" size={30} color="#1d3460" style={{ backgroundColor: 'white' }} />
                    </View>
                    <View style={{}}>
                        <TextInput
                            style={{ backgroundColor: 'white', width: 250, borderTopRightRadius: 10 }}
                            placeholder="Full name"
                            value={this.state.username}
                            autoCapitalize='none'
                            onChangeText={(text) => this.setState({ username: text })}
                        />
                    </View>
                </View>
                {/* Email */}
                <View style={{ flexDirection: 'row', marginHorizontal: 70, marginTop: 5 }}>
                    <View style={{ backgroundColor: 'white', paddingHorizontal: 10, justifyContent: 'center', marginHorizontal: 5 }}>
                        <Icon1 name="mail" size={30} color="#1d3460" style={{ backgroundColor: 'white' }} />
                    </View>
                    <View style={{}}>
                        <TextInput
                            style={{ backgroundColor: 'white', width: 250 }}
                            placeholder="Email"
                            value={this.state.email}
                            autoCapitalize='none'
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                    </View>
                </View>

                {/* NIM */}
                <View style={{ flexDirection: 'row', marginHorizontal: 70, marginTop: 5 }}>
                    <View style={{ backgroundColor: 'white', paddingHorizontal: 10, justifyContent: 'center', marginHorizontal: 5 }}>
                        <Icon2 name="text" size={30} color="#1d3460" style={{ backgroundColor: 'white' }} />
                    </View>
                    <View style={{}}>
                        <TextInput
                            style={{ backgroundColor: 'white', width: 250 }}
                            placeholder="NIM"
                            secureTextEntry={false}
                            value={this.state.NIM}
                            onChangeText={(text) => this.setState({ NIM: text })}
                        />
                    </View>
                </View>

                {/* Password */}
                <View style={{ flexDirection: 'row', marginHorizontal: 70, marginTop: 5 }}>
                    <View style={{ backgroundColor: 'white', paddingHorizontal: 10, justifyContent: 'center', marginHorizontal: 5, borderBottomLeftRadius: 10 }}>
                        <Icon1 name="lock" size={30} color="#1d3460" style={{ backgroundColor: 'white' }} />
                    </View>
                    <View style={{}}>
                        <TextInput
                            style={{ backgroundColor: 'white', width: 250, borderBottomRightRadius: 10 }}
                            placeholder="password"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(text) => this.setState({ password: text })}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 70, marginTop: 10 }}>

                    <View>
                        <Checkbox
                            color="white"
                            uncheckedColor="white"
                            status={this.state.checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                this.setState({ checked: !this.state.checked })
                            }}
                        />
                    </View>
                    <Text style={{ color: 'white', alignSelf: 'center' }}>I accept the policy and term</Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => this.Register(this.state.email, this.state.password)} style={{ backgroundColor: 'white', paddingVertical: 10, borderRadius: 10, paddingHorizontal: 30 }}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}