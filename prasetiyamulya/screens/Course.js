import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';

export default class Course extends Component{


    render(){
        const {navigation} = this.props;
        return(
            
            <View style={{flex:1, backgroundColor:'white'}}>
                
            <View style={{flexDirection:'row', borderBottomWidth:3, borderColor:'black', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('./assets/img/left-arrow.png')} style={{width:30, height:20, marginHorizontal:10, marginVertical:10}}></Image>
                </TouchableOpacity>
                <Text style={{width:'60%', marginHorizontal:30, marginVertical:10 , fontWeight:'bold', fontSize:16}}>
                    Course Software Design and Construction
                </Text>
            </View>
            <ScrollView style={{flex:1,backgroundColor:'white'}}>

            <View style={{alignItems:'center',marginTop:10}}>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('Group')}
                    style={{width:'60%',backgroundColor:'#1d3460',paddingVertical:10,borderRadius:10,alignItems:'center'}}>
                    <Text style={{color:'white'}}>Group</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center',marginTop:10}}>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('Attendance')}
                    style={{width:'60%',backgroundColor:'#1d3460',paddingVertical:10,borderRadius:10,alignItems:'center'}}>
                    <Text style={{color:'white'}}>Attendance</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center',marginTop:10}}>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('RPS')}
                    style={{width:'60%',backgroundColor:'#1d3460',paddingVertical:10,borderRadius:10,alignItems:'center'}}>
                    <Text style={{color:'white'}}>RPS / Syllabus</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center',marginTop:10}}>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('Classroom')}
                    style={{width:'60%',backgroundColor:'#1d3460',paddingVertical:10,borderRadius:10,alignItems:'center'}}>
                    <Text style={{color:'white'}}>Classroom</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center',marginTop:10}}>
                <TouchableOpacity style={{width:'60%',backgroundColor:'#1d3460',paddingVertical:10,borderRadius:10,alignItems:'center'}}>
                    <Text style={{color:'white'}}>Textbook</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center',marginTop:10}}>
                <TouchableOpacity style={{width:'60%',backgroundColor:'#1d3460',paddingVertical:10,borderRadius:10,alignItems:'center'}}>
                    <Text style={{color:'white'}}>Previous Material</Text>
                </TouchableOpacity>
            </View>

            
            <View style={{alignItems:'center',marginTop:10}}>
                <View style={{width:'100%',paddingVertical:10,alignItems:'center', borderBottomWidth:5, borderTopWidth:5,borderColor:'#1d3460'}}>
                    <Text style={{color:'#1d3460', fontWeight:'bold', fontSize:20}}>Week 6 : Activity Diagram</Text>
                </View>
            </View>
            <View style={{alignItems:'center',marginTop:10}}>
                <View style={{alignItems:'center', flexDirection:'row'}}>
                    <Image source={require('./assets/img/screen.png')} style={{width:30,height:30}}></Image>
                    <View style={{marginLeft:10, width:'60%'}}>
                    <Text style={{color:'#1d3460', fontSize:16}}>PPT (Selasa,13 April) : Activity Diagram</Text>
                    </View>
                </View>
            </View>
            
            <View style={{alignItems:'center',marginTop:10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Task')} style={{alignItems:'center', flexDirection:'row'}}>
                    <Image source={require('./assets/img/list_plus.png')} style={{width:30,height:30}} ></Image>
                    <View style={{marginLeft:10, width:'60%'}}>
                    <Text style={{color:'#1d3460', fontSize:16}}>Submission Assignment 1 : Activity Diagram</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={{alignItems:'center',marginVertical:10}}>
                <View style={{width:'80%'}}>
                    <Text style={{color:'#1d3460', fontSize:16}}>
                        Assignment 1 (April 13, 2021): Activity Diagram Create an activity diagram for "Ticket Vending Machine"
                        scenario.
                    </Text>
                    <Text style={{marginTop:10}}>
                        Scenario:
                    </Text>
                    <Text style={{marginTop:10}}>
                        "Activity is Started by Commuter actor who needs to buy a ticket.
                        Ticket vending machine will request trip information from Commuter.
                        This information will include number and type of tickets, e.g.
                        Whether it is a monthly pass, one way or round ticket, route number,destination or zone number, etc.
                    </Text>
                    <Text style={{marginTop:10}}>
                        Based on the provided trip info ticket vending machine will calculate payment due and request payment options.
                        Those options include payment by cash, or by credit or debit card.
                        if payment by card was selected by Commuter, another actor, Bank will participate in the activity by authorizing the payment."
                    </Text>
                    
                </View>
            </View>
            

            </ScrollView>
            </View>
        )
    }
}