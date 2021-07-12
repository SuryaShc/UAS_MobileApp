import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import firestore from '@react-native-firebase/firestore';




export default class Competition extends React.Component {
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
                    <TouchableOpacity style={{ flexDirection: 'row', margin: 20 }} onPress={() => { this.props.navigation.navigate('More') }} >
                        <Image style={{ width: 35, height: 30 }} source={require('./assets/img/back.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Competition Info</Text>
                </View>
                <View style={{ marginTop: 10, paddingBottom: 10, borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', paddingLeft: 5, paddingBottom: 5 }}>Competition for University in Business and Economics</Text>
                    <Text style={{ fontSize: 15, paddingLeft: 5, paddingTop: 5 }}>We are more than thrilled to announce that the upcoming CUBE (Competition for University in Business and Economics) 2021 is finally here! CUBE 2021 is NOW officially open for all Indonesian undergraduate students wherever you are!
                    </Text>
                    <Image style={{ width: '100%', height: 120 }} source={require('./assets/other_details/competition1.png')} />
                </View>
                <View style={{ marginTop: 10, paddingBottom: 10, borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', paddingLeft: 5, paddingBottom: 5 }}>IIBC 2021 Open normal registration extended</Text>
                    <Text style={{ fontSize: 15, paddingLeft: 5, paddingTop: 5 }}>
                        We are thrilled to announce that
                        Indonesia’s FIRST and BIGGEST Investment Banking Competition
                        REGISTRATION PERIOD IS EXTENDED!
                    </Text>
                    <Image style={{ width: '100%', height: 120 }} source={require('./assets/other_details/competition2.png')} />
                </View>
                <View style={{ marginTop: 10, paddingBottom: 10}}>
                    <Text style={{ fontSize: 20, fontWeight: '700', paddingLeft: 5, paddingBottom: 5 }}>Lomba cipta puisi dan baca puisi - aksara event organizer</Text>
                    <Text style={{ fontSize: 15, paddingLeft: 5, paddingTop: 5 }}>
                        Dear Prasmulyan,

                        Berikut kami teruskan kompetisi dari Aksara Event Organizer:
                        ------------------------------------------------------------------------------------------------------------------------------------
                        *[AKSARA EVENT ORGANIZER Proudly Present]*
                    </Text>
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