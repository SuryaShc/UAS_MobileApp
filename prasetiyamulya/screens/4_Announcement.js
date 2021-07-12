import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import firestore from '@react-native-firebase/firestore';




export default class Announcement extends React.Component {
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
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Announcement</Text>
                </View>
                <View style={{ marginTop: 10, paddingBottom: 10, borderBottomWidth: 3.5, borderColor: '#6290C8'}}>
                    <Text style={{fontSize: 20, fontWeight: '700',paddingLeft:5,paddingBottom:5 }}>[UPDATE] Approval dan Informasi Sosial Work - Mk. Community Development P.1</Text>
                    <Image style={{ width: '100%', height: 70 }} source={require('./assets/announcement/one.png')} />
                    <Text style={{fontSize: 15,paddingLeft:5,paddingTop:5 }}>Dear Mahasiswa Community Development 1, Berikut informasi penting untuk disampaikan terkait dengan projek kerja sosial :</Text>
                </View>
                
                <View style={{ marginTop: 10, paddingBottom: 10, borderBottomWidth: 3.5, borderColor: '#6290C8'}}>
                    <Text style={{fontSize: 20, fontWeight: '700', paddingLeft:5,paddingBottom:5 }}>To All Mahasiswa Community Development Project 1</Text>
                    <Image style={{ width: '100%', height: 70 }} source={require('./assets/announcement/two.png')} />
                    <Text style={{fontSize: 15, paddingLeft:5,paddingTop:5 }}>Dear Mahasiswa Community Development 1,  Berikut rekap terakhir dari institusi yang disetujui dan masih memiliki kapasasitas</Text>
                </View>
                <View style={{ marginTop: 10, paddingBottom: 10}}>
                    <Text style={{fontSize: 20, fontWeight: '700', paddingLeft:5,paddingBottom:5 }}>Pembatalan Mk. Software Design and Construction</Text>
                    <Image style={{ width: '100%', height: 70 }} source={require('./assets/announcement/one.png')} />
                    <Text style={{fontSize: 15, paddingLeft:5,paddingTop:5 }}>Dear Mahasiswa SE 2020, Pemberitahuan bahwa perkuliahan Mk. Software Design and Construction pada minggu ini, </Text>
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