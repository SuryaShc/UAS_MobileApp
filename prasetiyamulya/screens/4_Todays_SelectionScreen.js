import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import firestore from '@react-native-firebase/firestore';




export default class Todays_Selection extends React.Component {
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
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Today's Section</Text>
                </View>
                <View style={{ margin: 20 }}>
                    <Text style={styles.time}>08.00-09.40</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ alignItem: 'center', width: '100%', borderColor: '#6290C8', borderWidth: 1, justifyContent: 'center' }}>
                            <Image style={{ width: '100%', height: 80 }} source={require('./assets/img/lms_box.png')} />
                            <Text style={styles.matkul}>Software Design and Construction
                                Stanley Makalew, M.Sc.
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ margin: 20 }}>
                    <Text style={styles.time}>10.00 - 11.40</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ alignItem: 'center', width: '100%', borderColor: '#6290C8', borderWidth: 1 }}>
                            <Image style={{ width: '100%', height: 80 }} source={require('./assets/img/lms_box.png')} />
                            <Text style={styles.matkul}>Lab. Software Design and Construction
                                Stanley Makalew, M.Sc.

                            </Text>
                        </View>
                    </View>
                </View>


            </View>
        );
    }
}



const styles = StyleSheet.create({
    time: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    matkul: {
        padding: 20,
        fontSize: 15
    }

})
