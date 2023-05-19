import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { AntDesign } from '@expo/vector-icons';
function Fourhundred({ navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: '#E4E4E4' }}>
     <View style={{ backgroundColor: '#af2e4a', height: '4%' }}></View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('home')}
          style={{ width: 35 }}>
          <AntDesign name="back" size={30} color="black" />
        </TouchableOpacity>
      </View>
    <ScrollView>
      <View style={{ marginTop: '15%', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            borderRadius: 7,
            borderLeftWidth: 10,
            borderLeftColor: '#af2e4a',
            alignItems: 'center',
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#c41513'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>hjshdfhdg</Text>
          </TouchableOpacity>
      </View>

      <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            borderRadius: 7,
            borderLeftWidth: 10,
            borderLeftColor: '#4e286c',
            alignItems: 'center',
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#4e286c'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>hjshdfhdg</Text>
          </TouchableOpacity>
      </View>

       <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            borderRadius: 7,
            borderLeftWidth: 10,
            borderLeftColor: '#0000FF',
            alignItems: 'center',
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#0000FF'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>hjshdfhdg</Text>
          </TouchableOpacity>
      </View>

       <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            borderRadius: 7,
            borderLeftWidth: 10,
            borderLeftColor: '#000000',
            alignItems: 'center',
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#000000'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>hjshdfhdg</Text>
          </TouchableOpacity>
      </View>


       <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            borderRadius: 7,
            borderLeftWidth: 10,
            borderLeftColor: '#af2e4a',
            alignItems: 'center',
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#c41513'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>hjshdfhdg</Text>
          </TouchableOpacity>
      </View>

      <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            borderRadius: 7,
            borderLeftWidth: 10,
            borderLeftColor: '#4e286c',
            alignItems: 'center',
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#4e286c'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>hjshdfhdg</Text>
          </TouchableOpacity>
      </View>

       <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            borderRadius: 7,
            borderLeftWidth: 10,
            borderLeftColor: '#0000FF',
            alignItems: 'center',
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#0000FF'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>hjshdfhdg</Text>
          </TouchableOpacity>
      </View>

       <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            borderRadius: 7,
            borderLeftWidth: 10,
            borderLeftColor: '#000000',
            alignItems: 'center',
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#000000'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>hjshdfhdg</Text>
          </TouchableOpacity>
      </View>

      </ScrollView>
    </View>
  );
}
export default Fourhundred;
