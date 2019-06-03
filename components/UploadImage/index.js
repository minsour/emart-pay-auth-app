import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { inject, observer } from 'mobx-react';
import { Button } from 'react-native-paper';

@inject('cameraStore')
@observer
export default class UploadImage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.left}>
            <Text>{this.props.title}</Text>
          </View>
          <View style={styles.right}>
            <Button onPress={() => {this.props.cameraStore.showCamera(this.props.label)}}>
              업로드
            </Button>
          </View>
        </View>
        <View style={styles.bottom}>
          {this.props.cameraStore.photo[this.props.label] !== '' && <Image style={styles.photo} source={this.props.cameraStore.photo[this.props.label]} />}
        </View>
      </View>
    );
  }
}