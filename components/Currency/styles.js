export default {
  container: {
    backgroundColor: '#186da5',
    flexDirection: 'column',
    height:'100%',
    width:'100%',
    justifyContent: 'space-between'
  },
  questionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fbf0e5',
    height: 160,
    borderRadius: 8,
    marginTop: 40,
    alignSelf: 'center',
    marginHorizontal: 25,
    width: '100%'
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
    marginTop: 60,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
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
  questionText: {
    alignSelf: 'center',
    resizeMode: 'contain',
    flex: 1
  },
  question: {
    alignSelf: 'center',
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: 'orange',
    height: 80,
    width: 80,
    borderRadius: 10
  },
  Icon: {},
  timer: {
    backgroundColor: '#023667',
    width: '100%',
    // height:'100%',
    zIndex: 100
  }
};
