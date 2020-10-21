/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, Button, View, Thumbnail} from 'native-base';
import Style from './styles';
import IMAGES from '../../config/image';
import {
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Materi from '../../Svg/Materi';
import Search from '../../Svg/search';
import Tutorial from '../../Svg/Tutorial';
import Test from '../../Svg/Test';
import Quiz from '../../Svg/Quiz';

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
        <View style={{backgroundColor: '#F7F7F7'}}>
          <ImageBackground
            source={IMAGES.bImage}
            style={{width: 100 + '%', height: 299}}>
            <View style={{paddingHorizontal: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Icon name="home" color="white" size={25} />
                <Text
                  style={{
                    fontSize: 14,
                    color: 'white',
                    marginTop: 22,
                    fontFamily: 'Nunito-SemiBold',
                    alignItems: 'center',
                  }}>
                  Purwokerto,Central Java
                </Text>
              </View>
              <View style={Style.inputWrapper}>
                <Search />
                <TextInput
                  placeholderTextColor="#AAAAAA"
                  placeholder="Hari ini mau makan apa?"
                  underlineColorAndroid="transparent"
                  style={Style.input}
                />
              </View>
              <View style={Style.iconContainer}>
                <Text>Kategori</Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={Style.card}>
                    <Button style={Style.iconBox}>
                      <Materi style={Style.icon} />
                    </Button>
                    <Text style={Style.titleIcon}>Restoran</Text>
                  </View>
                  <View style={Style.card}>
                    <Button style={Style.iconBox}>
                      <Tutorial style={Style.icon} />
                    </Button>
                    <Text style={Style.titleIcon}>Cafe</Text>
                  </View>
                  <View style={Style.card}>
                    <Button style={Style.iconBox}>
                      <Test style={Style.icon} />
                    </Button>
                    <Text style={Style.titleIcon}>Hotel</Text>
                  </View>
                  <View style={Style.card}>
                    <Button style={Style.iconBox}>
                      <Quiz style={Style.icon} />
                    </Button>
                    <Text style={Style.titleIcon}>Lainya</Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={{marginTop: 137, paddingHorizontal: 15}}>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
                fontWeight: 'bold',
                fontFamily: 'Nunito-SemiBold',
              }}>
              Cabang Toko
            </Text>
            <TouchableOpacity>
              <View style={Style.cardCabangToko}>
                <View style={Style.itemCabangToko}>
                  <Icon name="home" />
                  <Text>Warung Steak</Text>
                </View>
                <View style={Style.valueCabangToko}>
                  <Text>100 Toko</Text>
                </View>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
                fontWeight: 'bold',
                fontFamily: 'Nunito-SemiBold',
              }}>
              Baru aja bergabung nih!
            </Text>
            <TouchableOpacity>
              <View style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.berita2}
                  style={Style.thumnailMateri}
                />
                <View style={Style.thumnailWrapper}>
                  <View>
                    <Text style={Style.titleMateri}>Its Food</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text>9</Text>
                      <Text>5.0(3)</Text>
                      <Text>Rp.10000</Text>
                    </View>
                  </View>
                  <Icon name="heart" />
                  <Text> 3</Text>
                </View>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
                fontWeight: 'bold',
                fontFamily: 'Nunito-SemiBold',
              }}>
              Favoritos!
            </Text>
            <TouchableOpacity>
              <View style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.berita2}
                  style={Style.thumnailMateri}
                />
                <View style={Style.thumnailWrapper}>
                  <View>
                    <Text style={Style.titleMateri}>Its Food</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text>9</Text>
                      <Text>5.0(3)</Text>
                      <Text>Rp.10000</Text>
                    </View>
                  </View>
                  <Icon name="heart" />
                  <Text> 3</Text>
                </View>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
                fontWeight: 'bold',
                fontFamily: 'Nunito-SemiBold',
              }}>
              Don't miss out!
            </Text>
            <TouchableOpacity>
              <View style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.berita2}
                  style={Style.thumnailMateri}
                />
                <View style={Style.thumnailWrapper}>
                  <View>
                    <Text style={Style.titleMateri}>Its Food</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text>9</Text>
                      <Text>5.0(3)</Text>
                      <Text>Rp.10000</Text>
                    </View>
                  </View>
                  <Icon name="heart" />
                  <Text> 3</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
