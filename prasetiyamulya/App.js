import React, { useEffect } from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';


import OnBoarding1 from './screens/OnBoarding1';
import OnBoarding2 from './screens/OnBoarding2';
import OnBoarding3 from './screens/OnBoarding3';

const Stack = createStackNavigator();


export default Router = () =>{
  return(
    <NavigationContainer>
        
        <Stack.Navigator >
          <Stack.Screen 
              name="SplashScreen" 
              component={SplashScreen} 
              options={{
                  headerShown:false,
              }}
          />
          <Stack.Screen 
              name="WelcomeScreen" 
              component={WelcomeScreen} 
              options={{
                  headerShown:false,
              }}
          />
          <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{
                  headerShown:false,
              }}
          />
          
        <Stack.Screen name="Boarding1" component={OnBoarding1} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Boarding2" component={OnBoarding2} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Boarding3" component={OnBoarding3} options={{
          headerShown: false
        }} />

        </Stack.Navigator>
        
    </NavigationContainer>
  );
  
  }