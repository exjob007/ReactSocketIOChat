import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TextInput, Button, Alert} from 'react-native';

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Guest',
            text:'',
            message: ''
        }
        this.SendMessage = this.SendMessage.bind(this)
    }

    SendMessage() {
       let {text} = this.state
       if(text == ""){
        Alert.alert('Alert', 'Please input.') 
        this.setState({
            text:'',
            message: '',
            
        })
     }
       text = text.split(" ")
      
        if(text[0] == '@name'){
            this.setState({
                name: text[1],
                text: ''
            })      
        }
        else{
           // Alert.alert('hello',this.state.text)
            this.setState({
                message: this.state.text,
                text:''


            })
            this.props.Data(this.state.name + " : "+this.state.text)


        }   

    }

    

    render(){
        return(

            <View style={styles.AAA}>
            <Text>Name : {this.state.name}</Text>
                <View style={styles.TextA}>
                    <View style={styles.SectionInput}>
                        <TextInput style={styles.TextIn}
                            placeholder="Message//"
                            onChangeText={(text)=> this.setState({text})}
                            value={this.state.text}
                        />
                        <Button title="Send" style={styles.Btn}
                            onPress={this.SendMessage}
                            

                        
                        />

                    </View>
                </View>
            </View>
        )
    }

}
export default Input


const styles = StyleSheet.create({
    AAA: {
        flex: 1,
        //justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'stretch',
        //backgroundColor: '#00bfff',
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        
      
    },
    TextA: {
        
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
        height: 40,
        lineHeight: 40,
        backgroundColor: '#00bfff',
        color: '#fff',
        justifyContent: 'flex-end',
    },
    SectionInput: {
        
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    TextIn: {
        borderWidth: 0.5,
        flex:1,
        
    },
    Btn:{
        flex:2,
        backgroundColor: 'red',
        
    }
  });
  