import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import SplashScreen from './screens/1_SplashScreen';
import OnBoarding1 from './screens/1_OnBoarding1';
import OnBoarding2 from './screens/1_OnBoarding2';
import OnBoarding3 from './screens/1_OnBoarding3';

import LoginScreen from './screens/2_LoginScreen';
import RegisterScreen from './screens/2_RegisterScreen';

import HomeScreen from './screens/3_HomeScreen';


const Stack = createStackNavigator();

export default App = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ?
          <>

            <Stack.Screen name="Home" options={{ headerShown: false, }}>
              {props => <HomeScreen {...props} user={user} />}
            </Stack.Screen>

          </> :

          <>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Boarding1" component={OnBoarding1} options={{headerShown: false}} />
            <Stack.Screen name="Boarding2" component={OnBoarding2} options={{headerShown: false}} />
            <Stack.Screen name="Boarding3" component={OnBoarding3} options={{headerShown: false}} />

            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false }}/>
          </>

        }

      </Stack.Navigator>
    </NavigationContainer>
  );
};