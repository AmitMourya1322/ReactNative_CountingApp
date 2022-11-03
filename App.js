import  {useState,React} from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [count,setCount] = useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  const decrement =()=>{
    setCount(count-1);
  }
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Simple Counting App </Text>
    <View style={styles.btncon}>

    <View style={[{ width: "15%" }]}>
          <Button 
    style={styles.btn}
    title="+"
    onPress={increment}/>
        </View>
         <Text style={styles.count}>{count}</Text>
    <View style={[{ width: "15%" }]}>
    <Button 
    style={styles.btn}
    title="-"
    onPress={decrement}/>
    </View>
    </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    alignItems:'center',
  },
  heading:{
    fontSize:40,
  },
  btn:{
    height:20,
    margin:20,
    fontSize:50
  },btncon:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    padding:20,
    width:500,
    height:500

  },
  count:{
    fontSize:50,

  }
  
});
