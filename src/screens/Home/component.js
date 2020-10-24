/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, Button, View, Spinner, Thumbnail} from 'native-base';
import Style from './styles';
import IMAGES from '../../config/image';
import {
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import Jelajahi from '../../svg/Home';
import Resto from '../../svg/Resto';
import Cafe from '../../svg/Cafe';
import Hotel from '../../svg/Hotel';
import Lain from '../../svg/Lain';
import Price from '../../svg/Price';
import Search from '../../svg/Search';
import Eat from '../../svg/Eat';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
    };
    this.getItems = this.getItems.bind(this);
    this.renderCabangToko = this.renderCabangToko.bind(this);
    this.renderNew = this.renderNew.bind(this);
    this.renderFavoritos = this.renderFavoritos.bind(this);
    this.renderDontMiss = this.renderDontMiss.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }
  getItems = () => {
    axios
      .get('http://127.0.0.1:5000/stores')
      .then(res => {
        this.setState({
          items: res.data,
          isLoading: false,
        });
      })
      .catch(err => console.log(err));
  };
  renderCabangToko = () => {
    if (this.state.isLoading) {
      return <Spinner />;
    } else {
      const listItem = this.state.items.map(data => (
        <View style={Style.cardCabangToko}>
                <View key={data.id} style={Style.itemCabangToko}>
                  <Thumbnail
                    source={{
                      uri:
                      `${data.store_logo}`,
                    }}
                    style={{height: 32, width: 32, alignSelf: 'center', marginTop: 16}}
                  />
                  <Text>{data.store_name}</Text>
                </View>
                <View style={Style.valueCabangToko}>
                  <Text style={{alignSelf:'center', marginTop: 3}}>100 Toko</Text>
                </View>
              </View>
      ));
      return listItem;
    }
  };
  renderNew = () => {
    if (this.state.isLoading) {
      return <Spinner />;
    } else {
      const listItem = this.state.items.filter(item => item.num_offers < 100).map(filteredItem => (
        <View key={filteredItem.id} style={Style.cardMateri}>
        <Thumbnail
          square
          source={{uri:
            `${filteredItem.store_image}`,
          }}
          style={Style.thumnailMateri}
        />
        <View style={Style.thumnailWrapper}>
          <View>
        <Text style={Style.titleMateri}>{filteredItem.store_name}</Text>
            <View style={{flexDirection: 'row'}}>
        <Eat style={{marginTop:3}} />
        <Text style={{color: '#AAA',marginRight:5}}>{filteredItem.num_offers}</Text>
        <Icon name="star" color="#FFBB00" size={15} />
        <Text style={{color:'#FFBB00',marginRight:5}}>{filteredItem.num_reviews}</Text>
        <Price style={{marginTop:3}} />
        <Text style={{color:'#AAA'}}>{filteredItem.delivery_price}</Text>
            </View>
          </View>
          <Icon name="heart"  size={25} color="#FF4A4A" style={{marginTop:15, marginLeft:120}}/>
        </View>
      </View>
      ));
      return listItem;
    }
  };
  renderFavoritos = () => {
    if (this.state.isLoading) {
      return <Spinner />;
    } else {
      const listItem = this.state.items.filter(item => item.isFav,isNaN(NaN)).map(filteredItem => (
        <View key={filteredItem.id} style={Style.cardMateri}>
        <Thumbnail
          square
          source={{uri:
            `${filteredItem.store_image}`,
          }}
          style={Style.thumnailMateri}
        />
        <View style={Style.thumnailWrapper}>
          <View>
        <Text style={Style.titleMateri}>{filteredItem.store_name}</Text>
            <View style={{flexDirection: 'row'}}>
        <Eat style={{marginTop:3}} />
        <Text style={{color: '#AAA',marginRight:5}}>{filteredItem.num_offers}</Text>
        <Icon name="star" color="#FFBB00" size={15} />
        <Text style={{color:'#FFBB00',marginRight:5}}>{filteredItem.num_reviews}</Text>
        <Price style={{marginTop:3}} />
        <Text style={{color:'#AAA'}}>{filteredItem.delivery_price}</Text>
            </View>
          </View>
          <Icon name="heart"  size={25} color="#FF4A4A" style={{marginTop:15, marginLeft:120}}/>
        </View>
      </View>
      ));
      return listItem;
    }
  };
  renderDontMiss = () => {
    if (this.state.isLoading) {
      return <Spinner />;
    } else {
      const listItem = this.state.items.filter(item => item.num_offers > 100).map(filteredItem => (
        <View key={filteredItem.id} style={Style.cardMateri}>
        <Thumbnail
          square
          source={{uri:
            `${filteredItem.store_image}`,
          }}
          style={Style.thumnailMateri}
        />
        <View style={Style.thumnailWrapper}>
          <View>
        <Text style={Style.titleMateri}>{filteredItem.store_name}</Text>
            <View style={{flexDirection: 'row'}}>
        <Eat style={{marginTop:3}} />
        <Text style={{color: '#AAA',marginRight:5}}>{filteredItem.num_offers}</Text>
        <Icon name="star" color="#FFBB00" size={15} />
        <Text style={{color:'#FFBB00',marginRight:5}}>{filteredItem.num_reviews}</Text>
        <Price style={{marginTop:3}} />
        <Text style={{color:'#AAA'}}>{filteredItem.delivery_price}</Text>
            </View>
          </View>
          <Icon name="heart"  size={25} color="#FF4A4A" style={{marginTop:15, marginLeft:120}}/>
        </View>
      </View>
      ));
      return listItem;
    }
  };
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
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="location-pin" color="white" size={15} style={{marginTop:20}}/>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'white',
                      marginTop: 22,
                      fontFamily: 'Nunito-SemiBold',
                      alignSelf: 'center',
                      alignContent: 'center',
                      textAlign: 'center',
                    }}>
                    Purwokerto,Central Java
                  </Text>
                  <Icon name="chevron-small-down" color="white" size={20} style={{marginTop:20}}/>
                </View>
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
                      <Resto style={Style.icon} />
                    </Button>
                    <Text style={Style.titleIcon}>Restoran</Text>
                  </View>
                  <View style={Style.card}>
                    <Button style={Style.iconBox}>
                      <Cafe style={Style.icon} />
                    </Button>
                    <Text style={Style.titleIcon}>Cafe</Text>
                  </View>
                  <View style={Style.card}>
                    <Button style={Style.iconBox}>
                      <Hotel style={Style.icon} />
                    </Button>
                    <Text style={Style.titleIcon}>Hotel</Text>
                  </View>
                  <View style={Style.card}>
                    <Button style={Style.iconBox}>
                      <Lain style={Style.icon} />
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
          <ScrollView horizontal style={{flexDirection: 'row'}}>
              {this.renderCabangToko()}
            </ScrollView>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
                fontWeight: 'bold',
                fontFamily: 'Nunito-SemiBold',
              }}>
              Baru aja bergabung nih!
            </Text>
            <ScrollView horizontal style={{flexDirection:'row'}}>{this.renderNew()}</ScrollView>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
                fontWeight: 'bold',
                fontFamily: 'Nunito-SemiBold',
              }}>
              Favoritos!
            </Text>
            <ScrollView horizontal style={{flexDirection:'row'}}>{this.renderFavoritos()}</ScrollView>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
                fontWeight: 'bold',
                fontFamily: 'Nunito-SemiBold',
              }}>
              Don't miss out!
            </Text>
            <ScrollView horizontal style={{flexDirection:'row'}}>{this.renderDontMiss()}</ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}
