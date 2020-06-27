import React, {Component} from 'react';
import {ListView, View, Text} from 'react-native';
import {style} from '../style';

class WatchRecord extends Component {

  static propTypes = {
    record: PropTypes.array.isRequired,
  };

  render() {

    return (
      <ListView
        style={style.recordList}
        renderRow={(rowData) =>
          <View style={style.recordItem}>
            <Text style={style.recordItemTitle}>{rowData.title}</Text>
            <View style={{alignItems: 'center'}}>
              <Text style={style.recordItemTime}>{rowData.time}</Text>
            </View>
          </View>}/>
    );
  }
}

export default WatchRecord;
