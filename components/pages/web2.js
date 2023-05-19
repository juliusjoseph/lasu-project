import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function BetWeb2(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#af2e4a', height: '4%' }}></View>
      <View style={{ backgroundColor: '#E4E4E4' }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('twohundred')}
          style={{ width: 35 }}>
          <AntDesign name="back" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <WebView source={{ uri: props.route.params.url }} />
     
    </View>
  );
}
