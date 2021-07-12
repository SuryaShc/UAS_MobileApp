import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';

export default class Classroom extends Component{


    render(){
        const {navigation} = this.props;
        return(
            <ScrollView style={{flex:1,backgroundColor:'white'}}>

            <View style={{alignItems:'center',marginTop:10}}>
                <TouchableOpacity
                    style={{width:'60%',backgroundColor:'#6291c9',paddingVertical:10,borderRadius:10,alignItems:'center'}}>
                    <Text style={{color:'white'}}>Join Meeting</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:50}}>
                <View style={{width:'100%',paddingVertical:10, borderBottomWidth:5, borderTopWidth:5,borderColor:'#6291c9'}}>
                    
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'black', width:'20%', marginLeft:50}}>Meeting ID</Text>
                        <Text style={{color:'black',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'black'}}>1234567890</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'black', width:'20%', marginLeft:50}}>Password</Text>
                        <Text style={{color:'black',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'black'}}>qwerty123</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:0}}>
                <View style={{width:'100%',paddingVertical:10, borderBottomWidth:5,borderColor:'#6291c9'}}>
                    
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'black', width:'80%', marginLeft:50}}>Reccuring Meeting (meeting with no end date or time</Text>
                    </View>
                </View>
            </View>
            
            <View style={{alignItems:'center',marginTop:50}}>
                <TouchableOpacity
                    style={{width:'60%',backgroundColor:'#6291c9',paddingVertical:10,borderRadius:10,alignItems:'center'}}>
                    <Text style={{color:'white'}}>All Meeting</Text>
                </TouchableOpacity>
            </View>

            </ScrollView>
        )
    }
}