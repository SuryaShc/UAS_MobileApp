import React from 'react';
import { ActivityIndicator, Image, StatusBar, Text, Touchable, View } from 'react-native';

const SplashScreen = ({ navigation, user }) => {
    setTimeout(() => {
        if (user == null) {
            navigation.replace('Boarding1');
        }
        else {
            navigation.replace('Home');
        }
    }, 3000)
    return (
        <View style={{ flex: 1, backgroundColor: '#1d3460' }}>

            <ActivityIndicator />
            <StatusBar
                animated={true}
                backgroundColor="#1d3460"
                hidden={false} />

            <View style={{ flex: 1, alignItems: 'center' }} >
                <Image source={require('./assets/img/Logo.png')} style={{ marginTop: 250, width: '80%', height: 70 }} />
            </View>

        </View>
    )
}
export default SplashScreen
