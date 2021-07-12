import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import firestore from '@react-native-firebase/firestore';




export default class Notification extends React.Component {
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
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Notification</Text>
                </View>
                <View style={{ paddingLeft: 20, marginTop: 30, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                    <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: '700' }}>Upcoming Event : Course Software Design...</Text>
                </View>
                <View style={{ paddingLeft: 20, marginTop: 30, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                    <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: '700' }}>Due Date Software Design Task is Today</Text>
                </View>
                <View style={{ paddingLeft: 20, marginTop: 30, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                    <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: '700' }}>Open Recruitment H-1 ADINARATA....</Text>
                </View>
                <View style={{ paddingLeft: 20, marginTop: 30, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                    <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: '700' }}>A messege from Group Software Design...</Text>
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