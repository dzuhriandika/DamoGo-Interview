import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import IMAGES from '../../config/image';

export default class Login extends Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seoulvcconnect.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fsvc-batch2-startup-logo-damogo.png&f=1&nofb=1',
            }}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
      </View>
    );
  }
}
