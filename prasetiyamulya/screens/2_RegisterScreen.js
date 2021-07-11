import React, { Component, useEffect, useState } from 'react';
import { ActivityIndicator, Image, LogBox, StatusBar, Text, TextInput, View } from 'react-native';

import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';




export default class RegisScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            username: '',
            tahun: '',
            angkatan: ''
        }
    }

    Register = async (email, password) => {
        const result = await auth().createUserWithEmailAndPassword(email, password)
        firestore().collection('users').doc(result.user.uid).set({
            name: this.state.username,
            email: result.user.email,
            tahun: this.state.tahun,
            angkatan: this.state.angkatan,
            uid: result.user.uid,
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
                        <Icon name="person-outline" size={30} color="#1d3460" style={{ backgroundColor: 'white' }} />
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

                {/* Prodi */}
                <View style={{ flexDirection: 'row', marginHorizontal: 70, marginTop: 5 }}>
                    <View style={{ backgroundColor: 'white', paddingHorizontal: 10, justifyContent: 'center', marginHorizontal: 5 }}>
                        <Icon name="lock-closed-outline" size={30} color="#1d3460" style={{ backgroundColor: 'white' }} />
                    </View>
                    <View style={{}}>
                        <TextInput
                            style={{ backgroundColor: 'white', width: 250 }}
                            placeholder="Prodi"
                            secureTextEntry={false}
                            value={this.state.prodi}
                            onChangeText={(text) => this.setState({ prodi: text })}
                        />
                    </View>
                </View>

                {/* Angkatan */}
                <View style={{ flexDirection: 'row', marginHorizontal: 70, marginTop: 5}}>
                    <View style={{ backgroundColor: 'white', paddingHorizontal: 10, justifyContent: 'center', marginHorizontal: 5}}>
                        <Icon name="lock-closed-outline" size={30} color="#1d3460" style={{ backgroundColor: 'white' }} />
                    </View>
                    <View style={{}}>
                        <TextInput
                            style={{ backgroundColor: 'white', width: 250}}
                            placeholder="angkatan"
                            secureTextEntry={false}
                            value={this.state.angkatan}
                            onChangeText={(text) => this.setState({ angkatan: text })}
                        />
                    </View>
                </View>

                {/* Password */}
                <View style={{ flexDirection: 'row', marginHorizontal: 70, marginTop: 5 }}>
                    <View style={{ backgroundColor: 'white', paddingHorizontal: 10, justifyContent: 'center', marginHorizontal: 5, borderBottomLeftRadius: 10 }}>
                        <Icon name="lock-closed-outline" size={30} color="#1d3460" style={{ backgroundColor: 'white' }} />
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