export default {
  container: {
  
    backgroundColor: '#186da5',
    flexDirection: 'column',
    flex:1,
    justifyContent: 'space-between'
  },
  questionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fbf0e5',
    height:80,
    borderRadius:8,
    marginTop:40,
    alignSelf:'center',
    marginHorizontal:25,
    width:'75%'

  },
  optionWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 20
  },
  button: {
    backgroundColor: '#fbf0e5',
    borderRadius: 3,
    height: 50,
    width: '50%',
    marginTop: 80,
 shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
    elevation: 6,
    alignItems: 'center'
  },
  buttonText: {
    color: '#1062a4',
    fontWeight: '700',
    fontSize: 18,
    marginTop: 15,
    textAlign: 'center',
    alignSelf: 'center'
  },
  questionText:{
    color: 'blue',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize:18,
    fontWeight:'700'
  },
  question:{
    alignSelf:'center',
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
    backgroundColor:'orange',
    height:40,
    width:40,
    borderRadius:10,
  },
    timer:{
    backgroundColor:'#023667',
    width:'100%',
   // height:'100%',
    zIndex:100,

  }
};
