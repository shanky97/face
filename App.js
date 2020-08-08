import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import {ProcessFaces} from './recognize'
import {detectFaces} from "face-recognition-react-native";
const App = (props) => {

  detectFaces(imageUrl).then(result => {
            console.log("Results of the facedetection",result);
            alert(result)
  }, e => {
      
  });



   return <View style={styles.conatiner}>
        <Text>sdsdsds</Text>
        {/* <TouchableOpacity onPress={()=>{ProcessFaces(require('./assets/pic.jpeg'))}} > */}
        <TouchableOpacity onPress={detectFaces(require('./assets/pic.jpeg'))} >

          <Text>dsdsd</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'red'
  },
})

export default App;
