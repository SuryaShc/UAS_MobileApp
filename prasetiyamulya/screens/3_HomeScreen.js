import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, FlatList, Pressable, Button, Image, TouchableOpacity } from 'react-native';

import firestore from '@react-native-firebase/firestore';




export default class HomeScreen extends React.Component {
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

    render() {
        return (
            <View style={styles.default}>
                <TouchableOpacity style={{alignSelf: 'flex-end'}}onPress={() => { this.props.navigation.navigate('Notification') }} >
                <Image style={{ width: 25, height: 25, marginTop: 10, marginRight: 40 }} source={require('./assets/img/bell.png')} />
                </TouchableOpacity>
                <View style={styles.outer}>
                    <View style={styles.icon}>
                        <Image style={{ width: 60, height: 60, marginRight: 10, }} source={require('./assets/img/user.png')} />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.info_user}>{this.state.profile.name}</Text>
                        <Text style={styles.info_user}>{this.state.profile.NIM}</Text>
                        <Text style={styles.info_user}>Software Engineering 2019</Text>
                    </View>
                </View>
                <View style={styles.whitebox}>
                    <View style={{}}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Todays_Selection') }} >
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', }}>Today's Selection</Text>
                        </TouchableOpacity>
                        <View style={{}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <TouchableOpacity style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }} onPress={()=>navigation.navigate('Course')}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>Software Design and Construction
                                        Stanley Makalew, M.Sc.
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>Lab.Software Design and Construction
                                        Stanley Makalew, M.Sc.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.today_annoucement}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Announcement') }} >
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold'}}>Announcement</Text>
                        </TouchableOpacity>
                        <View style={{}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>[UPDATE] Approval dan Informasi Sosial
                                        Work ...
                                    </Text>
                                </View>
                                <View style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>Pembatalan Mk. Software Design and Construction</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.today_info}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Info') }} >
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold'}}>Info</Text>
                        </TouchableOpacity>
                        <View style={{}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>H-1 Open Recruitment The First CGI Virtual Theatre Show in Indonesia...
                                    </Text>

                                </View>
                                <View style={{ width: '45%', borderColor: '#6290C8', borderWidth: 1 }}>
                                    <Image style={{ width: '100%', height: 30 }} source={require('./assets/img/lms_box.png')} />
                                    <Text style={styles.matkul}>Webinar Board Game ?! Board Game 101 : Peluang dan...</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ borderColor: '#1D3461', borderWidth: 4, marginTop: 70, padding:20, height: 70, borderRadius: 30, justifyContent: 'space-between', flexDirection: 'row', alignItems:'center'}}>
                        <View>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}} >
                                <Image style={{ width: 30, height: 30,  }} source={require('./assets/icons_navbar/home.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Courses')}} >
                                <Image style={{ width: 30, height: 30,  opacity:0.2}} source={require('./assets/icons_navbar/Courses.png')} />
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
        fontSize: 20,
        color: 'white',
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