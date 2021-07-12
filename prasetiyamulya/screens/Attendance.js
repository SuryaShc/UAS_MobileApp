import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';
import {Appbar} from 'react-native-paper'

export default class Attendance extends Component{


    render(){
        const {navigation} = this.props;
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                

            <View style={{flexDirection:'row', borderBottomWidth:3, borderColor:'black', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('./assets/img/left-arrow.png')} style={{width:30, height:20, marginHorizontal:10, marginVertical:10}}></Image>
                </TouchableOpacity>
                <Text style={{width:'60%', marginHorizontal:30, marginVertical:10 , fontWeight:'bold', fontSize:16}}>
                Attendance Course Software Design and Construction
                </Text>
            </View>
            <ScrollView style={{flex:1,backgroundColor:'white'}}>


            <View style={{alignItems:'center',marginTop:10}}>
                <View
                    style={{width:'60%',backgroundColor:'#6291c9',paddingVertical:10,borderRadius:10,alignItems:'center'}}>
                    <Text style={{color:'white'}}>May</Text>
                </View>
            </View>
            <View style={{alignItems:'center',marginTop:0}}>
                <View
                    style={{width:'80%',paddingVertical:10,borderRadius:10,alignItems:'center'}}>
                    <Text style={{color:'black'}}>be sure to mark your attendance within the first 10 minutes of the scheduled time.</Text>
                </View>
            </View>
            
            <View style={{marginTop:10}}>
                <View
                    style={{width:'100%',backgroundColor:'#6291c9',paddingVertical:10,borderRadius:10}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%',marginHorizontal:10}}>Date</Text>
                        <Text style={{color:'white', marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Wed 28 April 2021</Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Description</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Regular Class Session</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Status</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Present</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Points</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>2/2</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Remarks</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Self-record</Text>
                    </View>
                </View>
            </View>

            <View style={{marginTop:10}}>
                <View
                    style={{width:'100%',backgroundColor:'#6291c9',paddingVertical:10,borderRadius:10}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%',marginHorizontal:10}}>Date</Text>
                        <Text style={{color:'white', marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Wed 28 April 2021</Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Description</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Regular Class Session</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Status</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Present</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Points</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>2/2</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Remarks</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Self-record</Text>
                    </View>
                </View>
            </View>

            <View style={{marginTop:10}}>
                <View
                    style={{width:'100%',backgroundColor:'#6291c9',paddingVertical:10,borderRadius:10}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%',marginHorizontal:10}}>Date</Text>
                        <Text style={{color:'white', marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Wed 28 April 2021</Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Description</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Regular Class Session</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Status</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Present</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Points</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>2/2</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Remarks</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Self-record</Text>
                    </View>
                </View>
            </View>

            <View style={{marginTop:10}}>
                <View
                    style={{width:'100%',backgroundColor:'#6291c9',paddingVertical:10,borderRadius:10}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%',marginHorizontal:10}}>Date</Text>
                        <Text style={{color:'white', marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Wed 28 April 2021</Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Description</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Regular Class Session</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Status</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Present</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Points</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>2/2</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', width:'20%', marginHorizontal:10}}>Remarks</Text>
                        <Text style={{color:'white',marginHorizontal:10}}>:</Text>
                        <Text style={{color:'white'}}>Self-record</Text>
                    </View>
                </View>
            </View>

            </ScrollView>
            
            </View>
        )
    }
}