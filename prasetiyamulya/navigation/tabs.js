import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/3_HomeScreen';
import Courses from '../screens/3_CoursesScreen';
import More from '../screens/3_MoreScreen';
import Settings from '../screens/3_SettingScreen';

const Tab = createBottomTabNavigator();
export default class Tabs extends React.Component {
        render(){
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home1' component={HomeScreen} />
            <Tab.Screen name='Courses' component={Courses} />
            <Tab.Screen name= 'More' component={More}/>
            <Tab.Screen name= 'Settings' component={Settings}/>
        </Tab.Navigator>


    );
}
}
