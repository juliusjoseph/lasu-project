import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SaveAreaView,
} from 'react-native';
import slo from '../../assets/slo.gif';
import lop from '../../assets/lop.gif';
import slop from '../../assets/slop.gif';
import not from '../../assets/not.gif';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#af2e4a',
      }}>
      <View style={{ marginTop: '15%', marginLeft: '2%' }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          Welcome to
          <Text style={{ color: '#013274' }}> STESA-LASU Online PDFs</Text>
        </Text>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          Select your current Level to proceed
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: '15%',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('hundred')}
          style={{
            height: 180,
            width: '45%',
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={slo} style={{ height: '100%', width: '100%' }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('twohundred')}
          style={{
            height: 180,
            width: '45%',
            backgroundColor: 'white',
            marginLeft: '5%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={lop} style={{ height: '100%', width: '100%' }} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '3%',
          width: '95%',
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: '100%',
            width: '48%',
            backgroundColor: '#E6E6E6',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            marginLeft: '5%',
          }}>
          <Text style={{ fontSize: 15, fontWeight: '700' }}>100 LEVEL</Text>
        </View>
        <View
          style={{
            height: '100%',
            width: '48%',
            backgroundColor: '#E6E6E6',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 17,
            borderRadius: 5,
          }}>
          <Text style={{ fontSize: 15, fontWeight: '700' }}>200 LEVEL</Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          marginTop: '5%',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('threehundred')}
          style={{
            height: 180,
            width: '45%',
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={slop} style={{ height: '100%', width: '100%' }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('fourhundred')}
          style={{
            height: 180,
            width: '45%',
            backgroundColor: 'white',
            marginLeft: '5%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={not} style={{ height: '100%', width: '100%' }} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: '3%',
          width: '95%',
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: '100%',
            width: '48%',
            backgroundColor: '#E6E6E6',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            marginLeft: '5%',
          }}>
          <Text style={{ fontSize: 15, fontWeight: '700' }}>300 LEVEL</Text>
        </View>
        <View
          style={{
            height: '100%',
            width: '48%',
            backgroundColor: '#E6E6E6',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 17,
            borderRadius: 5,
          }}>
          <Text style={{ fontSize: 15, fontWeight: '700' }}>400 LEVEL</Text>
        </View>
      </View>
    </View>
  );
}
export default Home;
