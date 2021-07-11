import React, { Component, useEffect } from 'react';
import { ActivityIndicator, Image, StatusBar, Text, Touchable, View } from 'react-native';

export default class SplashScreen extends Component{

    // handlePress(){
    //     const {navigation} = this.props;

    //     navigation.navigate('WelcomeScreen');
    // }
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.replace('Boarding1');
        }, 3000)
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#1d3460'}} onTouchStart={()=>this.handlePress()}>

                <ActivityIndicator/>
                <StatusBar
                animated={true}
                backgroundColor="#1d3460"
                hidden={false} />

                <View style={{flex:1,alignItems:'center'}} >
                    <Image source={require('./assets/img/Logo.png')} style={{marginTop:250, width:'80%', height:70}}/>
                </View>

            </View>
        )
    }
}