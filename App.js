/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Alert, ScrollView} from 'react-native';
import Input from './Components/input'
import SocketIOClient from 'socket.io-client';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(Props){
    super(Props)
    this.state = {
      message: [],
    }
    this.GetDatalist = this.GetDatalist.bind(this)
/*
    const socket = SocketIOClient('http://10.104.230.64:9000')

    socket.on('message', (message) => {
      this.setState({
        message: this.state.message.concat([message])
      })
    });
*/
  }

  

  componentDidMount(){
    StatusBar.setHidden(true);
    //Alert.alert('Change Name?', '@name yourname->Send') 
    
  }
  GetDatalist(data){
    //Alert.alert(data) 

   /* this.setState({
      message: this.state.message.concat([data]),
      

    })*/
    const socket =  SocketIOClient('http://10.104.230.64:9000')
    socket.emit('message', data);
    this.setState({
      message: this.state.message.concat([data])
    })
  }
 
  response = ()=>{
    const socket =  SocketIOClient('http://10.104.230.64:9000')
    socket.on('message', (message)=>{
      //Alert.alert(message)
      this.setState({
        message: this.state.message.concat([data])
      })
      
    })
  }
  render() {
    let Resev = this.state.message.reverse()
    let item = Resev.map((data)=>{
      return <Text style={styles.Message}>{data}</Text>

    })


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>TalkTalk Haha</Text>

        <View style={styles.MessageBox}>
        <ScrollView>
           {item}
        </ScrollView>
            
        </View>
      
        <Input Data={this.GetDatalist}/>





      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    //backgroundColor: '#00bfff',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    height: 40,
    lineHeight: 40,
    backgroundColor: '#00bfff',
    color: '#fff'
  },
  Message:{
    padding:10,
    backgroundColor: '#0080ff',
    fontSize:20,
    borderRadius: 15,
    alignSelf: 'auto',
    margin:5,
    zIndex: -10,
    color: '#fff'
  },
  MessageBox: {
    height:550
  }
});
