import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const age = 22;
  const licenseyears = 0;
  let feedback = '';
  

  if( age >= 18 )
    if(licenseyears >= 3) 
    {
    feedback = 'You are a qualified, safe driver'
    }
    else
    {
           feedback = 'You are allowed to drive. Accidents about to happen.'
           } else 
           {
           feedback = 'The roads are still safe.'
           }
  

          
  return (
    <View style={styles.container}>
      <Text style = {styles.response}>Drive Check</Text>
    <Image source={{uri:'https://tse1.mm.bing.net/th/id/OIP.8h6hFXnqpU3AZY7-GX5wqAHaET?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3', }}
    style = {styles.Image}/>

<Text style = {styles.response}>Age: {age}</Text>
<Text style = {styles.response}>License years: {licenseyears}</Text>
    <Text style={styles.response}> {feedback} </Text>
      
      
      </View>
     
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },

    response: {
      fontSize: 28,
      color: 'red',
      fontWeight: 800,
      marginVertical: 30
    },
    Image: {
      width: '70%',
      height: '35%',
      resizeMode: 'cover',
      top: 0,
      position: 'absolute'

    },
    content: {

    }
});
