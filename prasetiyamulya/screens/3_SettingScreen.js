import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, FlatList, Pressable, Button, Image, TouchableOpacity } from 'react-native';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';



export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: ''
        }
    }
    componentDidMount() {
        firestore().collection('users').doc(this.props.user.uid).get().then(Snapshot => {
            this.setState({ profile: Snapshot.data() })
            

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
                        <Text style={styles.info_user}>SETTINGS</Text>
                    </View>
                </View>
                <View style={styles.whitebox}>
                    <View style={{ flexDirection: 'row', marginLeft: 40 }}>
                        <Image style={{ width: 60, height: 60, marginRight: 20 }} source={require('./assets/icons_settings/user_bk.png')} />
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{this.state.profile.name}</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{this.state.profile.NIM}</Text>
                        </View>
                    </View>
                    <View style={{ paddingLeft: 20, marginTop: 30, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                        <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('./assets/icons_settings/account.png')} />
                        <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: 'bold' }}>Account</Text>
                    </View>
                    <View style={{ paddingLeft: 20, marginTop: 15, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                        <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('./assets/icons_settings/language.png')} />
                        <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: 'bold' }}>Language</Text>
                    </View>
                    <View style={{ paddingLeft: 20, marginTop: 15, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                        <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('./assets/icons_settings/date.png')} />
                        <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: 'bold' }}>Date & Time </Text>
                    </View>
                    <View style={{ paddingLeft: 20, marginTop: 15, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                        <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('./assets/icons_settings/about.png')} />
                        <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: 'bold' }}>About </Text>
                    </View>

                    <View style= {{borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                        <TouchableOpacity style={{ paddingLeft: 20, marginTop: 15, paddingBottom: 10, flexDirection: 'row', alignItems: 'center',}}onPress={() => this.cobaSignout()} >
                            <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('./assets/icons_settings/logout.png')} />
                            <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: 'bold' }}>Log out</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingHorizontal: 20 }}>
                        <View style={{ borderColor: '#1D3461', borderWidth: 4, marginTop: 170, padding: 20, height: 70, borderRadius: 30, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }} >
                                    <Image style={{ width: 30, height: 30, opacity: 0.2 }} source={require('./assets/icons_navbar/home.png')} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Courses') }} >
                                    <Image style={{ width: 30, height: 30, opacity: 0.2 }} source={require('./assets/icons_navbar/Courses.png')} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('More') }} >
                                    <Image style={{ width: 38, height: 30, opacity: 0.2 }} source={require('./assets/icons_navbar/more.png')} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Settings') }} >
                                    <Image style={{ width: 30, height: 30, }} source={require('./assets/icons_navbar/settings.png')} />
                                </TouchableOpacity>
                            </View>
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
        fontWeight: 'bold'
    },
    whitebox: {
        paddingVertical: 10,
        paddingHorizontal: 0,
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