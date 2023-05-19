import React, { useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import ola from '../../assets/ola.jpg'
import slo from '../../assets/slo.gif'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function Splash(props) {
useEffect(() => {
  setTimeout(() => props.navigation.navigate('home'), 5000);
},);

  return (
    <View
      style={{ flex: 1, backgroundColor: '#af2e4a', justifyContent: 'center' }}>
      <View style={{ alignItems: 'center', marginTop:-60 }}>
        <Image
          source={ola}
          style={{ height: 180, width: 180, borderRadius: 180 / 2 }}
        />
      </View>
      <View style={{alignItems:'center'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          flexDirection: 'row',
          backgroundColor: 'white',
          width: '80%',borderRadius:20, 
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}>
          STESA-LASU PDFs
        </Text>
        <View style={{ marginLeft: 15 }}>
          <FontAwesome5 name={'file-pdf'} color={'#af2e4a'} size={30} />
        </View>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>
          Courtesy: 17th STESA LASU Executive
        </Text>
      </View>
    </View>
  );
}
export default Splash;
