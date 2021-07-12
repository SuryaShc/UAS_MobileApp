import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';

export default class Task extends Component{


    render(){
        const {navigation} = this.props;
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                
            <View style={{flexDirection:'row', borderBottomWidth:3, borderColor:'black', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('./assets/img/left-arrow.png')} style={{width:30, height:20, marginHorizontal:10, marginVertical:10}}></Image>
                </TouchableOpacity>
                <Text style={{width:'60%', marginHorizontal:30, marginVertical:10 , fontWeight:'bold', fontSize:16}}>
                    Task/Quiz Course Software Design and Construction
                </Text>
            </View>
            <ScrollView style={{flex:1,backgroundColor:'white'}}>

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
            <View style={{marginTop:50}}>
                <View style={{width:'100%',paddingVertical:10, borderBottomWidth:5, borderTopWidth:5,borderColor:'#6291c9'}}>
                    
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'black', fontWeight:'bold', width:'25%', marginLeft:50}}>Submission Status</Text>
                        <Text style={{color:'black',marginLeft:50}}>No attempt</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:0}}>
                <View style={{width:'100%',paddingVertical:10, borderBottomWidth:5,borderColor:'#6291c9'}}>
                    
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'black', fontWeight:'bold', width:'25%', marginLeft:50}}>Grading Status</Text>
                        <Text style={{color:'black',marginLeft:50}}>Not Grading</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:0}}>
                <View style={{width:'100%',paddingVertical:10, borderBottomWidth:5,borderColor:'#6291c9'}}>
                    
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'black', fontWeight:'bold', width:'25%', marginLeft:50}}>Due Date</Text>
                        <Text style={{color:'black',marginLeft:50}}>Tuesday, 13 May 2021</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:0}}>
                <View style={{width:'100%',paddingVertical:10, borderBottomWidth:5,borderColor:'#6291c9'}}>
                    
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'black', fontWeight:'bold', width:'25%', marginLeft:50}}>Time Remaining</Text>
                        <Text style={{color:'black',marginLeft:50}}>25 sec</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:0}}>
                <View style={{width:'100%',paddingVertical:10, borderBottomWidth:5,borderColor:'#6291c9'}}>
                    
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'black', fontWeight:'bold', width:'25%', marginLeft:50}}>Last Modified</Text>
                        <Text style={{color:'black',marginLeft:50}}>-</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:0}}>
                <View style={{width:'100%',paddingVertical:10, borderBottomWidth:5,borderColor:'#6291c9'}}>
                    
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'black', fontWeight:'bold', width:'25%', marginLeft:50}}>Submission Comments</Text>
                        <Text style={{color:'black',marginLeft:50}}>-</Text>
                    </View>
                </View>
            </View>
            
            <View style={{alignItems:'center',marginTop:50}}>
                <TouchableOpacity
                    style={{width:'60%',backgroundColor:'#6291c9',paddingVertical:10,borderRadius:10,alignItems:'center'}}>
                    <Text style={{color:'white'}}>Add Submission</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center', marginBottom:50, marginTop:10}}>
                <Text>You have not made a submission yet</Text>
            </View>

            </ScrollView>
            
            </View>
        )
    }
}