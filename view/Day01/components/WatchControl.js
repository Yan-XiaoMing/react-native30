import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {style} from '../style';
import {View,TouchableHighlight,Text} from 'react-native'

class WatchControl extends Component {

  static propTypes = {
    stopWatch: PropTypes.func.isRequired,
    clearRecord:PropTypes.func.isRequired,
    startWatch:PropTypes.func.isRequired,
    addRecord:PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      watchOn:false,
      startBtnText:'启动',
      startBtnColor:'#60B644',
      underlayColor:'#fff'
    }
  }

  _startWatch(){
    if(!this.state.watchOn){
      this.props.startWatch();
      this.setState({
        startBtnText:'停止',
        startBtnColor: "#ff0044",
        stopBtnText: "计次",
        underlayColor:"#eee",
        watchOn: true
      })
    }else{
      this.props.stopWatch();
      this.setState({
        startBtnText:'启动',
        startBtnColor:'#60B644',
        stopBtnText:'复位',
        underlayColor:'#eee',
        watchOn:false
      })
    }
  }

  _addRecord(){
    if(this.state.watchOn){
      this.props.addRecord()
    }
    else{
      this.props.clearRecord();
      this.setState({
        stopBtnText:'计次'
      })
    }
  }

  render() {
    return (
      <View style={style.watchContainer}>
        <View style={{flex:1,alignItems:'flex-start'}}>
          <TouchableHighlight style={style.btnStop}>
            <Text style={style.btnStopText}>{this.state.stopBtnText}</Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight  style={style.btnStart} underlayColor="#eee" onPress={()=>this._startWatch()}>
            <Text  style={[styles.btnStartText,{color:this.state.startBtnColor}]}>{this.state.startBtnText}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default WatchControl;
