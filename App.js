import React, { Component } from 'react';
 
import { StyleSheet, View, Button, Text, } from 'react-native';
import { useState } from 'react';
 
export default class MyProject extends Component {
  
  constructor(){

 
    super();
 
    this.state={
 
      // This is our Default number value
      NumberHolder : 0
 
    }
  }
 
GenerateRandomNumber=()=>
{
 
var RandomNumber = Math.floor(Math.random() * 16) + 1 ;
 
this.setState({
 
  NumberHolder : RandomNumber
 
})
}
 
  render() {
    return (
   
      <View style={styles.MainContainer} >
 
       <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.NumberHolder}</Text>
 
       <Button title="Generate Radndom Number" onPress={this.GenerateRandomNumber} />
        
      </View>
 
    );
  }
}
 
const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
 
});

// import { StatusBar } from 'expo-status-bar';
// import { Button, ScrollView, StyleSheet, Text, View, } from 'react-native';
// import { useState } from 'react';

// export default function App() {

//   const [conutState, setCountState] = useState(10000);
//   const [conutState2, setCountState2] = useState(0);


//   let status = 'Bạn thua';


//   return (

//     <View style={styles.container}>

//       <Text style={styles.text}>Tiền: {conutState} VND</Text>
//       <Button
//         title='Nạp 10000'
//         onPress={() => setCountState(conutState + 10000)}
//       />
//       <Button
//         title='Nạp 20000'
//         onPress={() => setCountState(conutState + 20000)}
//       />
//       <Button
//         title='Nạp 50000'
//         onPress={() => setCountState(conutState + 50000)}
//       />
//       <Button
//         title='reset'
//         onPress={() => setCountState(conutState === 0)}
//       />



//       <Text style={styles.text}>Tiền Cược: {conutState2} VND</Text>
//       <Button
//         title='Nạp 10000'
//         onPress={() => setCountState2(conutState2 + 10000)}
//       />
//       <Button
//         title='Nạp 20000'
//         onPress={() => setCountState2(conutState2 + 20000)}
//       />
//       <Button
//         title='Nạp 50000'
//         onPress={() => setCountState2(conutState2 + 50000)}
//       />

//       <Button
//         title='reset'
//         onPress={() => setCountState2(conutState2 === 0)}
//       />

//       <Text style={styles.text}>==- Chọn chẵn lẻ -==</Text>

//       <Text style={styles.text}>{status}</Text>
    

//       <Button
//         title='Chẵn'
//         onPresss={() => setShow(!isShow)}
//         onPress={() => setCountState2(conutState2 + 50000)}
//       />
//       <Button
//         title='lẻ'
//         onPresss={() => setShow(!isShow)}
//         onPress={() => setCountState2(conutState2 + 50000)}
//       />





//       <StatusBar style='auto' />
//     </View>



//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#D6D6D6',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'purple',
//     fontSize: 25,
//     // fontStyle:'italic',
//     // fontWeight:'bold',
//   }
// });
