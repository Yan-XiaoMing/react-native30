import React, {Component} from 'react';
import {View,Text} from 'react-native'
import PropTypes from 'prop-types'

class WatchFace extends Component {

  static propTypes = {
    sectionTime:PropTypes.string.isRequired,
    totalTime:PropTypes.string.isRequired
  };

  render() {
    return (
      <View>
        <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
        <Text style={styles.totalTime}>{this.props.totalTime}</Text>
      </View>
    );
  }
}

export default WatchFace;
