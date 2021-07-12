import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import firestore from '@react-native-firebase/firestore';




export default class Info extends React.Component {
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
    render() {
        return (
            <View>
                <View style={{ paddingBottom: 10, borderBottomWidth: 8, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', margin: 20 }} onPress={() => { this.props.navigation.navigate('Home') }} >
                        <Image style={{ width: 35, height: 30 }} source={require('./assets/img/back.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Info</Text>
                </View>
                <View style={{ marginTop: 10, paddingBottom: 10, borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', paddingLeft:5,paddingBottom: 5 }}>H-1 Open Recruitment The First CGI Virtual Theatre Show in Indonesia “Adiratna”</Text>
                    <Image style={{ width: '100%', height: 70 }} source={require('./assets/info/one.png')} />
                    <Text style={{ fontSize: 15, paddingLeft:5,paddingTop: 5 }}>Open Recruitment Production and  Non-Production Team Kepanitiaan Teater Puskara Adiratna
                        Dear Prasmulyan,</Text>
                </View>

                <View style={{ marginTop: 10, paddingBottom: 10, borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', paddingLeft:5, paddingBottom: 5 }}>Webinar Board Game ?! Board Game 101 : Peluang dan Tantangan Bisnis Games...</Text>
                    <Image style={{ width: '100%', height: 70 }} source={require('./assets/info/two.png')} />
                    <Text style={{ fontSize: 15, paddingTop: 5 ,paddingLeft:5, }}>Dear Board Game Enthusiast, Tahukah kamu? Gibran Rakabuming dan Kasang Pangarep pernah membuat card games Math Cat, </Text>
                </View>
                <View style={{ marginTop: 10, paddingBottom: 10,}}>
                    <Text style={{ fontSize: 20, fontWeight: '700', paddingLeft:5,paddingBottom: 5 }}>[CDC] Reminder Event : Inf Session Battle of Minds - Biritsh American Tobacco</Text>
                    <Image style={{ width: '100%', height: 70 }} source={require('./assets/info/three.png')} />
                    <Text style={{ fontSize: 15, paddingLeft:5, paddingTop: 5 }}>Dear All, British American Tobacco akan mengadakan info session untuk lomba Battle of Minds pada :</Text>
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