import React, { Component, useEffect } from 'react';
import { ActivityIndicator, Image, LogBox, StatusBar, Text, TextInput, View } from 'react-native';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Checkbox } from 'react-native-paper';
import Firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default class LoginScreen extends Component{

    state={
        checked:false,
        email:'',
        password:'',
    }

    componentDidMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyBx8eN51KUhH6hmjbbZmPoxbw4504-QqNA",
            authDomain: "finalproject-a1848.firebaseapp.com",
            projectId: "finalproject-a1848",
            storageBucket: "finalproject-a1848.appspot.com",
            messagingSenderId: "610137346643",
            appId: "1:610137346643:web:f7094c30f10f1da2f46ca6",
            measurementId: "G-RBYM2CHJRL"
          };

          if(!Firebase.apps.length){
            Firebase.initializeApp(firebaseConfig);
          }
          else{
              Firebase.app();
          }
    }
    
    SignIn = async () => {
        console.log(this.state.email+" "+this.state.password)
        const {navigation} = this.props;
        auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => console.log(res))
            .catch(error => console.log(error))
       
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#1d3460'}}>
            
                <View style={{alignItems:'center'}} >
                    <Image source={require('./assets/img/Logo.png')} style={{marginTop:150, width:'80%', height:70}}/>
                </View>
                <View style={{marginTop:100, marginHorizontal:100}}>
                    <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>Log In</Text>
                </View>

                <View style={{flexDirection:'row',marginHorizontal:70, marginTop:10}}>
                    
                    <View style={{backgroundColor:'white',paddingHorizontal:10,justifyContent:'center',marginHorizontal:5,borderTopLeftRadius:10}}>
                    <Icon name="person-outline" size={30} color="#1d3460" style={{backgroundColor:'white'}}/>
                    </View>
                    <View style={{}}>
                    <TextInput
                        style={{backgroundColor:'white', width:200, borderTopRightRadius:10}}
                        placeholder="username"
                        value={this.state.email}
                        autoCapitalize='none'
                        onChangeText={(text)=>this.setState({email:text})}
                    />
                    </View>
                </View>
                
                <View style={{flexDirection:'row',marginHorizontal:70, marginTop:5}}>
                    
                    <View style={{backgroundColor:'white',paddingHorizontal:10,justifyContent:'center',marginHorizontal:5,borderBottomLeftRadius:10}}>
                    <Icon name="lock-closed-outline" size={30} color="#1d3460" style={{backgroundColor:'white'}}/>
                    </View>
                    <View style={{}}>
                    <TextInput
                        style={{backgroundColor:'white', width:200, borderBottomRightRadius:10}}
                        placeholder="password"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={(text)=>this.setState({password:text})}
                    />
                    </View>
                </View>

                
                <View style={{flexDirection:'row',marginHorizontal:70, marginTop:20}}>
                    
                    <View>

                        <Checkbox
                        color="white"
                        uncheckedColor="white"
                        status={this.state.checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            this.setState({checked:!this.state.checked})
                        }}
                        />
                    </View>
                    <Text style={{color:'white',alignSelf:'center'}}>Remember username</Text>
                </View>

                <View style={{justifyContent:'center', alignItems:'center', marginTop: 40}}>
                    <TouchableOpacity onPress={()=> this.SignIn()} style={{backgroundColor:'white', paddingVertical:10, borderRadius:10, paddingHorizontal: 30}}>
                        <Text>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:60, alignItems:'center'}}>
                    <TouchableOpacity>
                        <Text style={{color:'white'}}>Forgotten username / password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}