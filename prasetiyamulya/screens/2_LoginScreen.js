import React, { Component, useEffect } from 'react';
import { ActivityIndicator, Image, LogBox, StatusBar, Text, TextInput, View } from 'react-native';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Checkbox } from 'react-native-paper';
import Firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    Login = (email, password) => {

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                this.props.navigation.navigate('Home')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            
            });
    }
    

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#1d3460' }}>

                <View style={{ alignItems: 'center' }} >
                    <Image source={require('./assets/img/Logo.png')} style={{ marginTop: 100, width: '80%', height: 70 }} />
                </View>
                <View style={{ marginLeft: 75, marginTop: 40, marginHorizontal: 100 }}>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>Login</Text>
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: 70, marginTop: 10 }}>

                    <View style={{ backgroundColor: 'white', paddingHorizontal: 10, justifyContent: 'center', marginHorizontal: 5, borderTopLeftRadius: 10 }}>
                        <Icon name="person-outline" size={30} color="#1d3460" style={{ backgroundColor: 'white' }} />
                    </View>
                    <View style={{}}>
                        <TextInput
                            style={{ backgroundColor: 'white', width: 250, borderTopRightRadius: 10 }}
                            placeholder="Email"
                            value={this.state.email}
                            autoCapitalize='none'
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                    </View>
                </View>

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
                    <Text style={{ color: 'white', alignSelf: 'center' }}>Remember username</Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => this.Login(this.state.email, this.state.password)} style={{ backgroundColor: 'white', paddingVertical: 10, borderRadius: 10, paddingHorizontal: 30 }}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>

                    <TouchableOpacity>
                        <Text style={{ color: 'white' }}>Forgot username / password</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', marginTop: 180 }}>
                    <Text style={{ color: 'white' }}>Dont Have an account?</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }} style={{ backgroundColor: 'white', paddingVertical: 10, borderRadius: 10, paddingHorizontal: 30 }}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}