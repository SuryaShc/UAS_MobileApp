import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView, ImageBackground } from 'react-native';

export default class Group extends Component{


    render(){
        return(
            <View style={{flex:1,backgroundColor:'#1d3460',justifyContent:'center'}}>
                <View style={{alignItems:'center',marginBottom:20}}>
                    <Text style={{color:'white',fontSize:20}}>This Page is Empty</Text>
                </View>
                <Image source={require('./assets/img/Handschat.png')} style={{ width:250,height:300, alignSelf:'center'}}>

                </Image>
                <View style={{alignItems:'center',marginTop:20}}>
                    <TouchableOpacity style={{backgroundColor:'#85b3c1',paddingVertical:15,width:'60%',borderRadius:10,alignItems:'center'}}>
                        <Text style={{color:'white'}}>Start Conversation</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}