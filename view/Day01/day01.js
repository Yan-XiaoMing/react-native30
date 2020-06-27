import React, {Component} from 'react';
import {StatusBar,Platform,View} from 'react-native'
import {style} from './style'

class Day01 extends Component {

  constructor() {
    super();
    this.state = {
      stopWatch:false,
      resetWatch:true,
      intialTime:0,
      currentTime:0,
      recordTime:0,
      timeAccumulation:0,
      totalTime:"00:00.00",
      sectionTime:"00:00.00",
      recordCounter:0,
      record:[
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
      ],
    };
  }

  componentDidMount(): void {
    if(Platform.OS === "ios"){
      StatusBar.setBarStyle(0);
    }
  }

  _startWatch(){
    if(this.state.resetWatch){
      this.setState({
        stopWatch:false,
        resetWatch:false,
        timeAccumulation:0,
        initialTime:(new Date()).getTime()
      })
    }else{
      this.setState({
        stopWatch:false,
        initialTime:(new Date()).getTime()
      })
    }
    let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
    let interval = setInterval(
      () => {
        this.setState({
          currentTime: (new Date()).getTime()
        })
        countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
        minute = Math.floor(countingTime/(60*1000));
        second = Math.floor((countingTime-6000*minute)/1000);
        milSecond = Math.floor((countingTime%1000)/10);
        seccountingTime = countingTime - this.state.recordTime;
        secminute = Math.floor(seccountingTime/(60*1000));
        secsecond = Math.floor((seccountingTime-6000*secminute)/1000);
        secmilSecond = Math.floor((seccountingTime%1000)/10);
        this.setState({
          totalTime: (minute<10? "0"+minute:minute)+":"+(second<10? "0"+second:second)+"."+(milSecond<10? "0"+milSecond:milSecond),
          sectionTime: (secminute<10? "0"+secminute:secminute)+":"+(secsecond<10? "0"+secsecond:secsecond)+"."+(secmilSecond<10? "0"+secmilSecond:secmilSecond),
        })
        if (this.state.stopWatch) {
          this.setState({
            timeAccumulation: countingTime
          })
          clearInterval(interval)
        };
      },10);
  }

  _stopWatch() {
    this.setState({
      stopWatch: true
    })
  }

  _addRecord() {
    let {recordCounter, record} = this.state;
    recordCounter++;
    if (recordCounter<8) {
      record.pop();
    }
    record.unshift({title:"计次"+recordCounter,time:this.state.sectionTime});
    this.setState({
      recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initialTime,
      recordCounter: recordCounter,
      record: record
    })
  }

  _clearRecord() {
    this.setState({
      stopWatch: false,
      resetWatch: true,
      intialTime: 0,
      currentTime:0,
      recordTime:0,
      timeAccumulation:0,
      totalTime: "00:00.00",
      sectionTime: "00:00.00",
      recordCounter: 0,
      record:[
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""}
      ],
    });
  }

  render() {
    return (
     <View style={style.watchContainer}>

     </View>
    );
  }
}




export default Day01;
