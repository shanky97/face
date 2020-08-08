import React, { Component } from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
// import {ProcessFaces} from './recognize'
import {detectFaces} from "face-recognition-react-native";
export default class App extends Component {

   acbc(imageUrl){
  detectFaces(imageUrl).then(result => {
            console.log("Results of the facedetection",result);
            alert(result)
  }, e => {
      console.log("error:",e);
      
  })
}



  render(){ return (<View style={styles.conatiner}>
        <Text>sdsdsds</Text>
        {/* <TouchableOpacity onPress={()=>{ProcessFaces(require('./assets/pic.jpeg'))}} > */}
        <TouchableOpacity onPress={()=>{this.acbc('./assets/faces.png')}} >

          <Text>dsdsd</Text>
        </TouchableOpacity>
    </View>)}
}

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'red'
  },
})


