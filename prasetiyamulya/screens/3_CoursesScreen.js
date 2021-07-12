import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, FlatList, Pressable, Button, Image, TouchableOpacity } from 'react-native';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';



export default class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: ''
        }
    }
    componentDidMount() {
        firestore().collection('users').doc(this.props.user.uid).get().then(Snapshot => {
            this.setState({ profile: Snapshot.data() })
            console.log(this.state.profile)
            console.log("HomeScreen PING")

        })
    }

    cobaSignout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    render() {
        return (
            <View style={styles.default}>
                <Image style={{ width: 25, height: 25, marginTop: 10, marginRight: 40, alignSelf: 'flex-end' }} source={require('./assets/img/bell.png')} />
                <View style={styles.outer}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.info_user}>COURSES</Text>
                    </View>
                </View>
                <View style={styles.whitebox}>
                    <View style={{}}>

                        <View style={{}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>Applied Commnication 2
                                        SInta Dewi


                                    </Text>
                                </View>
                                <View style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>Community Development 1
                                        Silmi Kaffah
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.today_annoucement}>

                        <View style={{ marginTop: 20, }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>Computer Architectur and Org
                                        Silimi Kaffah

                                    </Text>
                                </View>
                                <View style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>Fundamental Of User Experience
                                        Wisnu
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.today_info}>
                        <View style={{ marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>Intermediate Programming
                                        Stanley Makalew
                                    </Text>
                                </View>
                                <View style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>Intro to Database System
                                        Stanley Makalew
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.today_info}>
                        <View style={{ marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>Lab Intermediate Programming
                                        Stanley Makalew

                                    </Text>
                                </View>
                                <View style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>Lab Intro to Database System
                                        Stanley Makalew
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderColor: '#1D3461', borderWidth: 4, marginTop: 64, padding:20, height: 70, borderRadius: 30, justifyContent: 'space-between', flexDirection: 'row', alignItems:'center'}}>
                        <View>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}} >
                                <Image style={{ width: 30, height: 30, opacity:0.2 }} source={require('./assets/icons_navbar/home.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Courses')}} >
                                <Image style={{ width: 30, height: 30,  }} source={require('./assets/icons_navbar/Courses.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('More')}} >
                                <Image style={{ width: 38, height: 30,  opacity:0.2}} source={require('./assets/icons_navbar/more.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Settings')}} >
                                <Image style={{ width: 30, height: 30,  opacity:0.2}} source={require('./assets/icons_navbar/settings.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1d3460',

    },
    outer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,

    },
    info_user: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold'
    },
    whitebox: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    },
    matkul: {
        fontSize: 16,
        padding: 10,

    }
})