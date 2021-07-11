import React, { Component, useEffect, useRef } from 'react';
import { FlatList } from 'react-native';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity, Dimensions
} from 'react-native';



class WelcomeScreen extends Component{

    widthScreen = Dimensions.get('window').width;
    heightScreen = Dimensions.get('window').height;

    // scrollX =  (new Animated.Value(0));

    state={
        completed:false,
        scrollX: new Animated.Value(0),
        index:0,
        onBoardings:[
            {
                id:'1',
                title: "Let's Travelling",
                description: "PIN !T a compound two websites that provide a variety of services and information to help students Prasetya Mulya",
                img: require('./assets/img/onboarding1.png')
            },
            {
                id:'2',
                title: "Navigation",
                description: "No need to worry, you will get the latest notifications",
                img: require('./assets/img/onboarding2.png')
            },
            {
                id:'3',
                title: "Destination",
                description: "Now, enjoy faster and more practical access to information at your fingertips",
                img: require('./assets/img/onboarding3.png')
            }
        ]
    }
    
    componentDidMount(){

        this.state.scrollX.addListener(({ value }) => {
            if (Math.floor(value / this.widthScreen) === this.state.onBoardings.length - 1) {
                this.setState({completed:true})
                console.log('aa')
            }
        });

    }

    componentWillUnmount(){
        this.state.scrollX.removeListener();
    }

    onViewableItemsChanged = (viewableItem,changed)=>{
        this.setState({index:viewableItem.changed[0].index})
        if(this.state.index == 2){
            this.setState({completed:true})
        }

    };

    render(){
        const {navigation} = this.props;
        return(
        
            <SafeAreaView style={styles.container}>
                
                <View>
                    <FlatList
                        data={this.state.onBoardings}
                        renderItem={({item})=>( 
                            <View
                                style={styles.imageAndTextContainer}
                            >
                                <View style={{ width:this.widthScreen,height:this.heightScreen*0.5, alignItems: 'center',justifyContent:'center'}}>
                                    <Image
                                        source={item.img}
                                        resizeMode="cover"
                                        style={{
                                            width: "80%",
                                            height: "80%",
                                        }}
                                    />
                                </View>
                                <View>
                                    <Text style={{
                                        marginTop:40,
                                        color: "white",
                                        fontWeight:'bold',
                                        fontSize:20,
                                        textAlign: 'center',
                                    }}
                                    >
                                    Welcome to
                                    </Text>
                                    <Text style={{
                                        color: "white",
                                        fontWeight:'bold',
                                        fontSize:20,
                                        textAlign: 'center',
                                    }}
                                    >
                                    PIN !T
                                    </Text>

                                    <Text style={{
                                        width:this.widthScreen*0.9,
                                        color: "white",
                                        fontSize:12,
                                        marginTop: 20,
                                        textAlign:'center',
                                        alignSelf:'center'
                                    }}
                                    >
                                        {item.description}
                                    </Text>
                                </View>
                                {/* Button */}
                                {
                                    item.id === '3' ? (
                                        
                                        <TouchableOpacity
                                            style={{
                                                position: 'absolute',
                                                bottom: '10%',
                                                width: 150,
                                                height: 60,
                                                justifyContent: 'center',
                                                backgroundColor: 'white',
                                                alignItems:'center',
                                                alignSelf:'center',
                                                borderRadius:20,
                                            }}
                                            onPress={() => { navigation.replace('LoginScreen')}}
                                        >
                                            <Text style={{color:'#1d3460'}}>{ "Lets Get Started"}</Text>
                                        </TouchableOpacity>
                                    ):(
                                        <></>
                                    )
                                }
                            </View>
            
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator
                        pagingEnabled={true}
                        keyExtractor={(item)=>item.id}
                        onScroll={Animated.event([{nativeEvent: {contentOffset:{x:this.state.scrollX}}}],{
                            useNativeDriver:false,
                        })}
                        onViewableItemsChanged={this.onViewableItemsChanged}
                    
                    />
                </View>
                <View style={styles.dotsRootContainer}>
                    
                </View>
            </SafeAreaView>

        )
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d3460'
    },
    imageAndTextContainer: {
        width: width
    },
    dotsRootContainer: {
        position: 'absolute',
        bottom: 200 > 700 ? '20%' : '16%',
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20 / 2,
        marginBottom: 20 * 3,
        height: 20,
    },
    dot: {
        borderRadius: 20,
        backgroundColor: 'blue',
        marginHorizontal: 20 / 2
    }
});

export default WelcomeScreen;