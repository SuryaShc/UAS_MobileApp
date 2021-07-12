import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';

export default class RPS extends Component{


    render(){
        const {navigation} = this.props;
        return(
            
            <View style={{flex:1, backgroundColor:'white'}}>
                
            <View style={{flexDirection:'row', borderBottomWidth:3, borderColor:'black', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('./assets/img/left-arrow.png')} style={{width:30, height:20, marginHorizontal:10, marginVertical:10}}></Image>
                </TouchableOpacity>
                <Text style={{width:'60%', marginHorizontal:30, marginVertical:10 , fontWeight:'bold', fontSize:16}}>
                    RPS/Sylabus
                </Text>
            </View>
            <ScrollView style={{flex:1,backgroundColor:'white'}}>

            <View style={{alignItems:'center',marginTop:10}}>
                <View
                    style={{width:'60%',backgroundColor:'#6291c9',paddingVertical:10,borderRadius:10,alignItems:'center'}}>
                    <Text style={{color:'white'}}>Download RPS</Text>
                </View>
            </View>

            </ScrollView>
            </View>
        )
    }
}