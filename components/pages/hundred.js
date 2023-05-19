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

function Hundred({ navigation }) {
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
        <View style={{ marginTop: '3%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1xS_xILaK_oG0DATvITugcjuqd61YksOW/view?usp=share_link',
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
              TEACHER_EDUCATION_CURRICULUM_IN _NIGERIA
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity  onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1xTUoa3WVH7AMWoE8Z4N5YZ3XNnPTLAHu/view?usp=share_link',
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
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Sure A for CHM102.pdf.pdf</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1ycB_uDef4RkrOpyW1y1TzBZbvGIxL4a3/view?usp=share_link',
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
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>SPENCER GNS 102.pdf</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1wWGOaP_fc7mg6JyeGe-vUcZF0OsRnPDY/view?usp=share_link',
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
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>PHYSICS-LEARNING-MATERIAL106(UNITS& DIMENSIONS)</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1xkYa5RKvrcoEFNj9iDzJIKj54j-ApeTt/view?usp=share_link',
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
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>PHYSICAL OPTICS PHY 102.pdf</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1vjZ7NMcoBiLxqVqo1lPrUL47gNer-Rwd/view?usp=share_link',
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
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>PHY104Solution.pdf</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1wL4Y7BrkUekL8Mz_VT065r1YukpQb_4R/view?usp=share_link',
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
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>PHY104-LIVE-QUESTION-LGS.pdf</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1z_knFBgpS29a-iKJbOOgA9aKg1Jiaq76/view?usp=share_link',
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
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Phy104_Resitance Variation_lect3.pdf</Text>
          </TouchableOpacity>
        </View>

         <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1zeFiWFQThnYjBbBYrYRTFPVOBnH3IoiV/view?usp=share_link',
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
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Phy104_Ohms Law_Lect2.pdf</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1zZvbyMk3IcEWErtByXqg2sD_fDHSwYs5/view?usp=share_link',
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
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Phy104_Electrical Measurement_Lect5.pdf</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1zfEqvI_c5kfuof2lrFpQEKidbYSxeOcO/view?usp=share_link',
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
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Phy104_DC KircchhoffsLaws_Lect4.pdf</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '2%', alignItems: 'center' }}>
          <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1zaJy590dxXQxHWX86854Jvs9_yfr8X0k/view?usp=share_link',
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
            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Phy104_CAPACITORS_Lect1.pdf</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '3%', alignItems: 'center' }}>
        <TouchableOpacity  onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1vp1JmR7lb16yZah56_7wA0OMWz9dj98f/view?usp=share_link',
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
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#c41513'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>Phy104_- Answers attachment.pdf</Text>
          </TouchableOpacity>
      </View>

      <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity  onPress={() =>
              navigation.navigate('web3', {
                url: 'https://docs.google.com/document/d/1vtvuE-RlZFZIf6lKs6qYm8oc1tFmaCri/edit?usp=share_link&ouid=111591113071666122970&rtpof=true&sd=true',
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
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#4e286c'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>PHY104 (magnetic field).docx</Text>
          </TouchableOpacity>
      </View>

       <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1vEkTXOlrsHKWfUV2wDBg_rb0Q2IVDW1a/view?usp=share_link',
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
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#0000FF'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>PHY102-LIVE-QUESTION-LGS.pdf</Text>
          </TouchableOpacity>
      </View>

       <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1vJ_nUANmf5GAQm3bBOkf2f3tBIQdFzUl/view?usp=share_link',
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
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#000000'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>PHY102-LGS.pdf</Text>
          </TouchableOpacity>
      </View>


       <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1vu7ZYA58mXZV7_blnVcxRgkQaKwWpXCA/view?usp=share_link',
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
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#c41513'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>phy-104-exam-past-questions-and-answers.pdf</Text>
          </TouchableOpacity>
      </View>

      <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1w0L2PuQnUyO1a0lzg2DbH0ZuG7yP1yxj/view?usp=share_link',
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
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#4e286c'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>Phy 106.pdf</Text>
          </TouchableOpacity>
      </View>

       <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1uNSCNNzUusVopQ2oV8t9xZyAb9pXRsv8/view?usp=share_link',
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
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#0000FF'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>PHY 106-1.pdf</Text>
          </TouchableOpacity>
      </View>

       <View style={{ marginTop: '2%', alignItems: 'center' }}>
        <TouchableOpacity onPress={() =>
              navigation.navigate('web3', {
                url: 'https://drive.google.com/file/d/1vuCSejXEevz9K7glXtGACHJB62A5okwE/view?usp=share_link',
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
             flexDirection:'row'
          }}>
          <View style={{marginLeft:5}}>
          <FontAwesome5 name={'file-pdf'} size={25} color={'#000000'}/>
          </View>
          <Text style={{paddingLeft:5, fontSize:15}}>PHY 106 part 1 by Eureka.pdf</Text>
          </TouchableOpacity>
      </View>
      <View style={{margin:'2%',height:50, width:'100%'}}>
      </View>

      </ScrollView>
    </View>
  );
}
export default Hundred;
