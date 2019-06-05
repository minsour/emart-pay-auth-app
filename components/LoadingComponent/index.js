import * as React from 'react';
import Modal from 'react-native-modal';
import { Portal } from 'react-native-paper';
import {styles} from './styes';
import { inject, observer } from 'mobx-react';

@inject('clickEventStore')
@observer
export class LoadingComponent extends React.Component {
  render() {
    const { clickEventStore, visibleKey } = this.props

    return (
      <Portal>
        <Modal
          isVisible={ clickEventStore.visible[visibleKey] }
          onBackButtonPress = { () => clickEventStore.hideLoading(visibleKey) }
          onBackdropPress = { () => clickEventStore.hideLoading(visibleKey) }
          animationIn={ this.props.animationIn || 'fadeIn' }
          animationOut={ this.props.animationOut || 'fadeOut' }
          style={ styles.modalContainer }
        >
          { this.props.children }
        </Modal>
      </Portal>
    );
  }
}
