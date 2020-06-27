import Util from '../utils';

export const style = StyleSheet.create({
  watchContainer:{
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    marginTop: 60,
  },
  btnStart:{
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  btnStop:{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent:'center'
  },
  btnStartText:{
    fontSize:14,
    backgroundColor:'transparent'
  },
  btnStopText:{
    fontSize: 14,
    backgroundColor:'transparent',
    color:'#555',
  },
  recordList:{
    width: Util.size.width,
    height: Util.size.height - 300,
    paddingLeft: 15,
  },
  recordItem:{
    height: 40,
    borderBottomWidth:Util.pixel,borderBottomColor:"#bbb",
    paddingTop: 5, paddingLeft: 10, paddingRight:10, paddingBottom:5,
    flexDirection:"row",
    alignItems:"center"
  },
  recordItemTitle:{
    backgroundColor:"transparent",
    flex:1,
    textAlign:"left",
    paddingLeft:20,
    color:"#777"
  },
  recordItemTime:{
    backgroundColor:"transparent",
    flex:1,
    textAlign:"right",
    paddingRight:20,
    color:"#222"
  },
});
