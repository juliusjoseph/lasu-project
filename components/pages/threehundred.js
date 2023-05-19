import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AntDesign } from '@expo/vector-icons';

function Threehundred({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#E4E4E4' }}>
      <View style={{ backgroundColor: '#af2e4a', height: '4%' }}></View>
      <View>
        <TouchableOpacity
          onPress={() =>navigation.navigate('home')}
          style={{ width: 35 }}>
          <AntDesign name="back" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ marginTop: '3%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('web', {
                url: 'https://drive.google.com/file/d/1aar4a8n6WeVYDDHPLDGFY1L3DsG1gJC-/view?usp=share_link',
              })
            }
            style={{
              height: 50,
              width: '95%',
              backgroundColor: 'white',
              borderRadius: 7,
              borderLeftWidth: 10,
              borderLeftColor: '#af2e4a',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{ marginLeft: 5 }}>
              <FontAwesome5 name={'file-pdf'} size={25} color={'#c41513'} />
            </View>
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>
              PHYSICS 305.pdf
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('web', {
                url: 'https://drive.google.com/file/d/1aV5E6s_xoXK-5GIDIXmX3hoP9xTTQATl/view?usp=share_link',
              })
            }
            style={{
              height: 50,
              width: '95%',
              backgroundColor: 'white',
              borderRadius: 7,
              borderLeftWidth: 10,
              borderLeftColor: '#4e286c',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{ marginLeft: 5 }}>
              <FontAwesome5 name={'file-pdf'} size={25} color={'#4e286c'} />
            </View>
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>
              PHYSICS 305 PQ.pdf
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('web', {
                url: 'https://docs.google.com/document/d/1aRK9jwHBLvTAmlXHFF0baE1HkFwfk0BP/edit?usp=share_link&ouid=111591113071666122970&rtpof=true&sd=true',
              })
            }
            style={{
              height: 50,
              width: '95%',
              backgroundColor: 'white',
              borderRadius: 7,
              borderLeftWidth: 10,
              borderLeftColor: '#0000FF',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{ marginLeft: 5 }}>
              <FontAwesome5 name={'file-pdf'} size={25} color={'#0000FF'} />
            </View>
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>
              PHYSICS 305 COURSE OUTLINE.docx"
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('web', {
                url: ' https://docs.google.com/document/d/1bXQvFBHECtvGREJbHEycJoNp8ibN_bSA/edit?usp=share_link&ouid=111591113071666122970&rtpof=true&sd=true',
              })
            }
            style={{
              height: 50,
              width: '95%',
              backgroundColor: 'white',
              borderRadius: 7,
              borderLeftWidth: 10,
              borderLeftColor: '#000000',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{ marginLeft: 5 }}>
              <FontAwesome5 name={'file-pdf'} size={25} color={'#000000'} />
            </View>
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>
              PHYSICS 206 (2).docx
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('web', {
                url: 'https://docs.google.com/presentation/d/1b-PQBVLPSaX3aOgy1ja5JyIG65onKRlp/edit?usp=share_link&ouid=111591113071666122970&rtpof=true&sd=true',
              })
            }
            style={{
              height: 50,
              width: '95%',
              backgroundColor: 'white',
              borderRadius: 7,
              borderLeftWidth: 10,
              borderLeftColor: '#af2e4a',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{ marginLeft: 5 }}>
              <FontAwesome5 name={'file-pdf'} size={25} color={'#c41513'} />
            </View>
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>
              PHYSICS 303_C19_3.pptx
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('web', {
                url: 'https://docs.google.com/presentation/d/1awcWxpf0geE0l5eOTqnLXY4WDL9vVKOT/edit?usp=share_link&ouid=111591113071666122970&rtpof=true&sd=true',
              })
            }
            style={{
              height: 50,
              width: '95%',
              backgroundColor: 'white',
              borderRadius: 7,
              borderLeftWidth: 10,
              borderLeftColor: '#4e286c',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{ marginLeft: 5 }}>
              <FontAwesome5 name={'file-pdf'} size={25} color={'#4e286c'} />
            </View>
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>
              PHYSICS 303_C19_2.pptx
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('web', {
                url: 'https://docs.google.com/presentation/d/1aseXsH3SZpsziRQaYiu3qMlvZg5oilqG/edit?usp=share_link&ouid=111591113071666122970&rtpof=true&sd=true',
              })
            }
            style={{
              height: 50,
              width: '95%',
              backgroundColor: 'white',
              borderRadius: 7,
              borderLeftWidth: 10,
              borderLeftColor: '#0000FF',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{ marginLeft: 5 }}>
              <FontAwesome5 name={'file-pdf'} size={25} color={'#0000FF'} />
            </View>
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>
              PHY 303_C19_1.pptx
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('web', {
                url: 'https://drive.google.com/file/d/1btDWSOPmhg2pf5oCR-oV57Vq5_nSh2d3/view?usp=share_link',
              })
            }
            style={{
              height: 50,
              width: '95%',
              backgroundColor: 'white',
              borderRadius: 7,
              borderLeftWidth: 10,
              borderLeftColor: '#000000',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{ marginLeft: 5 }}>
              <FontAwesome5 name={'file-pdf'} size={25} color={'#000000'} />
            </View>
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>
              Phy 303 note & pq.pdf
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('web', {
                url: 'https://drive.google.com/file/d/1bRLKVwCscBwooymlZ64bCjoG4xdemxSu/view?usp=share_link',
              })
            }
            style={{
              height: 50,
              width: '95%',
              backgroundColor: 'white',
              borderRadius: 7,
              borderLeftWidth: 10,
              borderLeftColor: '#0000FF',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{ marginLeft: 5 }}>
              <FontAwesome5 name={'file-pdf'} size={25} color={'#0000FF'} />
            </View>
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>
              Vibrating String 301 classical-mechanics-system
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('web', {
                url: 'https://drive.google.com/file/d/1bw9jAtMd45gbv5lWup5I6PusBQ8aydjt/view?usp=share_link',
              })
            }
            style={{
              height: 50,
              width: '95%',
              backgroundColor: 'white',
              borderRadius: 7,
              borderLeftWidth: 10,
              borderLeftColor: '#c41513',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{ marginLeft: 5 }}>
              <FontAwesome5 name={'file-pdf'} size={25} color={'#c41513'} />
            </View>
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Phy 301.pdf</Text>
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
              borderLeftColor: '#c41513',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{ marginLeft: 5 }}>
              <FontAwesome5 name={'file-pdf'} size={25} color={'#c41513'} />
            </View>
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>hjshdfhdg</Text>
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
              flexDirection: 'row',
            }}>
            <View style={{ marginLeft: 5 }}>
              <FontAwesome5 name={'file-pdf'} size={25} color={'#4e286c'} />
            </View>
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>hjshdfhdg</Text>
          </TouchableOpacity>
        </View>
         <View style={{margin:'2%',height:50, width:'100%'}}>
      </View>

      </ScrollView>
    </View>
  );
}
export default Threehundred;
