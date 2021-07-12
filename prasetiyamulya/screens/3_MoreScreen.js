import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, FlatList, Pressable, Button, Image, TouchableOpacity } from 'react-native';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';



export default class More extends React.Component {
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
                        <Text style={styles.info_user}>MORE</Text>
                    </View>
                </View>
                <View style={styles.whitebox}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, height: '20%', alignContent: 'center' }}>
                        <View style={{ width: '40%', borderColor: '#6290C8', borderWidth: 1, backgroundColor: '#6290C8', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: '100', color: 'white', marginTop: 10 }}>Calender</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                                <Image style={{ width: 55, height: 55, marginRight: 20 }} source={require('./assets/icons_more/calender.png')} />
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>May</Text>
                            </View>
                        </View>
                        <View style={{ width: '40%', borderColor: '#6290C8', borderWidth: 1, backgroundColor: '#6290C8', alignItems: 'center', marginRight:10}}>
                            <Text style={{ fontSize: 20, fontWeight: '100', color: 'white', marginTop: 10 }}>Career Point</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                                <Image style={{ width: 55, height: 60, marginRight: 5 }} source={require('./assets/icons_more/career_point.png')} />
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>45/100</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, height: '20%', alignContent: 'center' }}>
                        <View style={{ width: '40%', borderColor: '#6290C8', borderWidth: 1, backgroundColor: '#6290C8', alignItems: 'center', justifyContent:'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: '100', color: 'white', marginTop: 10 }}>Competition</Text>
                            <Text style={{ fontSize: 20, fontWeight: '100', color: 'white' }}>Info</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                                <Image style={{ width: 40, height: 40, marginBottom:20 }} source={require('./assets/icons_more/competition.png')} />
                                
                            </View>
                        </View>
                        <View style={{ width: '40%', borderColor: '#6290C8', borderWidth: 1, backgroundColor: '#6290C8', alignItems: 'center', marginRight:10 }}>
                            <Text style={{ fontSize: 20, fontWeight: '100', color: 'white', marginTop: 20 }}>My Results</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                                <Image style={{ width: 55, height: 60, marginRight: 5 }} source={require('./assets/icons_more/my_results.png')} />
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft:10 }}>4.00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, height: '20%', alignContent: 'center' }}>
                        <View style={{ width: '40%', borderColor: '#6290C8', borderWidth: 1, backgroundColor: '#6290C8', alignItems: 'center', justifyContent:'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: '100', color: 'white', marginTop: 10, textAlign:'center'}}>Teaching Evaluation</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                                <Image style={{ width: 40, height: 40, marginBottom:20 }} source={require('./assets/icons_more/teachingEvaluation.png')} />
                                
                            </View>
                        </View>
                    </View>
                    <View style={{ borderColor: '#1D3461', borderWidth: 4, marginTop: 75, padding:20, height: 70, borderRadius: 30, justifyContent: 'space-between', flexDirection: 'row', alignItems:'center'}}>
                        <View>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}} >
                                <Image style={{ width: 30, height: 30,  opacity:0.2}} source={require('./assets/icons/home.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Courses')}} >
                                <Image style={{ width: 30, height: 30,  opacity:0.2}} source={require('./assets/icons/Courses.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('More')}} >
                                <Image style={{ width: 38, height: 30,  }} source={require('./assets/icons/more.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Settings')}} >
                                <Image style={{ width: 30, height: 30,  opacity:0.2}} source={require('./assets/icons/settings.png')} />
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
        fontSize: 50,
        color: 'white',
        fontWeight:'bold'
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