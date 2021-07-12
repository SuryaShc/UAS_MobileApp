import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import firestore from '@react-native-firebase/firestore';




export default class Career_Point extends React.Component {
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
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Career Point</Text>
                </View>
                <View style={{ paddingLeft: 20, marginTop: 30, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                    <Text style={{ marginLeft: 140, fontSize: 20, marginBottom:40 }}>Career Point</Text>
                </View>
                <View style={{ paddingLeft: 20, marginTop: 20, paddingBottom: 10, flexDirection: 'row', alignItems: 'center',  }}>
                    <Text style={{ marginLeft: 5, fontSize: 20 }}>Career Point                                     20</Text>
                </View>
                <View style={{ paddingLeft: 20, marginTop: 30, paddingBottom: 10, flexDirection: 'row', alignItems: 'flex-end',  }}>
                    <Text style={{ marginLeft: 5, fontSize: 20, alignItems: 'flex-end'}}>                                                            10</Text>
                </View>
                <View style={{ paddingLeft: 20, marginTop: 30, paddingBottom: 10, flexDirection: 'row', alignItems: 'center',  }}>
                    <Text style={{ marginLeft: 5, fontSize: 20 }}>                                                              5</Text>
                </View>
                <View style={{ paddingLeft: 20, marginTop: 30, paddingBottom: 10, flexDirection: 'row', alignItems: 'center',  }}>
                    <Text style={{ marginLeft: 5, fontSize: 20 }}>                                                            10</Text>
                </View>
                <View style={{ paddingLeft: 20, marginTop: 30, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 3.5, borderColor: '#6290C8' }}>
                    <Text style={{ marginLeft: 5, fontSize: 20 }}>                                                              5</Text>
                </View>
                <View style={{ paddingLeft: 20, marginTop: 30, paddingBottom: 10, flexDirection: 'row', alignItems: 'center',  }}>
                    <Text style={{ marginLeft: 5, fontSize: 20 }}>Total Career Points                40/145</Text>
                </View>
                <View style={{ paddingLeft: 20, marginTop: 30, paddingBottom: 10, flexDirection: 'row', alignItems: 'center',  }}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>You Must Collect 100 points again!</Text>
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